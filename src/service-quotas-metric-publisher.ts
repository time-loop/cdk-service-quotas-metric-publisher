import {
  aws_iam,
  aws_lambda_nodejs,
  aws_lambda,
  aws_events,
  aws_events_targets,
  aws_logs,
  Duration,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Namer } from 'multi-convention-namer';

export interface IServiceQuota {
  serviceCode: string;
  quotaCode: string;
}

export interface ServiceQuotasMetricPublisherProps {
  /**
   * How long to retain logs published to CloudWatch logs.
   * @default aws_logs.RetentionDays.THREE_MONTHS
   */
  readonly cloudwatchLogsRetention?: aws_logs.RetentionDays;
  /**
   * The CloudWatch namespace to publish metrics to.
   * @default 'AWS/ServiceQuotaLimit'
   */
  readonly cwNamespace?: string;
  /**
   * Time intervals that Lambda will be triggered to publish metric in CloudWatch.
   * @default 1440 (1 day)
   */
  readonly publishFrequency?: number;
  /**
   * The list of service quotas to monitor.
   * @default ServiceQuotas[]
   */
  readonly serviceQuotas?: IServiceQuota[];
  /**
   * The list of regions to monitor the quotas.
   * @default  ['us-east-1']
   */
  readonly regionsToMonitor?: string[];
}

/**
 * A construct that creates an AWS Lambda function to publish applied service quotas metrics to CloudWatch.
 */
export class ServiceQuotasMetricPublisher extends Construct {
  readonly publishFrequency: number;
  readonly regionsToMonitor: string[];
  readonly handler: aws_lambda_nodejs.NodejsFunction;
  readonly rule: aws_events.Rule;
  readonly cwNamespace: string;
  readonly serviceQuotas: IServiceQuota[];

  /**
   * Creates a new instance of ServiceQuotasMetricPublisher.
   * @param scope The parent construct.
   * @param id The ID of the construct.
   * @param props The properties of the construct.
   */

  constructor(scope: Construct, id: Namer, props: ServiceQuotasMetricPublisherProps) {
    super(scope, id.pascal);
    this.publishFrequency = props.publishFrequency ?? 1;
    this.regionsToMonitor = props.regionsToMonitor ?? ['us-east-1'];
    this.serviceQuotas = props.serviceQuotas ?? [];
    this.cwNamespace = props.cwNamespace ?? 'AWS/ServiceQuotaLimit';
    const myConstruct = this;

    this.handler = new aws_lambda_nodejs.NodejsFunction(myConstruct, 'monitor', {
      runtime: aws_lambda.Runtime.NODEJS_18_X,
      bundling: {
        externalModules: ['@aws-sdk/*'],
        minify: true,
      },
      handler: 'monitor',
      logRetention: props.cloudwatchLogsRetention ?? aws_logs.RetentionDays.THREE_MONTHS,
      memorySize: 512,
      timeout: Duration.seconds(45),
    });

    [
      new aws_iam.PolicyStatement({
        actions: [
          'servicequotas:ListServices',
          'servicequotas:GetServiceQuota',
          'servicequotas:ListAWSDefaultServiceQuotas',
          'servicequotas:ListServiceQuotas',
          'servicequotas:GetAWSDefaultServiceQuota',
        ],
        resources: ['*'],
      }),
      new aws_iam.PolicyStatement({
        actions: ['cloudwatch:PutMetricData'],
        resources: ['*'],
        conditions: {
          StringEquals: {
            'cloudwatch:namespace': props.cwNamespace ?? this.cwNamespace,
          },
        },
      }),
    ].forEach((policy) => this.handler.addToRolePolicy(policy));

    this.handler.addEnvironment('CW_NAMESPACE', props.cwNamespace ?? this.cwNamespace);
    this.handler.addEnvironment('SERVICE_QUOTAS_LIST', JSON.stringify(this.serviceQuotas));
    this.handler.addEnvironment('REGIONS_TO_MONITOR', JSON.stringify(props.regionsToMonitor ?? this.regionsToMonitor));
    this.rule = new aws_events.Rule(this, 'rule', {
      schedule: aws_events.Schedule.rate(Duration.minutes(this.publishFrequency)),
    });
    this.rule.addTarget(new aws_events_targets.LambdaFunction(this.handler));
  }
}
