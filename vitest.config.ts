import { resolve } from 'path';

import { configDefaults, defineConfig } from 'vitest/config';

const integrationInclude = './tests/**/*.test.ts';

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
    snapshotFormat: {
      escapeString: false,
      printBasicPrototype: false,
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          exclude: [
            ...configDefaults.exclude,
            'fixtures/braid-design-system/**',
            integrationInclude,
          ],
          setupFiles: resolve(__dirname, './test-utils/setup.ts'),
          //* these values are used in test-utils/pkg-serializer.ts
        },
      },
      {
        extends: true,
        test: {
          name: 'integration',
          include: [integrationInclude],
        },
      },
    ],
  },
});
