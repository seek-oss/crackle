import type { Plugin } from 'vite';

import type { EnhancedConfig } from './config';

export const addPageRoots = (config: EnhancedConfig): Plugin => ({
  enforce: 'pre',
  name: 'add-page-roots',
  async transform(code, id) {
    if (!id.includes('core/entries/page-modules')) {
      return;
    }

    return code.replace(/__PAGE_ROOTS/g, config.pageRoots.join(','));
  },
});
