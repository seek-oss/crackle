import eslintConfigSeek from 'eslint-config-seek';

import formatJsTag from '@crackle/eslint-plugin-format-js-tag';

/** @type {import("eslint").Linter[]} */
export default [
  {
    ignores: [
      // Inline
      'fixtures/braid-design-system',
      '**/node_modules',

      // Ignore entries in fixture gitignores
      'fixtures/braid-site/dist',
      'fixtures/dev-entries/cli',
      'fixtures/dev-entries/deep/re-export',
      'fixtures/dev-entries/dist',
      'fixtures/dev-entries-webpack/cli',
      'fixtures/dev-entries-webpack/dist',
      'fixtures/dts-preserve/dist',
      'fixtures/esm-compat/dist',
      'fixtures/library-with-docs/dist',
      'fixtures/multi-entry-library/components',
      'fixtures/multi-entry-library/dist',
      'fixtures/multi-entry-library/extras',
      'fixtures/multi-entry-library/themes/apac',
      'fixtures/package-preserve/dist',
      'fixtures/package-preserve-dts-preserve/dist',
      'fixtures/single-entry-library/dist',
      'fixtures/with-dep-hidden-package-json/dist',
      'fixtures/with-graphql-schema-types/dist',
      'fixtures/with-side-effects/css',
      'fixtures/with-side-effects/css-more',
      'fixtures/with-side-effects/dist',
      'fixtures/with-side-effects/reset',
      'fixtures/with-styles/dist',
      'fixtures/with-vocab/dist',
      'fixtures/with-vocab/**/*.vocab/index.ts',

      // Ignore entries in fixture gitignores
      'packages/babel-plugin-remove-exports/dist',
      'packages/cli/config',
      'packages/cli/dist',
      'packages/cli/**/README.md',
      'packages/core/build',
      'packages/core/clean',
      'packages/core/dev',
      'packages/core/dist',
      'packages/core/fix',
      'packages/core/logger',
      'packages/core/package',
      'packages/core/resolve-config',
      'packages/core/route-data',
      'packages/core/serve',
      'packages/core/start',
      'packages/eslint-plugin-format-js-tag/dist',
      'packages/router/dist',
      'packages/router/routes',
      'packages/router/server',
    ],
  },
  {
    files: ['packages/babel-plugin-remove-exports/src/index.test.ts'],
    plugins: {
      formatJsTag,
    },
    rules: {
      'formatJsTag/format': 'error',
    },
  },
  {
    settings: {
      jest: {
        version: 29,
      },

      react: {
        version: '18',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],

      'no-debugger': 'warn',

      'import-x/order': [
        'error',
        {
          'newlines-between': 'always',

          alphabetize: {
            order: 'asc',
          },

          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],

          pathGroups: [
            {
              pattern: '*.css',
              group: 'index',
              position: 'after',

              patternOptions: {
                matchBase: true,
              },
            },
          ],
        },
      ],
    },
  },
  ...eslintConfigSeek,
  {
    files: ['scripts/**'],
    rules: {
      'no-console': 'off',
    },
  },
  {
    languageOptions: {
      ecmaVersion: 6,
      sourceType: 'module',

      parserOptions: {
        project: ['./tsconfig.json', './scripts/tsconfig.json'],
      },
    },
  },
];
