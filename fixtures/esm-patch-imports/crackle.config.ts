import type { CrackleConfig } from '@crackle/core';

export default {
  reconcileDependencies: {
    '@crackle-fixtures/dep-with-exports-always-patch': '^1.0.0',
    react: '<18',
    'react-dom': '<18',
  },
} satisfies CrackleConfig;
