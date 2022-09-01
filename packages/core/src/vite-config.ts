import type { InlineConfig } from 'vite';

import type { EnhancedConfig } from './config';

const reactTreatMock = require.resolve('../mocks/react-treat.cjs');
const treatMock = require.resolve('../mocks/treat.cjs');

export const commonViteConfig = (config: EnhancedConfig): InlineConfig => ({
  root: config.root,
  resolve: {
    alias: {
      __THE_ENTRY: config.appShell,
      // used when building the client
      'sku/react-treat': reactTreatMock,
      'sku/treat': treatMock,
    },
  },
  define: {
    'process.env.NODE_DEBUG': JSON.stringify(false),
    global: JSON.stringify({}),
    // used in the renderer bootstrap (Vite doesn't bundle dependencies in SSR mode)
    SKU_REACT_TREAT_MOCK: JSON.stringify(reactTreatMock),
    SKU_TREAT_MOCK: JSON.stringify(treatMock),
  },
});
