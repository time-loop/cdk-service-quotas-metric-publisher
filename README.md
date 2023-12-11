# ServiceQuotasMetricPublisher
A construct that creates an AWS Lambda function to publish Service Quotas metrics to CloudWatch.

## Usage
To use the `ServiceQuotasMetricPublisher` construct, simply import it into your AWS CDK stack and create a new instance of the construct:

``` ts
import { Stack } from 'aws-cdk-lib';
import { ServiceQuotasMetricPublisher } from './service-quotas-metric-publisher';

const stack = new Stack(app, 'MyStack');

new ServiceQuotasMetricPublisher(stack, 'MyServiceQuotasMetricPublisher', {
  publishFrequency: 5,
  cwNamespace: 'MyNamespace',
  quotas: [
    {serviceCode: 'elasticloadbalancing', quotaCode: 'L-7E6692B2'},
  ]
});
```

This will create a new AWS Lambda function that will publish the usage metrics for the specified Service Quotas to CloudWatch every 5 minutes.

## API
`ServiceQuotasMetricPublisher(scope: Construct, id: string, props: ServiceQuotasMetricPublisherProps)`

Creates a new instance of the `ServiceQuotasMetricPublisher` construct.

### Parameters
- `scope` - The parent construct.
- `id` - The ID of the construct.
- `props` - The properties of the construct.

### Properties
- `publishFrequency` - The time interval (in minutes) that the Lambda function will be triggered to publish metrics to CloudWatch.
- `handler` - The AWS Lambda function that publishes usage metrics to CloudWatch.
- `rule` - The CloudWatch Events rule that triggers the Lambda function to publish metrics to CloudWatch.
- `cwNamespace` - The CloudWatch namespace to publish metrics to.

## TODO
- [ ] Add support for global quotas.
- [ ] Add support applied services quotas not provided by AWS API.
## License
This library is licensed under the Apache 2.0 License. See the LICENSE file.
