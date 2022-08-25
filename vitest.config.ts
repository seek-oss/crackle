import { resolve } from 'path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '~utils': resolve(__dirname, './test-utils'),
    },
  },
  test: {
    setupFiles: './test-utils/setup.ts',
    snapshotFormat: { escapeString: false },
  },
});
