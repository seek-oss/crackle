import type { CrackleConfig } from '@crackle/core';

export default {
  esmAlwaysPatchImports: {
    '@crackle-fixtures/dep-with-exports-always-patch': '^1.0.0',
    react: '<18',
    'react-dom': '<18',
  },
} satisfies CrackleConfig;
