import { diffPackageJson } from './setup-package-json';

const entries = [
  {
    isDefaultEntry: true,
    entryName: 'dist',
    entryPath: '/project/src/index.ts',
    outputDir: '/project/dist',
  },
  {
    isDefaultEntry: false,
    entryName: 'css',
    entryPath: '/project/src/entries/css.ts',
    outputDir: '/project/css',
  },
  {
    isDefaultEntry: false,
    entryName: 'themes/apac',
    entryPath: '/project/src/entries/themes/apac.ts',
    outputDir: '/project/themes/apac',
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
              default: './dist/index.esm',
              types: './dist/index.cjs.d.ts',
            },
            require: {
              default: './dist/index.cjs',
              types: './dist/index.cjs.d.ts',
            },
          },
          './css': {
            import: {
              default: './css/index.esm',
              types: './css/index.cjs.d.ts',
            },
            require: {
              default: './css/index.cjs',
              types: './css/index.cjs.d.ts',
            },
          },
          './package.json': './package.json',
          './themes/apac': {
            import: {
              default: './themes/apac/index.esm',
              types: './themes/apac/index.cjs.d.ts',
            },
            require: {
              default: './themes/apac/index.cjs',
              types: './themes/apac/index.cjs.d.ts',
            },
          },
        },
        files: ['/css', '/dist', '/apac'],
        main: 'dist/index.cjs',
        module: 'dist/index.esm',
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
              default: './dist/index.mjs',
              types: './dist/index.cjs.d.ts',
            },
            require: {
              default: './dist/index.cjs',
              types: './dist/index.cjs.d.ts',
            },
          },
          './css': {
            import: {
              default: './css/index.mjs',
              types: './css/index.cjs.d.ts',
            },
            require: {
              default: './css/index.cjs',
              types: './css/index.cjs.d.ts',
            },
          },
          './package.json': './package.json',
          './themes/apac': {
            import: {
              default: './themes/apac/index.mjs',
              types: './themes/apac/index.cjs.d.ts',
            },
            require: {
              default: './themes/apac/index.cjs',
              types: './themes/apac/index.cjs.d.ts',
            },
          },
        },
        files: ['/css', '/dist', '/themes/apac'],
        main: 'dist/index.cjs',
        module: 'dist/index.mjs',
      },
      entries,
    );

    expect(diffs).toHaveLength(0);
  });
});
