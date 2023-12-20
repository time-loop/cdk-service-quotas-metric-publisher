# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceQuotasMetricPublisher <a name="ServiceQuotasMetricPublisher" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher"></a>

A construct that creates an AWS Lambda function to publish applied service quotas metrics to CloudWatch.

#### Initializers <a name="Initializers" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.Initializer"></a>

```typescript
import { ServiceQuotasMetricPublisher } from '@time-loop/cdk-service-quotas-metric-publisher'

new ServiceQuotasMetricPublisher(scope: Construct, id: Namer, props: ServiceQuotasMetricPublisherProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The parent construct. |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.Initializer.parameter.id">id</a></code> | <code>multi-convention-namer.Namer</code> | The ID of the construct. |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.Initializer.parameter.props">props</a></code> | <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps">ServiceQuotasMetricPublisherProps</a></code> | The properties of the construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The parent construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.Initializer.parameter.id"></a>

- *Type:* multi-convention-namer.Namer

The ID of the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.Initializer.parameter.props"></a>

- *Type:* <a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps">ServiceQuotasMetricPublisherProps</a>

The properties of the construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.isConstruct"></a>

```typescript
import { ServiceQuotasMetricPublisher } from '@time-loop/cdk-service-quotas-metric-publisher'

ServiceQuotasMetricPublisher.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.cwNamespace">cwNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.handler">handler</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.publishFrequency">publishFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.rule">rule</a></code> | <code>aws-cdk-lib.aws_events.Rule</code> | *No description.* |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.serviceQuotas">serviceQuotas</a></code> | <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.IServiceQuota">IServiceQuota</a>[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cwNamespace`<sup>Required</sup> <a name="cwNamespace" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.cwNamespace"></a>

```typescript
public readonly cwNamespace: string;
```

- *Type:* string

---

##### `handler`<sup>Required</sup> <a name="handler" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.handler"></a>

```typescript
public readonly handler: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---

##### `publishFrequency`<sup>Required</sup> <a name="publishFrequency" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.publishFrequency"></a>

```typescript
public readonly publishFrequency: number;
```

- *Type:* number

---

##### `rule`<sup>Required</sup> <a name="rule" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.rule"></a>

```typescript
public readonly rule: Rule;
```

- *Type:* aws-cdk-lib.aws_events.Rule

---

##### `serviceQuotas`<sup>Required</sup> <a name="serviceQuotas" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisher.property.serviceQuotas"></a>

```typescript
public readonly serviceQuotas: IServiceQuota[];
```

- *Type:* <a href="#@time-loop/cdk-service-quotas-metric-publisher.IServiceQuota">IServiceQuota</a>[]

---


## Structs <a name="Structs" id="Structs"></a>

### ServiceQuotasMetricPublisherProps <a name="ServiceQuotasMetricPublisherProps" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps"></a>

#### Initializer <a name="Initializer" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps.Initializer"></a>

```typescript
import { ServiceQuotasMetricPublisherProps } from '@time-loop/cdk-service-quotas-metric-publisher'

const serviceQuotasMetricPublisherProps: ServiceQuotasMetricPublisherProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps.property.cloudwatchLogsRetention">cloudwatchLogsRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | How long to retain logs published to CloudWatch logs. |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps.property.cwNamespace">cwNamespace</a></code> | <code>string</code> | The CloudWatch namespace to publish metrics to. |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps.property.publishFrequency">publishFrequency</a></code> | <code>number</code> | Time intervals that Lambda will be triggered to publish metric in CloudWatch. |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps.property.serviceQuotas">serviceQuotas</a></code> | <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.IServiceQuota">IServiceQuota</a>[]</code> | The list of service quotas to monitor. |

---

##### `cloudwatchLogsRetention`<sup>Optional</sup> <a name="cloudwatchLogsRetention" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps.property.cloudwatchLogsRetention"></a>

```typescript
public readonly cloudwatchLogsRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* aws_logs.RetentionDays.THREE_MONTHS

How long to retain logs published to CloudWatch logs.

---

##### `cwNamespace`<sup>Optional</sup> <a name="cwNamespace" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps.property.cwNamespace"></a>

```typescript
public readonly cwNamespace: string;
```

- *Type:* string
- *Default:* 'AWS/ServiceQuotaLimit'

The CloudWatch namespace to publish metrics to.

---

##### `publishFrequency`<sup>Optional</sup> <a name="publishFrequency" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps.property.publishFrequency"></a>

```typescript
public readonly publishFrequency: number;
```

- *Type:* number
- *Default:* 1440 (1 day)

Time intervals that Lambda will be triggered to publish metric in CloudWatch.

---

##### `serviceQuotas`<sup>Optional</sup> <a name="serviceQuotas" id="@time-loop/cdk-service-quotas-metric-publisher.ServiceQuotasMetricPublisherProps.property.serviceQuotas"></a>

```typescript
public readonly serviceQuotas: IServiceQuota[];
```

- *Type:* <a href="#@time-loop/cdk-service-quotas-metric-publisher.IServiceQuota">IServiceQuota</a>[]
- *Default:* ServiceQuotas[]

The list of service quotas to monitor.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IServiceQuota <a name="IServiceQuota" id="@time-loop/cdk-service-quotas-metric-publisher.IServiceQuota"></a>

- *Implemented By:* <a href="#@time-loop/cdk-service-quotas-metric-publisher.IServiceQuota">IServiceQuota</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.IServiceQuota.property.quotaCode">quotaCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/cdk-service-quotas-metric-publisher.IServiceQuota.property.serviceCode">serviceCode</a></code> | <code>string</code> | *No description.* |

---

##### `quotaCode`<sup>Required</sup> <a name="quotaCode" id="@time-loop/cdk-service-quotas-metric-publisher.IServiceQuota.property.quotaCode"></a>

```typescript
public readonly quotaCode: string;
```

- *Type:* string

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@time-loop/cdk-service-quotas-metric-publisher.IServiceQuota.property.serviceCode"></a>

```typescript
public readonly serviceCode: string;
```

- *Type:* string

---

