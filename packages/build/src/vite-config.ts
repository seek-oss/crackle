import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import type { InlineConfig } from 'vite';

import { getWorkdirPath } from './utils';

export const commonViteConfig: InlineConfig = {
  plugins: [vanillaExtractPlugin({ identifiers: 'short' })],
  resolve: {
    alias: {
      __THE_ENTRY: getWorkdirPath('/src/App.tsx'),
      'sku/react-treat': require.resolve('../mocks/react-treat.tsx'),
      'sku/treat': require.resolve('../mocks/treat.ts'),
    },
  },
  define: {
    'process.env.NODE_DEBUG': JSON.stringify(false),
    global: JSON.stringify({}),
  },
};
