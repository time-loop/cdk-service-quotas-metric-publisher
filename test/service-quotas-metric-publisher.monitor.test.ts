import { CloudWatchClient, PutMetricDataCommand } from '@aws-sdk/client-cloudwatch';
import { ServiceQuotasClient, GetServiceQuotaCommand } from '@aws-sdk/client-service-quotas';
import { mockClient } from 'aws-sdk-client-mock';

import { monitor } from '../src/service-quotas-metric-publisher.monitor';

const serviceQuotaMock = mockClient(ServiceQuotasClient);
const cloudWatchMock = mockClient(CloudWatchClient);
// Silence log output
(['log', 'error'] as jest.FunctionPropertyNames<Required<Console>>[]).forEach((func) =>
  jest.spyOn(console, func).mockImplementation(() => {}),
);

describe('monitor', () => {
  beforeEach(() => {
    process.env.CW_NAMESPACE = 'test-namespace';
    process.env.SERVICE_QUOTAS_LIST = JSON.stringify([{ serviceCode: 's3', quotaCode: 'L-ABCD1234' }]);
    cloudWatchMock.on(PutMetricDataCommand).resolves({});
    serviceQuotaMock
      .on(GetServiceQuotaCommand)
      .resolves({ Quota: { ServiceCode: 's3', QuotaCode: 'L-ABCD1234', QuotaName: 'Bucket Limit', Value: 1000.0 } });
  });

  it('should publish metric data to CloudWatch', async () => {
    const result = await monitor();
    expect(result).toEqual({
      servicesQuotasApplied: [
        {
          serviceCode: 's3',
          quotaCode: 'L-ABCD1234',
          quotaName: 'Bucket Limit',
          value: 1000,
        },
      ],
    });
  });

  it('should throw an error if CW_NAMESPACE environment variable is not set', async () => {
    delete process.env.CW_NAMESPACE;
    await expect(monitor()).rejects.toThrow('CW_NAMESPACE environment variable not set');
  });

  it('should throw an error if SERVICE_QUOTAS_LIST environment variable is not set', async () => {
    delete process.env.SERVICE_QUOTAS_LIST;
    await expect(monitor()).rejects.toThrow('SERVICE_QUOTAS_LIST environment variable not set');
  });

  it('should log "No results to publish" if there are no results', async () => {
    serviceQuotaMock.reset();
    serviceQuotaMock.on(GetServiceQuotaCommand).resolves({ Quota: {} });
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    const result = await monitor();
    expect(result).toEqual({ servicesQuotasApplied: [] });
    expect(consoleSpy).toHaveBeenCalledWith('No results to publish');
    consoleSpy.mockRestore();
  });

  it('should log an error if data.Quota response in undefined', async () => {
    serviceQuotaMock.reset();
    serviceQuotaMock.on(GetServiceQuotaCommand).resolves({ Quota: undefined });
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    await monitor();
    expect(consoleSpy).toHaveBeenCalledWith(`No quota found for s3 - L-ABCD1234`);
    consoleSpy.mockRestore();
  });
});
