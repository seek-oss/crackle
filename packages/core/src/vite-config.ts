import type { InlineConfig } from 'vite';

import type { EnhancedConfig } from './config';
import { resolveFromCrackle } from './utils/resolve-from';

export const commonViteConfig = (config: EnhancedConfig): InlineConfig => ({
  root: config.root,
  resolve: {
    alias: {
      __THE_ENTRY: config.appShell,
      // used when building the client
      'sku/react-treat': resolveFromCrackle('./mocks/react-treat.mjs'),
      'sku/treat': resolveFromCrackle('./mocks/treat.mjs'),
    },
  },
  define: {
    'process.env.NODE_DEBUG': JSON.stringify(false),
    global: JSON.stringify({}),
  },
});
