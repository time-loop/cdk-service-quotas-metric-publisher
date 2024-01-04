import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Namer } from 'multi-convention-namer';
import { ServiceQuotasMetricPublisher, ServiceQuotasMetricPublisherProps } from '../src';

let app: App;
let stack: Stack;

let template: Template;
let defaultServiceQuotasMetricPublisherProps: ServiceQuotasMetricPublisherProps = {
  publishFrequency: 1,
  cwNamespace: 'AWS/ServiceQuotaLimit',
  cloudwatchLogsRetention: 7,
  serviceQuotas: [
    {
      serviceCode: 'elasticloadbalancing',
      quotaCode: 'L-7E6692B2',
    },
  ],
};
let serviceQuotasMetricPublisher: ServiceQuotasMetricPublisher;

const createServiceQuotaMetricPublisher = function (id: string, props?: ServiceQuotasMetricPublisherProps) {
  serviceQuotasMetricPublisher = new ServiceQuotasMetricPublisher(
    stack,
    new Namer([id]),
    props as ServiceQuotasMetricPublisherProps,
  );
  template = Template.fromStack(stack);
};

describe('ServiceQuotasMetricPublisher', () => {
  describe('default', () => {
    beforeAll(() => {
      app = new App();
      stack = new Stack(app, 'test');
    });
    it('creates resources', () => {
      createServiceQuotaMetricPublisher('defaultProps', defaultServiceQuotasMetricPublisherProps);
      template.resourceCountIs('AWS::Lambda::Function', 2);
      expect(serviceQuotasMetricPublisher.publishFrequency).toEqual(1);
    });
    it('creates resources with default props', () => {
      defaultServiceQuotasMetricPublisherProps = {};
      createServiceQuotaMetricPublisher('noProps', defaultServiceQuotasMetricPublisherProps);
      template.resourceCountIs('AWS::Lambda::Function', 2);
      expect(serviceQuotasMetricPublisher.publishFrequency).toEqual(1);
    });
  });
});
