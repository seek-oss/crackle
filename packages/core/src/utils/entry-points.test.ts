import { fs, vol } from 'memfs';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import {
  cleanPackageEntryPoints,
  createEntryPackageJsons,
  getPackageEntryPoints,
} from './entry-points';

vi.mock('fs', () => ({ default: fs }));
vi.mock('fs/promises', () => ({ default: fs.promises }));
vi.mock('fs-extra', () => ({ default: { ...fs, ...fs.promises } }));

describe('getPackageEntryPoints', () => {
  const packageRoot = '/__ROOT__/multi-entry';

  beforeEach(() => {
    vol.reset();
    vol.fromJSON(
      {
        'src/index.ts': '__stuff__',
        'src/entries/components.ts': '__stuff__',
        'src/entries/extras.ts': '__stuff__',
        'src/entries/themes/apac.ts': '__stuff__',
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
          "entryPath": "/__ROOT__/multi-entry/src/index.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": true,
          "outputDir": "/__ROOT__/multi-entry/dist",
          "packageDir": "/__ROOT__/multi-entry/dist",
        },
        {
          "entryName": "components",
          "entryPath": "/__ROOT__/multi-entry/src/entries/components.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": false,
          "outputDir": "/__ROOT__/multi-entry/dist",
          "packageDir": "/__ROOT__/multi-entry/components",
        },
        {
          "entryName": "extras",
          "entryPath": "/__ROOT__/multi-entry/src/entries/extras.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": false,
          "outputDir": "/__ROOT__/multi-entry/dist",
          "packageDir": "/__ROOT__/multi-entry/extras",
        },
        {
          "entryName": "themes/apac",
          "entryPath": "/__ROOT__/multi-entry/src/entries/themes/apac.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": false,
          "outputDir": "/__ROOT__/multi-entry/dist",
          "packageDir": "/__ROOT__/multi-entry/themes/apac",
        },
      ]
    `);
  });

  test('getOutputPath for index', async () => {
    const entryPoints = await getPackageEntryPoints(packageRoot);
    const entry = entryPoints.find(({ isDefaultEntry }) => isDefaultEntry)!;

    expect(entry.getOutputPath('esm')).toMatchInlineSnapshot('"index.mjs"');
    expect(entry.getOutputPath('cjs')).toMatchInlineSnapshot('"index.cjs"');
    expect(entry.getOutputPath('dts')).toMatchInlineSnapshot('"index.d.ts"');
  });

  test('getOutputPath (from root) for index', async () => {
    const entryPoints = await getPackageEntryPoints(packageRoot);
    const entry = entryPoints.find(({ isDefaultEntry }) => isDefaultEntry)!;

    expect(
      entry.getOutputPath('esm', { from: packageRoot }),
    ).toMatchInlineSnapshot('"dist/index.mjs"');
    expect(
      entry.getOutputPath('cjs', { from: packageRoot }),
    ).toMatchInlineSnapshot('"dist/index.cjs"');
    expect(
      entry.getOutputPath('dts', { from: packageRoot }),
    ).toMatchInlineSnapshot('"dist/index.d.ts"');
  });

  test('getOutputPath for entry', async () => {
    const entryPoints = await getPackageEntryPoints(packageRoot);
    const entry = entryPoints.find(({ isDefaultEntry }) => !isDefaultEntry)!;

    expect(entry.getOutputPath('esm')).toMatchInlineSnapshot(
      '"components.mjs"',
    );
    expect(entry.getOutputPath('cjs')).toMatchInlineSnapshot(
      '"components.cjs"',
    );
    expect(entry.getOutputPath('dts')).toMatchInlineSnapshot(
      '"components.d.ts"',
    );
  });

  test('getOutputPath (from root) for entry', async () => {
    const entryPoints = await getPackageEntryPoints(packageRoot);
    const entry = entryPoints.find(({ isDefaultEntry }) => !isDefaultEntry)!;

    expect(
      entry.getOutputPath('esm', { from: packageRoot }),
    ).toMatchInlineSnapshot('"dist/components.mjs"');
    expect(
      entry.getOutputPath('cjs', { from: packageRoot }),
    ).toMatchInlineSnapshot('"dist/components.cjs"');
    expect(
      entry.getOutputPath('dts', { from: packageRoot }),
    ).toMatchInlineSnapshot('"dist/components.d.ts"');
  });

  test('createEntryPackageJsons', async () => {
    const entryPoints = await getPackageEntryPoints(packageRoot);

    await createEntryPackageJsons(entryPoints);

    expect(vol.toJSON()).toMatchInlineSnapshot(`
      {
        "/__ROOT__/multi-entry/components/package.json": "{
        "main": "../dist/components.cjs",
        "module": "../dist/components.mjs",
        "types": "../dist/components.d.ts"
      }
      ",
        "/__ROOT__/multi-entry/extras/package.json": "{
        "main": "../dist/extras.cjs",
        "module": "../dist/extras.mjs",
        "types": "../dist/extras.d.ts"
      }
      ",
        "/__ROOT__/multi-entry/src/entries/components.ts": "__stuff__",
        "/__ROOT__/multi-entry/src/entries/extras.ts": "__stuff__",
        "/__ROOT__/multi-entry/src/entries/themes/apac.ts": "__stuff__",
        "/__ROOT__/multi-entry/src/index.ts": "__stuff__",
        "/__ROOT__/multi-entry/themes/apac/package.json": "{
        "main": "../../dist/themes/apac.cjs",
        "module": "../../dist/themes/apac.mjs",
        "types": "../../dist/themes/apac.d.ts"
      }
      ",
      }
    `);
  });

  test('cleanPackageEntryPoints', async () => {
    const entryPoints = await getPackageEntryPoints(packageRoot);
    await createEntryPackageJsons(entryPoints);

    await cleanPackageEntryPoints(entryPoints);

    expect(vol.toJSON()).toMatchInlineSnapshot(`
      {
        "/__ROOT__/multi-entry/components": null,
        "/__ROOT__/multi-entry/dist": null,
        "/__ROOT__/multi-entry/extras": null,
        "/__ROOT__/multi-entry/src/entries/components.ts": "__stuff__",
        "/__ROOT__/multi-entry/src/entries/extras.ts": "__stuff__",
        "/__ROOT__/multi-entry/src/entries/themes/apac.ts": "__stuff__",
        "/__ROOT__/multi-entry/src/index.ts": "__stuff__",
        "/__ROOT__/multi-entry/themes/apac": null,
      }
    `);
  });
});
