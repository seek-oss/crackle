import { dev } from '@crackle/core/dev';
import { resolveConfig } from '@crackle/core/resolve-config';
import fixturez from 'fixturez';
import { beforeAll, test } from 'vitest';

import snapshotOutput from './shapshot-output';

const f = fixturez(__dirname);

beforeAll(() => {
  process.env.NODE_ENV = 'production';
});

test.each`
  name                     | options
  ${'dev-entries'}         | ${undefined}
  ${'dev-entries-webpack'} | ${{ webpack: true }}
`(
  'fixture $name',
  async ({ name: fixtureName, options }) => {
    const fixtureDir = f.find(fixtureName);

    const config = await resolveConfig({ cwd: fixtureDir });
    await dev({ ...config, ...options });

    await snapshotOutput('dev', fixtureName);
  },
  15000,
);
