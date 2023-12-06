import path from 'path';

import { fs, vol } from 'memfs';
import { sortPackageJson } from 'sort-package-json';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import packageJsonSerializer from '~utils/pkg-serializer';
import { createSerializer } from '~utils/snapshot-diff-serializer';

import type { PackageEntryPoint, PackageJson } from '../types';

import { extensionForFormat } from './files';
import {
  diffPackageJson,
  updatePackageJsonExports,
} from './setup-package-json';

expect.addSnapshotSerializer(createSerializer({ contextLines: 1 })); // override default config
expect.addSnapshotSerializer(packageJsonSerializer);

describe('diffPackageJson', () => {
  const packageRoot = '/project';
  const outputDir = '/project/dist';
  const createGetOutputPath =
    (fileName: string): PackageEntryPoint['getOutputPath'] =>
    (format, { from = outputDir } = {}) =>
      [
        path.relative(from, `${outputDir}/${fileName}`),
        extensionForFormat(format),
      ].join('.');

  const entries = [
    {
      isDefaultEntry: true,
      entryName: 'dist',
      entryPath: '/project/src/index.ts',
      outputDir: '/project/dist',
      packageDir: '/project/dist',
      getOutputPath: createGetOutputPath('index'),
    },
    {
      isDefaultEntry: false,
      entryName: 'css',
      entryPath: '/project/src/entries/css.ts',
      outputDir: '/project/dist',
      packageDir: '/project/css',
      getOutputPath: createGetOutputPath('css'),
    },
    {
      isDefaultEntry: false,
      entryName: 'themes/apac',
      entryPath: '/project/src/entries/themes/apac.ts',
      outputDir: '/project/dist',
      packageDir: '/project/themes/apac',
      getOutputPath: createGetOutputPath('themes/apac'),
    },
  ] satisfies PackageEntryPoint[];

  const correctPackageJson = {
    exports: {
      '.': {
        types: {
          import: './dist/index.d.mts',
          require: './dist/index.d.ts',
        },
        import: './dist/index.mjs',
        require: './dist/index.cjs',
      },
      './css': {
        types: {
          import: './dist/css.d.mts',
          require: './dist/css.d.ts',
        },
        import: './dist/css.mjs',
        require: './dist/css.cjs',
      },
      './themes/apac': {
        types: {
          import: './dist/themes/apac.d.mts',
          require: './dist/themes/apac.d.ts',
        },
        import: './dist/themes/apac.mjs',
        require: './dist/themes/apac.cjs',
      },
      './package.json': './package.json',
    },
    main: './dist/index.cjs',
    module: './dist/index.mjs',
    types: './dist/index.d.ts',
    files: ['css', 'dist', 'themes/apac'],
  } satisfies PackageJson;

  const expectSnapshots = ({
    diffs,
    packageJson,
    expectedPackageJson,
  }: ReturnType<typeof diffPackageJson> & { packageJson?: PackageJson }) => {
    expect(diffs).toMatchSnapshot('diffs');
    expect(
      packageJson
        ? { diffA: packageJson, diffB: expectedPackageJson }
        : expectedPackageJson,
    ).toMatchSnapshot('package.json');
  };

  test('empty package.json', async () => {
    const { diffs, expectedPackageJson } = diffPackageJson(
      packageRoot,
      {},
      entries,
    );

    expectSnapshots({ diffs, expectedPackageJson });
  });

  test('correct package.json', async () => {
    const { diffs } = diffPackageJson(packageRoot, correctPackageJson, entries);

    expect(diffs).toHaveLength(0);
  });

  describe('incorrect package.json', () => {
    test('main', () => {
      const packageJson = structuredClone(correctPackageJson);
      packageJson.main = 'index.js';

      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        packageJson,
        entries,
      );

      expectSnapshots({ diffs, packageJson, expectedPackageJson });
    });

    test('module', () => {
      const packageJson = structuredClone(correctPackageJson);
      packageJson.module = 'something/else.js';

      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        packageJson,
        entries,
      );

      expectSnapshots({ diffs, packageJson, expectedPackageJson });
    });

    test('types', () => {
      const packageJson = structuredClone(correctPackageJson);
      // @ts-ignore
      delete packageJson.types;

      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        packageJson,
        entries,
      );

      expectSnapshots({ diffs, packageJson, expectedPackageJson });
    });

    test('exports missing', () => {
      const { exports, ...packageJson } = structuredClone(correctPackageJson);

      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        packageJson,
        entries,
      );

      expectSnapshots({ diffs, packageJson, expectedPackageJson });
    });

    test('files missing', () => {
      const packageJson = structuredClone(correctPackageJson);
      // @ts-ignore
      delete packageJson.files;

      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        packageJson,
        entries,
      );

      expectSnapshots({ diffs, packageJson, expectedPackageJson });
    });

    test('files out of order', () => {
      const packageJson = structuredClone(correctPackageJson);
      const [first, ...otherFiles] = packageJson.files;
      packageJson.files = [...otherFiles, first];

      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        packageJson,
        entries,
      );

      expectSnapshots({ diffs, packageJson, expectedPackageJson });
    });

    test('keys out of order', () => {
      const { main, types, ...everythingElse } = correctPackageJson;
      const packageJson = {
        types,
        ...everythingElse,
        main,
      };

      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        packageJson,
        entries,
      );

      expectSnapshots({ diffs, packageJson, expectedPackageJson });
    });

    describe('sideEffects', () => {
      test('no flag', () => {
        const packageJson = structuredClone(correctPackageJson);

        const { diffs, expectedPackageJson } = diffPackageJson(
          packageRoot,
          packageJson,
          entries,
        );

        expectSnapshots({ diffs, packageJson, expectedPackageJson });
      });

      test.each([true, false])('boolean flag %s', (flag) => {
        const packageJson = sortPackageJson({
          ...correctPackageJson,
          sideEffects: flag,
        });

        const { diffs, expectedPackageJson } = diffPackageJson(
          packageRoot,
          packageJson,
          entries,
        );

        expectSnapshots({ diffs, packageJson, expectedPackageJson });
      });

      test('string flag', () => {
        const packageJson = sortPackageJson({
          ...correctPackageJson,
          // Parcel says sideEffects can be a string
          // https://parceljs.org/features/scope-hoisting/#side-effects
          sideEffects: 'src/reset/**' as any,
        });

        const { diffs, expectedPackageJson } = diffPackageJson(
          packageRoot,
          packageJson,
          entries,
        );

        expectSnapshots({ diffs, packageJson, expectedPackageJson });
      });

      test('array flag with no overlap', () => {
        const packageJson = sortPackageJson({
          ...correctPackageJson,
          sideEffects: ['src/reset/**'],
        });

        const { diffs, expectedPackageJson } = diffPackageJson(
          packageRoot,
          packageJson,
          entries,
        );

        expectSnapshots({ diffs, packageJson, expectedPackageJson });
      });

      test('array flag with partial overlap', () => {
        const packageJson = sortPackageJson({
          ...correctPackageJson,
          sideEffects: ['dist/side-effects/**', 'src/entries/css.*'],
        });

        const { diffs, expectedPackageJson } = diffPackageJson(
          packageRoot,
          packageJson,
          entries,
        );

        expectSnapshots({ diffs, packageJson, expectedPackageJson });
      });

      test('array flag with complete overlap', () => {
        const packageJson = sortPackageJson({
          ...correctPackageJson,
          sideEffects: ['dist/side-effects/**', '**/themes/**'],
        });

        const { diffs, expectedPackageJson } = diffPackageJson(
          packageRoot,
          packageJson,
          entries,
        );

        expectSnapshots({ diffs, packageJson, expectedPackageJson });
      });
    });

    test('kitchen sink', async () => {
      const packageJson = {
        exports: {
          '.': {
            import: {
              default: './dist/index.mjs',
              types: './dist/index.cjs.d.ts',
            },
            require: {
              default: './dist/index.cjs',
              types: './dist/index.cjs.d.ts',
            },
          },
          './css': {
            types: './css/dist/index.cjs.d.ts',
            import: './css/dist/index.mjs',
            require: './css/dist/index.cjs',
          },
          './package.json': './package.json',
          './themes/apac': {
            types: './themes/apac/dist/index.cjs.d.ts',
            import: './themes/apac/dist/index.mjs',
            require: './themes/apac/dist/index.cjs',
          },
        },
        module: 'dist/index.esm.invalid',
        files: ['css', 'dist', 'extra'],
        main: 'index.js',
        types: 'index.d.ts',
      } satisfies PackageJson;

      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        packageJson,
        entries,
      );

      expectSnapshots({ diffs, expectedPackageJson });
    });
  });
});

// we use a mix of `fs`, `fs/promises` and `fs-extra` across the codebase, so the mocks must cover all of them
vi.mock('fs', () => ({ default: fs }));
vi.mock('fs/promises', () => ({ default: fs.promises }));
vi.mock('fs-extra', async () => {
  const fse = await vi.importActual<any>('fs-extra');
  return {
    default: {
      ...fs,
      ...fs.promises,
      // readJson is not available in `memfs`, but it can use a provided `fs` mock
      readJson: fse.readJson,
    },
  };
});

describe('updatePackageJsonExports', () => {
  const packageRoot = '/___';

  beforeEach(() => {
    vol.reset();
    vol.fromJSON(
      {
        'package.json': JSON.stringify(
          {
            exports: {
              '.': './dist/index.js',
              './entry': {
                import: './dist/entry.mjs',
                require: './dist/entry.cjs',
              },
              './package.json': './package.json',
            },
          },
          null,
          2,
        ),
      },
      packageRoot,
    );
  });

  test('no exports provided', async () => {
    await updatePackageJsonExports(packageRoot, []);

    expect(vol.toJSON()).toMatchInlineSnapshot(`
      {
        "/___/package.json": "{
        "exports": {
          ".": "./dist/index.js",
          "./entry": {
            "import": "./dist/entry.mjs",
            "require": "./dist/entry.cjs"
          },
          "./package.json": "./package.json"
        }
      }",
      }
    `);
  });

  test('with exports', async () => {
    await updatePackageJsonExports(packageRoot, ['dist/some/thing.css']);

    expect(vol.toJSON()).toMatchInlineSnapshot(`
      {
        "/___/package.json": "{
        "exports": {
          ".": "./dist/index.js",
          "./entry": {
            "import": "./dist/entry.mjs",
            "require": "./dist/entry.cjs"
          },
          "./dist/some/thing.css": "./dist/some/thing.css",
          "./package.json": "./package.json"
        }
      }
      ",
      }
    `);
  });
});
