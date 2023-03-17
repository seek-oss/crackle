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
  const packageRoot = '/___';

  beforeEach(() => {
    vol.reset();
    vol.fromJSON(
      {
        'src/index.ts': 'export default {}',
        'src/entries/components.ts': 'export const components = {}',
        'src/entries/extras.ts': 'export const extras = {}',
        'src/entries/themes/apac.ts': 'export default {}',
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
          "entryPath": "/___/src/index.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": true,
          "outputDir": "/___/dist",
          "packageDir": "/___/dist",
        },
        {
          "entryName": "components",
          "entryPath": "/___/src/entries/components.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": false,
          "outputDir": "/___/dist",
          "packageDir": "/___/components",
        },
        {
          "entryName": "extras",
          "entryPath": "/___/src/entries/extras.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": false,
          "outputDir": "/___/dist",
          "packageDir": "/___/extras",
        },
        {
          "entryName": "themes/apac",
          "entryPath": "/___/src/entries/themes/apac.ts",
          "getOutputPath": [Function],
          "isDefaultEntry": false,
          "outputDir": "/___/dist",
          "packageDir": "/___/themes/apac",
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
        "/___/components/index.d.ts": "export * from "../dist/components";
      ",
        "/___/components/package.json": "{
        "main": "../dist/components.cjs",
        "module": "../dist/components.mjs",
        "types": "./index.d.ts"
      }
      ",
        "/___/extras/index.d.ts": "export * from "../dist/extras";
      ",
        "/___/extras/package.json": "{
        "main": "../dist/extras.cjs",
        "module": "../dist/extras.mjs",
        "types": "./index.d.ts"
      }
      ",
        "/___/src/entries/components.ts": "export const components = {}",
        "/___/src/entries/extras.ts": "export const extras = {}",
        "/___/src/entries/themes/apac.ts": "export default {}",
        "/___/src/index.ts": "export default {}",
        "/___/themes/apac/index.d.ts": "export * from "../../dist/themes/apac";
      export { default } from "../../dist/themes/apac";
      ",
        "/___/themes/apac/package.json": "{
        "main": "../../dist/themes/apac.cjs",
        "module": "../../dist/themes/apac.mjs",
        "types": "./index.d.ts"
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
        "/___/components": null,
        "/___/dist": null,
        "/___/extras": null,
        "/___/src/entries/components.ts": "export const components = {}",
        "/___/src/entries/extras.ts": "export const extras = {}",
        "/___/src/entries/themes/apac.ts": "export default {}",
        "/___/src/index.ts": "export default {}",
        "/___/themes/apac": null,
      }
    `);
  });
});
