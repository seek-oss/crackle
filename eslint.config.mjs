import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import eslintConfigSeek from 'eslint-config-seek';
import glob from 'fast-glob';

import formatJsTag from '@crackle/eslint-plugin-format-js-tag';

// Recreate the behaviour of `ignore-sync`, but make it work for eslint flat config.
// TL;DR: Get all `.gitignore` entries in packages and fixtures and make them relative
// to the repo root.
const gitignorePaths = [
  ...(await glob.async('(fixtures|packages)/*/.gitignore')),
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const packageAndFixtureIgnoresEntries = [];

for (const gitignorePath of gitignorePaths) {
  const resolvedPath = path.resolve(__dirname, gitignorePath);
  const ignoreConfig = includeIgnoreFile(resolvedPath);

  const dir = path.dirname(gitignorePath);

  ignoreConfig.ignores = ignoreConfig.ignores.map((ignore) =>
    path.join(dir, ignore),
  );

  packageAndFixtureIgnoresEntries.push(ignoreConfig);
}

/** @type {import("eslint").Linter[]} */
export default [
  {
    ignores: ['fixtures/braid-design-system', '**/node_modules'],
  },
  ...packageAndFixtureIgnoresEntries,
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
