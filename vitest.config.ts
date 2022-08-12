import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    snapshotFormat: { escapeString: false, printBasicPrototype: false },
  },
});