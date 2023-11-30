import { resolve } from 'path';

import { configDefaults, defineConfig } from 'vitest/config';

import { include as integrationInclude } from './vitest.config.integration';

export const exclude = [
  ...configDefaults.exclude,
  'fixtures/braid-design-system/**',
];

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  resolve: {
    alias: {
      '~utils': resolve(__dirname, './test-utils'),
    },
  },
  test: {
    exclude: [
      ...exclude,
      // handle the circular reference between configs
      ...(integrationInclude ?? []),
    ],
    setupFiles: resolve(__dirname, './test-utils/setup.ts'),
    //* these values are used in test-utils/pkg-serializer.ts
    snapshotFormat: {
      escapeString: false,
      printBasicPrototype: false,
    },
  },
});
