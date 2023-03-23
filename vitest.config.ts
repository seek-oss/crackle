import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~utils': resolve(__dirname, './test-utils'),
    },
  },
  test: {
    exclude: [...configDefaults.exclude, 'fixtures/braid-design-system/**'],
    setupFiles: './test-utils/setup.ts',
    //* these values are used in test-utils/pkg-serializer.ts
    snapshotFormat: {
      escapeString: false,
      printBasicPrototype: false,
    },
  },
});
