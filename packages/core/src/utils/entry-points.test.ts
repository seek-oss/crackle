import { fs, vol } from 'memfs';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { type EnhancedConfig, context } from '../config';

import {
  cleanPackageEntryPoints,
  createEntryPackageJsons,
  getPackageEntryPoints,
} from './entry-points';
import { formats } from './files';

const root = '/___';
const volume = {
  [`${root}/src/index.ts`]: 'export default {}',
  [`${root}/src/entries/components.ts`]: 'export const components = {}',
  [`${root}/src/entries/extras.ts`]: 'export const extras = {}',
  [`${root}/src/entries/themes/apac.ts`]: 'export default {}',
};

vi.mock('fs', () => ({ default: fs }));
vi.mock('fs-extra', () => ({ default: { ...fs, ...fs.promises } }));
vi.mock('mlly', () => ({
  resolveModuleExportNames: (filePath: string) => {
    // This is not ideal, but refactoring to use the real file system (and make it work with snapshots) would be a lot of work.
    // Besides, we have an integration test covering this scenario.
    switch (filePath) {
      case `${root}/src/index.ts`:
        return Promise.resolve(['default']);
      case `${root}/src/entries/components.ts`:
        return Promise.resolve(['components']);
      case `${root}/src/entries/extras.ts`:
        return Promise.resolve(['extras']);
      case `${root}/src/entries/themes/apac.ts`:
        return Promise.resolve(['default']);
      default:
        throw new Error(`Not mocked: ${filePath}`);
    }
  },
}));

const byFormat = (cb: (format: (typeof formats)[number]) => string) =>
  Object.fromEntries(formats.map((format) => [format, cb(format)]));

describe('getPackageEntryPoints', () => {
  beforeEach(() => {
    vol.reset();
    vol.fromJSON(volume);

    context.enterWith({
      root,
    } as EnhancedConfig);
  });

  test('all entry points', async () => {
    const entryPoints = await getPackageEntryPoints(root);

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
    const entryPoints = await getPackageEntryPoints(root);
    const entry = entryPoints.find(({ isDefaultEntry }) => isDefaultEntry)!;

    expect(byFormat((format) => entry.getOutputPath(format)))
      .toMatchInlineSnapshot(`
      {
        "cjs": "index.cjs",
        "dts": "index.d.ts",
        "dtsm": "index.d.mts",
        "esm": "index.mjs",
      }
    `);
  });

  test('getOutputPath (from root) for index', async () => {
    const entryPoints = await getPackageEntryPoints(root);
    const entry = entryPoints.find(({ isDefaultEntry }) => isDefaultEntry)!;

    expect(byFormat((format) => entry.getOutputPath(format, { from: root })))
      .toMatchInlineSnapshot(`
      {
        "cjs": "dist/index.cjs",
        "dts": "dist/index.d.ts",
        "dtsm": "dist/index.d.mts",
        "esm": "dist/index.mjs",
      }
    `);
  });

  test('getOutputPath for entry', async () => {
    const entryPoints = await getPackageEntryPoints(root);
    const entry = entryPoints.find(({ isDefaultEntry }) => !isDefaultEntry)!;

    expect(byFormat((format) => entry.getOutputPath(format)))
      .toMatchInlineSnapshot(`
      {
        "cjs": "components.cjs",
        "dts": "components.d.ts",
        "dtsm": "components.d.mts",
        "esm": "components.mjs",
      }
    `);
  });

  test('getOutputPath (from root) for entry', async () => {
    const entryPoints = await getPackageEntryPoints(root);
    const entry = entryPoints.find(({ isDefaultEntry }) => !isDefaultEntry)!;

    expect(byFormat((format) => entry.getOutputPath(format, { from: root })))
      .toMatchInlineSnapshot(`
      {
        "cjs": "dist/components.cjs",
        "dts": "dist/components.d.ts",
        "dtsm": "dist/components.d.mts",
        "esm": "dist/components.mjs",
      }
    `);
  });

  test('createEntryPackageJsons', async () => {
    const entryPoints = await getPackageEntryPoints(root);

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
    const entryPoints = await getPackageEntryPoints(root);
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
