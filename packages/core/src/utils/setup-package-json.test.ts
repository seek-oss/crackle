import path from 'path';

import { describe, expect, test } from 'vitest';
import packageJsonSerializer from '~utils/pkg-serializer';

import type { PackageEntryPoint } from '../types';

import { extensionForFormat } from './files';
import { diffPackageJson } from './setup-package-json';

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
        types: './dist/index.d.ts',
        import: './dist/index.mjs',
        require: './dist/index.cjs',
      },
      './css': {
        types: './dist/css.d.ts',
        import: './dist/css.mjs',
        require: './dist/css.cjs',
      },
      './themes/apac': {
        types: './dist/themes/apac.d.ts',
        import: './dist/themes/apac.mjs',
        require: './dist/themes/apac.cjs',
      },
      './package.json': './package.json',
    },
    main: './dist/index.cjs',
    module: './dist/index.mjs',
    files: ['css', 'dist', 'themes/apac'],
  };

  test('empty package.json', async () => {
    const { diffs, expectedPackageJson } = diffPackageJson(
      packageRoot,
      {},
      entries,
    );

    expect(diffs).toMatchSnapshot('diffs');
    expect(expectedPackageJson).toMatchSnapshot('package.json');
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

      expect(diffs).toMatchSnapshot('diffs');
      expect({
        diffA: packageJson,
        diffB: expectedPackageJson,
      }).toMatchSnapshot('package.json');
    });

    test('module', () => {
      const packageJson = structuredClone(correctPackageJson);
      packageJson.module = 'something/else.js';

      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        packageJson,
        entries,
      );

      expect(diffs).toMatchSnapshot('diffs');
      expect({
        diffA: packageJson,
        diffB: expectedPackageJson,
      }).toMatchSnapshot('package.json');
    });

    test('exports missing', () => {
      const { exports, ...packageJson } = structuredClone(correctPackageJson);

      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        packageJson,
        entries,
      );

      expect(diffs).toMatchSnapshot('diffs');
      expect({
        diffA: packageJson,
        diffB: expectedPackageJson,
      }).toMatchSnapshot('package.json');
    });

    test('exports out of order', () => {
      const packageJson = structuredClone(correctPackageJson);
      const { '.': index, ...otherExports } = packageJson.exports;
      packageJson.exports = {
        ...otherExports,
        '.': index,
      };

      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        packageJson,
        entries,
      );

      expect(diffs).toMatchSnapshot('diffs');
      expect({
        diffA: packageJson,
        diffB: expectedPackageJson,
      }).toMatchSnapshot('package.json');
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

      expect(diffs).toMatchSnapshot('diffs');
      expect({
        diffA: packageJson,
        diffB: expectedPackageJson,
      }).toMatchSnapshot('package.json');
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

      expect(diffs).toMatchSnapshot('diffs');
      expect({
        diffA: packageJson,
        diffB: expectedPackageJson,
      }).toMatchSnapshot('package.json');
    });

    test('kitchen sink', async () => {
      const { diffs, expectedPackageJson } = diffPackageJson(
        packageRoot,
        {
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
        },
        entries,
      );

      expect(diffs).toMatchSnapshot('diffs');
      expect(expectedPackageJson).toMatchSnapshot('package.json');
    });
  });
});
