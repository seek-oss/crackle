import { describe, expect, test } from 'vitest';

import type { Format } from '../types';

import { extensionForFormat } from './files';
import { diffPackageJson } from './setup-package-json';

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
  test('Empty package.json', async () => {
    const { diffs, expectedPackageJson } = diffPackageJson({}, entries);

    expect(diffs).toMatchSnapshot('diffs');
    expect(expectedPackageJson).toMatchSnapshot('expectedPackageJson');
  });

  test('Incorrect package.json', async () => {
    const { diffs, expectedPackageJson } = diffPackageJson(
      {
        exports: {
          '.': {
            import: {
              default: './dist/index.esm.js',
              types: './dist/index.cjs.d.ts',
            },
            require: {
              default: './dist/index.cjs',
              types: './dist/index.cjs.d.ts',
            },
          },
          './css': {
            import: {
              default: './css/dist/index.esm.js',
              types: './css/dist/index.cjs.d.ts',
            },
            require: {
              default: './css/dist/index.cjs',
              types: './css/dist/index.cjs.d.ts',
            },
          },
          './package.json': './package.json',
          './themes/apac': {
            import: {
              default: './themes/apac/dist/index.esm.js',
              types: './themes/apac/dist/index.cjs.d.ts',
            },
            require: {
              default: './themes/apac/dist/index.cjs',
              types: './themes/apac/dist/index.cjs.d.ts',
            },
          },
        },
        files: ['/css', '/dist', '/apac'],
        main: './dist/index.cjs',
        module: 'dist/index.esm.invalid',
      },
      entries,
    );

    expect(diffs).toMatchSnapshot('diffs');
    expect(expectedPackageJson).toMatchSnapshot('expectedPackageJson');
  });

  test('Correct package.json', async () => {
    const { diffs } = diffPackageJson(
      {
        exports: {
          '.': {
            import: {
              default: './dist/index.esm.js',
              types: './dist/index.cjs.d.ts',
            },
            require: {
              default: './dist/index.cjs',
              types: './dist/index.cjs.d.ts',
            },
          },
          './css': {
            import: {
              default: './css/dist/index.esm.js',
              types: './css/dist/index.cjs.d.ts',
            },
            require: {
              default: './css/dist/index.cjs',
              types: './css/dist/index.cjs.d.ts',
            },
          },
          './package.json': './package.json',
          './themes/apac': {
            import: {
              default: './themes/apac/dist/index.esm.js',
              types: './themes/apac/dist/index.cjs.d.ts',
            },
            require: {
              default: './themes/apac/dist/index.cjs',
              types: './themes/apac/dist/index.cjs.d.ts',
            },
          },
        },
        files: ['/css', '/dist', '/themes/apac'],
        main: './dist/index.cjs',
        module: './dist/index.esm.js',
      },
      entries,
    );

    expect(diffs).toHaveLength(0);
  });
});
