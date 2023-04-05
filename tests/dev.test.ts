import fs from 'fs/promises';
import path from 'path';

import { dev } from '@crackle/core/dev';
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

describe('dev', () => {
  test.each(['dev-entries'])(
    'fixture %s',
    async (fixtureName) => {
      const fixtureDir = f.find(fixtureName);

      const config = await resolveConfig({ cwd: fixtureDir });
      await dev(config);

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
