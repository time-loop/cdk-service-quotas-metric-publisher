/**
 * The Lambda function resource is managed from service-quotas-metric-publisher.ts
 */
import {
  CloudWatchClient,
  PutMetricDataCommand,
  PutMetricDataCommandInput,
  MetricDatum,
} from '@aws-sdk/client-cloudwatch';
import {
  ServiceQuotasClient,
  GetServiceQuotaCommand,
  GetServiceQuotaCommandInput,
} from '@aws-sdk/client-service-quotas';

import { String } from 'aws-sdk/clients/acm';
import { IServiceQuota } from './service-quotas-metric-publisher';

// Define the ServiceQuotaApplied object type
interface ServiceQuotaApplied extends IServiceQuota {
  quotaName: string | undefined;
  value: number | undefined;
  region: string | undefined;
}

/**
 * Monitor the service applied quotas values in an AWS account and publish the metric data to CloudWatch.
 * @throws An error if the CW_NAMESPACE environment variable are not set, or if there is an error publishing the metric data to CloudWatch.
 */
export const monitor = async () => {
  try {
    if (!process.env.CW_NAMESPACE) {
      throw new Error('CW_NAMESPACE environment variable not set');
    }

    if (!process.env.SERVICE_QUOTAS_LIST) {
      throw new Error('SERVICE_QUOTAS_LIST environment variable not set');
    }

    if (!process.env.REGIONS_TO_MONITOR) {
      throw new Error('REGIONS_TO_MONITOR environment variable not set');
    }

    const cwNamespace: string = process.env.CW_NAMESPACE;
    const serviceQuotas: IServiceQuota[] = JSON.parse(process.env.SERVICE_QUOTAS_LIST);
    const regionsToMonitor: string[] = JSON.parse(process.env.REGIONS_TO_MONITOR);

    // Call the getServiceQuota API to get the information about the quota
    const servicesQuotasApplied: ServiceQuotaApplied[] = [];
    for (const region of regionsToMonitor) {
      console.log(`Getting service quotas for region ${region}`);
      const servicequotas = new ServiceQuotasClient({ region });
      for (const serviceQuota of serviceQuotas) {
        console.log(`Getting service quota for ${serviceQuota.serviceCode} - ${serviceQuota.quotaCode}`);
        const params: GetServiceQuotaCommandInput = {
          ServiceCode: serviceQuota.serviceCode,
          QuotaCode: serviceQuota.quotaCode,
        };
        const command = new GetServiceQuotaCommand(params);
        const data = await servicequotas.send(command);
        if (!data.Quota) {
          console.error(`No quota found for ${serviceQuota.serviceCode} - ${serviceQuota.quotaCode}`);
          continue;
        }
        console.log(
          `Successfully called getServiceQuota for ${serviceQuota.serviceCode} - ${
            serviceQuota.quotaCode
          }.\n Data: ${JSON.stringify(data)}`,
        );
        servicesQuotasApplied.push({
          serviceCode: data.Quota?.ServiceCode as String,
          quotaName: data.Quota?.QuotaName as String,
          quotaCode: data.Quota?.QuotaCode as String,
          value: data.Quota?.Value,
          region: region,
        });
      }
    }
    // Publish the metric data to CloudWatch
    const cloudwatch = new CloudWatchClient();
    for (const serviceQuota of servicesQuotasApplied) {
      const dimensions = [
        { Name: 'QuotaCode', Value: serviceQuota.quotaCode },
        { Name: 'QuotaName', Value: serviceQuota.quotaName },
        { Name: 'ServiceCode', Value: serviceQuota.serviceCode },
        { Name: 'AwsRegion', Value: serviceQuota.region },
      ];
      const metricData: MetricDatum[] = [
        {
          MetricName: 'ServiceQuotasApplied',
          Dimensions: dimensions,
          Unit: 'Count',
          Value: serviceQuota.value,
        },
      ];
      const params: PutMetricDataCommandInput = {
        Namespace: cwNamespace,
        MetricData: metricData,
      };
      const command = new PutMetricDataCommand(params);
      const data = await cloudwatch.send(command);
      console.log(`Successfully pushed metric data to namespace ${cwNamespace} - ${JSON.stringify(data)}`);
    }
    if (servicesQuotasApplied.length === 0) {
      console.log('No results to publish');
    } else {
      console.log('Successfully pushed metric data');
    }
    return { servicesQuotasApplied: servicesQuotasApplied };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
