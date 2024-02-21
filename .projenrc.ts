import { clickupCdk } from '@time-loop/clickup-projen';
import { JsonPatch } from 'projen';

const name = 'cdk-service-quotas-metric-publisher';
const project = new clickupCdk.ClickUpCdkConstructLibrary({
  name,
  author: 'jose-clickup',
  authorAddress: 'jamoroso@clickup.com',
  cdkVersion: '2.105.0',
  defaultReleaseBranch: 'main',
  experimentalIntegRunner: true,
  gitignore: ['.vscode/**'],
  projenrcTs: true,
  repositoryUrl: `https://github.com/time-loop/${name}.git`,

  bundledDeps: ['aws-sdk', '@aws-sdk/client-cloudwatch', '@aws-sdk/client-service-quotas'],
  devDeps: ['@time-loop/clickup-projen', '@aws-cdk/integ-tests-alpha', 'aws-sdk-client-mock'],
  peerDeps: ['multi-convention-namer'],
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
      'role-to-assume': `arn:aws:iam::425845004253:role/${name}-github-actions-role`,
      'role-duration-seconds': 900,
    },
  }),
);
project.synth();
