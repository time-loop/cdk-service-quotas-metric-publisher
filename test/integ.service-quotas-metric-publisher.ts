import { join } from 'path';
import { IntegTest, ExpectedResult } from '@aws-cdk/integ-tests-alpha';
import { App, Stack, StackProps, aws_lambda, aws_lambda_nodejs, Duration, aws_iam } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Namer } from 'multi-convention-namer';
import { IntegTestResources } from './utils/integ-tests-types';
import { ServiceQuotasMetricPublisher } from '../src';

// The BaselineStack creates an instance of ServiceQuotasMetricPublisher
export class BaselineStack extends Stack {
  readonly lambdaFunction: ServiceQuotasMetricPublisher;

  constructor(scope: Construct, props: StackProps) {
    const id = new Namer(['monitor', 'baseline', 'sevices', 'quotas']);
    super(scope, id.pascal, props);
    this.lambdaFunction = new ServiceQuotasMetricPublisher(this, id, {
      publishFrequency: 1,
      cwNamespace: 'AWS/ServiceQuotaLimit',
      serviceQuotas: [
        {
          serviceCode: 'elasticloadbalancing',
          quotaCode: 'L-7E6692B2',
        },
      ],
    });
  }
}

// The AssertionStack creates AWS Lambda helpers to run the assertions
export class AssertionStack extends Stack {
  constructor(scope: Construct, props: StackProps) {
    const id = new Namer(['helper', 'monitor', 'baseline']);
    super(scope, id.pascal, props);
    // The Lambda GetServiceQuotaLimitIntegRunnerFunction is used to run the assertions as the current awsApiCall presents an issue with the AWS SDK and timestamps parsing.
    new aws_lambda_nodejs.NodejsFunction(this, 'GetServiceQuotaLimitIntegRunnerFunction', {
      functionName: 'GetServiceQuotaLimitIntegRunnerFunction',
      entry: join(__dirname, 'utils/get-service-quotas-metrics.ts'),
      runtime: aws_lambda.determineLatestNodeRuntime(this),
      timeout: Duration.seconds(15),
    }).addToRolePolicy(
      new aws_iam.PolicyStatement({
        actions: ['cloudwatch:GetMetricData'],
        resources: ['*'],
      }),
    );
  }
}

const app = new App();
const stack = new BaselineStack(app, {
  env: {
    account: IntegTestResources.AWS_ACCOUNT,
    region: IntegTestResources.AWS_REGION,
  },
});
const assertionStack = new AssertionStack(app, {
  env: {
    account: IntegTestResources.AWS_ACCOUNT,
    region: IntegTestResources.AWS_REGION,
  },
});

const integ = new IntegTest(app, 'integ', {
  testCases: [stack],
  enableLookups: true,
  regions: [IntegTestResources.AWS_REGION],
  cdkCommandOptions: {
    destroy: {
      args: {
        force: true,
      },
    },
  },
});

integ.node.addDependency(assertionStack, stack);
const lambdaFunctionTest = integ.assertions.invokeFunction({
  functionName: 'GetServiceQuotaLimitIntegRunnerFunction',
});
lambdaFunctionTest.expect(ExpectedResult.objectLike({ StatusCode: 200 }));
lambdaFunctionTest.assertAtPath('Payload.body.message', ExpectedResult.stringLikeRegexp('Metrics found'));

app.synth();
