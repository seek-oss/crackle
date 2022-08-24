import fs from 'fs/promises';

import fixturez from 'fixturez';
import { describe, expect, test } from 'vitest';

import { getPackageEntryPoints } from './get-packages';
import { fixPackageJson, validatePackageJson } from './setup-package-json';

describe('setup-package-json', () => {
  const f = fixturez(__dirname);
  const readFile = (path: string) => fs.readFile(path, 'utf-8');

  test('validatePackageJson', async () => {
    const fixturePath = f.copy('library-with-docs');
    const entries = await getPackageEntryPoints({
      packageRoot: fixturePath,
    });

    const diffs = await validatePackageJson(fixturePath, entries);

    expect(diffs).toMatchSnapshot();
  });

  test('fixPackageJson', async () => {
    const fixturePath = f.copy('library-with-docs');
    const entries = await getPackageEntryPoints({
      packageRoot: fixturePath,
    });

    const pkgBefore = await readFile(`${fixturePath}/package.json`);
    await fixPackageJson(fixturePath, entries);
    const pkgAfter = await readFile(`${fixturePath}/package.json`);

    expect({
      diffA: pkgBefore,
      diffB: pkgAfter,
    }).toMatchSnapshot();
  });
});
