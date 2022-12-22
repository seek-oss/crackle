import { fs, vol } from 'memfs';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { getPackageEntryPoints } from './entry-points';

vi.mock('fs', () => ({ default: fs }));

describe('getPackageEntryPoints', () => {
  const packageRoot = '/fixtures/multi-entry';

  beforeEach(() => {
    vol.reset();
    vol.fromJSON(
      {
        'src/index.ts': '',
        'src/entries/components.ts': '',
        'src/entries/extras.ts': '',
        'src/entries/themes/apac.ts': '',
      },
      packageRoot,
    );
  });

  test('all entry points', async () => {
    const entryPoints = await getPackageEntryPoints(packageRoot);

    expect(entryPoints).toMatchInlineSnapshot(`
      [
        {
          "entryName": "dist",
          "entryPath": "/fixtures/multi-entry/src/index.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": true,
          "outputDir": "/fixtures/multi-entry/dist",
        },
        {
          "entryName": "components",
          "entryPath": "/fixtures/multi-entry/src/entries/components.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": false,
          "outputDir": "/fixtures/multi-entry/components",
        },
        {
          "entryName": "extras",
          "entryPath": "/fixtures/multi-entry/src/entries/extras.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": false,
          "outputDir": "/fixtures/multi-entry/extras",
        },
        {
          "entryName": "themes/apac",
          "entryPath": "/fixtures/multi-entry/src/entries/themes/apac.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": false,
          "outputDir": "/fixtures/multi-entry/themes/apac",
        },
      ]
    `);
  });

  test('getOutputPath for index', async () => {
    const entryPoints = await getPackageEntryPoints(packageRoot);
    const entry = entryPoints.find(({ isDefaultEntry }) => isDefaultEntry)!;

    expect(entry.getOutputPath('esm')).toMatchInlineSnapshot(
      '"dist/index.mjs"',
    );
    expect(entry.getOutputPath('cjs')).toMatchInlineSnapshot(
      '"dist/index.cjs"',
    );
    expect(entry.getOutputPath('dts')).toMatchInlineSnapshot(
      '"dist/index.d.ts"',
    );
  });

  test('getOutputPath for entry', async () => {
    const entryPoints = await getPackageEntryPoints(packageRoot);
    const entry = entryPoints.find(({ isDefaultEntry }) => !isDefaultEntry)!;

    expect(entry.getOutputPath('esm')).toMatchInlineSnapshot(
      '"components/dist/index.mjs"',
    );
    expect(entry.getOutputPath('cjs')).toMatchInlineSnapshot(
      '"components/dist/index.cjs"',
    );
    expect(entry.getOutputPath('dts')).toMatchInlineSnapshot(
      '"components/dist/index.d.ts"',
    );
  });
});
