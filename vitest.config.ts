import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

import { include as integrationInclude } from './vitest.config.integration';

export const exclude = [
  ...configDefaults.exclude,
  'fixtures/braid-design-system/**',
];

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~utils': resolve(__dirname, './test-utils'),
    },
  },
  test: {
    exclude: [
      ...exclude,
      // handle the circular references between configs
      ...(integrationInclude ?? []),
    ],
    setupFiles: './test-utils/setup.ts',
    //* these values are used in test-utils/pkg-serializer.ts
    snapshotFormat: {
      escapeString: false,
      printBasicPrototype: false,
    },
  },
});
