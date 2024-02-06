import { buildPackage } from '@crackle/core/package';
import { resolveConfig } from '@crackle/core/resolve-config';
import fixturez from 'fixturez';
import { beforeAll, test } from 'vitest';

import snapshotOutput from './snapshot-output';

const f = fixturez(__dirname);

beforeAll(() => {
  process.env.NODE_ENV = 'production';
});

test.each([
  'dts-preserve',
  'esm-compat',
  'library-with-docs',
  'multi-entry-library',
  'package-preserve',
  'package-preserve-dts-preserve',
  'single-entry-library',
  'with-dep-hidden-package-json',
  'with-graphql-schema-types',
  'with-side-effects',
  'with-styles',
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
