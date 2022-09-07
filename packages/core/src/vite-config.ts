import type { InlineConfig } from 'vite';

import type { EnhancedConfig } from './config';

export const commonViteConfig = (config: EnhancedConfig): InlineConfig => ({
  root: config.root,
  resolve: {
    alias: {
      __THE_ENTRY: config.appShell,
      // used when building the client
      'sku/react-treat': require.resolve('../mocks/react-treat.mjs'),
      'sku/treat': require.resolve('../mocks/treat.mjs'),
    },
  },
  define: {
    'process.env.NODE_DEBUG': JSON.stringify(false),
    global: JSON.stringify({}),
  },
});
