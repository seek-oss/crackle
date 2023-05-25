import { type UserConfig, defineConfig } from 'vitest/config';

import vitestConfig, { exclude as defaultExclude } from './vitest.config';

const config = vitestConfig as UserConfig;

export const include = ['./tests/**/*.test.ts'];

export default defineConfig(() => ({
  ...config,
  test: {
    ...config.test,
    include,
    exclude: defaultExclude,
  },
}));
