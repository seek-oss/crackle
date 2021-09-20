import path from 'path';

import type { Plugin } from 'vite';

import type { EnhancedConfig } from './config';

const pageGlobSuffix = '/**/*.page.tsx';

export const addPageRoots = (config: EnhancedConfig): Plugin => ({
  enforce: 'pre',
  name: 'add-page-roots',
  async transform(code, id) {
    if (!id.includes('core/entries/page-modules')) {
      return;
    }

    const combinedPageRoots = config.pageRoots
      // Remove any leading/trailing slash, e.g. /src/pages
      .map((pageRoot) => pageRoot.replace(/^\/+|\/$/g, ''))
      .join(',');

    const output =
      config.pageRoots.length > 1
        ? `{${combinedPageRoots}}`
        : combinedPageRoots;

    const glob = path.join('/', output, pageGlobSuffix);

    return code.replace(/__PAGE_ROOTS/g, glob);
  },
});
