import { describe, expect, test } from 'vitest';

import type { Format } from '../types';

import { extensionForFormat } from './files';
import { diffPackageJson } from './setup-package-json';

import packageJsonSerializer from '~utils/pkg-serializer';

expect.addSnapshotSerializer(packageJsonSerializer);

const entries = [
  {
    isDefaultEntry: true,
    entryName: 'dist',
    entryPath: '/project/src/index.ts',
    outputDir: '/project/dist',
    getOutputPath: (format: Format) =>
      `dist/index.${extensionForFormat(format)}`,
  },
  {
    isDefaultEntry: false,
    entryName: 'css',
    entryPath: '/project/src/entries/css.ts',
    outputDir: '/project/css',
    getOutputPath: (format: Format) =>
      `css/dist/index.${extensionForFormat(format)}`,
  },
  {
    isDefaultEntry: false,
    entryName: 'themes/apac',
    entryPath: '/project/src/entries/themes/apac.ts',
    outputDir: '/project/themes/apac',
    getOutputPath: (format: Format) =>
      `themes/apac/dist/index.${extensionForFormat(format)}`,
  },
];

describe('diffPackageJson', () => {
  const correctPackageJson = {
    exports: {
      '.': {
        types: './dist/index.cjs.d.ts',
        import: './dist/index.mjs',
        require: './dist/index.cjs',
      },
      './css': {
        types: './css/dist/index.cjs.d.ts',
        import: './css/dist/index.mjs',
        require: './css/dist/index.cjs',
      },
      './themes/apac': {
        types: './themes/apac/dist/index.cjs.d.ts',
        import: './themes/apac/dist/index.mjs',
        require: './themes/apac/dist/index.cjs',
      },
      './package.json': './package.json',
    },
    main: './dist/index.cjs',
    module: './dist/index.mjs',
    files: ['css', 'dist', 'themes/apac'],
  };

  test('empty package.json', async () => {
    const { diffs, expectedPackageJson } = diffPackageJson({}, entries);

    expect(diffs).toMatchSnapshot('diffs');
    expect(expectedPackageJson).toMatchSnapshot('package.json');
  });

  test('correct package.json', async () => {
    const { diffs } = diffPackageJson(correctPackageJson, entries);

    expect(diffs).toHaveLength(0);
  });

  describe('incorrect package.json', () => {
    test('main', () => {
      const packageJson = structuredClone(correctPackageJson);
      packageJson.main = 'index.js';

      const { diffs, expectedPackageJson } = diffPackageJson(
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
