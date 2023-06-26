import { buildPackage } from '@crackle/core/package';
import { resolveConfig } from '@crackle/core/resolve-config';
import fixturez from 'fixturez';
import { beforeAll, test } from 'vitest';

import snapshotOutput from './shapshot-output';

const f = fixturez(__dirname);

beforeAll(() => {
  process.env.NODE_ENV = 'production';
});

test.each([
  'dts-compat',
  'esm-compat',
  'library-with-docs',
  'multi-entry-library',
  'single-entry-library',
  'with-dep-hidden-package-json',
  'with-graphql-schema-types',
  'with-side-effects',
  'with-vocab',
])(
  'fixture %s',
  async (fixtureName) => {
    const fixtureDir = f.find(fixtureName);

    const config = await resolveConfig({ cwd: fixtureDir });
    await buildPackage(config);

    await snapshotOutput('package', fixtureName);
  },
  15000,
);
