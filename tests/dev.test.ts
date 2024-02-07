import type { UserConfig } from '@crackle/core';
import { dev } from '@crackle/core/dev';
import { resolveConfig } from '@crackle/core/resolve-config';
import fixturez from 'fixturez';
import { beforeAll, test } from 'vitest';

import snapshotOutput from './snapshot-output';

const f = fixturez(__dirname);

beforeAll(() => {
  process.env.NODE_ENV = 'production';
});

test.each`
  name                     | options
  ${'dev-entries'}         | ${undefined}
  ${'dev-entries-webpack'} | ${{ shim: 'none' } satisfies UserConfig['dev']}
`(
  'fixture $name',
  async ({ name: fixtureName, options }) => {
    const fixtureDir = f.find(fixtureName);

    const config = await resolveConfig({ cwd: fixtureDir });
    await dev({ ...config, dev: options });

    await snapshotOutput('dev', fixtureName);
  },
  15000,
);
