import { dev } from '@crackle/core/dev';
import { resolveConfig } from '@crackle/core/resolve-config';
import fixturez from 'fixturez';
import { beforeAll, test } from 'vitest';

import { snapshotBundles } from './shapshot-bundles';

const f = fixturez(__dirname);

beforeAll(() => {
  process.env.NODE_ENV = 'production';
});

test.each(['dev-entries'])(
  'fixture %s',
  async (fixtureName) => {
    const fixtureDir = f.find(fixtureName);

    const config = await resolveConfig({ cwd: fixtureDir });
    await dev(config);

    await snapshotBundles('dev', fixtureName);
  },
  15000,
);
