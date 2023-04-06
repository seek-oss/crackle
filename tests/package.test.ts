import fs from 'fs/promises';
import path from 'path';

import { buildPackage } from '@crackle/core/package';
import { resolveConfig } from '@crackle/core/resolve-config';
import glob from 'fast-glob';
import fixturez from 'fixturez';
import { beforeAll, describe, expect, test } from 'vitest';
import stringSerializer from '~utils/string-serializer';

const f = fixturez(__dirname);

expect.addSnapshotSerializer(stringSerializer);

beforeAll(() => {
  process.env.NODE_ENV = 'production';
});

describe('package', () => {
  test.each([
    'esm-patch-imports',
    'library-with-docs',
    'multi-entry-library',
    'single-entry-library',
    'with-dep-hidden-package-json',
    'with-flatten-children',
    'with-graphql-schema-types',
    'with-side-effects',
  ])(
    'fixture %s',
    async (fixtureName) => {
      const fixtureDir = f.find(fixtureName);

      const config = await resolveConfig({ cwd: fixtureDir });
      await buildPackage(config);

      const distFiles = await glob('dist/**', {
        cwd: fixtureDir,
        onlyFiles: true,
      });

      await Promise.all(
        distFiles.map(async (fileName) => {
          const contents = await fs.readFile(
            path.join(fixtureDir, fileName),
            'utf-8',
          );
          expect(contents).toMatchSnapshot(fileName);
        }),
      );
    },
    15000,
  );
});
