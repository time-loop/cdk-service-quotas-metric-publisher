import { clickupCdk } from '@time-loop/clickup-projen';
import { JsonPatch } from 'projen';

const repoName = 'cdk-service-quotas-metric-publisher';
const project = new clickupCdk.ClickUpCdkConstructLibrary({
  author: 'jose-clickup',
  authorAddress: 'jamoroso@clickup.com',
  cdkVersion: '2.105.0',
  defaultReleaseBranch: 'main',
  // deps: ['@aws-sdk/client-cloudwatch', '@aws-sdk/client-service-quotas'],
  devDeps: ['@time-loop/clickup-projen', '@aws-cdk/integ-tests-alpha', 'aws-sdk-client-mock'],
  jsiiVersion: '~5.0.0',
  name: 'cdk-service-quotas-metric-publisher',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/time-loop/cdk-service-quotas-metric-publisher.git',
  gitignore: ['.vscode/**'],
  bundledDeps: ['aws-sdk', '@aws-sdk/client-cloudwatch', '@aws-sdk/client-service-quotas'],
  peerDeps: ['multi-convention-namer'],
  experimentalIntegRunner: true,
  // deps: [] /* Runtime dependencies of this module. */,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
// Assume the usInfraDev role
const build = project.tryFindObjectFile('.github/workflows/build.yml');
build?.addOverride('jobs.build.permissions', { 'id-token': 'write' });
build?.patch(
  JsonPatch.add('/jobs/build/steps/0', {
    name: 'Configure AWS Credentials',
    uses: 'aws-actions/configure-aws-credentials@v2',
    with: {
      'aws-region': 'us-west-2',
      'role-to-assume': `arn:aws:iam::425845004253:role/${repoName}-github-actions-role`,
      'role-duration-seconds': 900,
    },
  }),
);
project.synth();
