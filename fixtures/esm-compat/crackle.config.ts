import type { UserConfig } from '@crackle/cli/config';

export default {
  esm: {
    reconcileDependencies: {
      '@crackle-fixtures/dep-with-exports-always-patch': '^1.0.0',
      react: '<18',
      'react-dom': '<18',
    },
  },
} satisfies UserConfig;
