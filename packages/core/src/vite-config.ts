import type { InlineConfig } from 'vite';

import type { EnhancedConfig } from './config';

export const commonViteConfig = (config: EnhancedConfig): InlineConfig => ({
  root: config.root,
  resolve: {
    alias: {
      // eslint-disable-next-line no-sync
      __THE_ENTRY: config.appShell,
      'sku/react-treat': require.resolve('../mocks/react-treat.tsx'),
      'sku/treat': require.resolve('../mocks/treat.ts'),
    },
  },
  define: {
    'process.env.NODE_DEBUG': JSON.stringify(false),
    global: JSON.stringify({}),
  },
});
