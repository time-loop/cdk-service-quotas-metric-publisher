import { clickupCdk } from '@time-loop/clickup-projen';
import { JsonPatch, javascript } from 'projen';
import { IntegTestResources } from './test/utils/integ-tests-types';

const name = 'cdk-service-quotas-metric-publisher';
const project = new clickupCdk.ClickUpCdkConstructLibrary({
  name,
  author: 'jose-clickup',
  authorAddress: 'jamoroso@clickup.com',
  cdkVersion: '2.189.0',
  defaultReleaseBranch: 'main',
  experimentalIntegRunner: true,
  gitignore: ['.vscode/**'],
  projenrcTs: true,
  packageManager: javascript.NodePackageManager.PNPM,
  repositoryUrl: `https://github.com/time-loop/${name}.git`,

  bundledDeps: ['@aws-sdk/client-cloudwatch', '@aws-sdk/client-service-quotas'],
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
      'aws-region': IntegTestResources.AWS_REGION,
      'role-to-assume': `arn:aws:iam::${IntegTestResources.AWS_ACCOUNT}:role/${name}-github-actions-role`,
      'role-duration-seconds': 900,
    },
  }),
);
project.synth();
