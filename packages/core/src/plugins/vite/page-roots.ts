import path from 'path';

import type { Plugin } from 'vite';

import type { EnhancedConfig } from '../../config';

const pageGlobSuffix = '/**/*.page.tsx';

const browserPageModules = '__BROWSER_PAGE_MODULES';
const nodePageModules = '__NODE_PAGE_MODULES';

export const addPageRoots = (config: EnhancedConfig): Plugin => ({
  enforce: 'pre',
  name: 'crackle:page-roots',
  resolveId(source) {
    if (source === browserPageModules || source === nodePageModules) {
      return source;
    }
  },
  load(id) {
    if (id !== browserPageModules && id !== nodePageModules) {
      return;
    }

    const globMethod = id === browserPageModules ? 'glob' : 'globEager';

    const combinedPageRoots = config.pageRoots
      // Remove any leading/trailing slash, e.g. /src/pages
      .map((pageRoot) => pageRoot.replace(/^\/+|\/$/g, ''))
      .join(',');

    const output =
      config.pageRoots.length > 1
        ? `{${combinedPageRoots}}`
        : combinedPageRoots;

    const glob = path.join('/', output, pageGlobSuffix);

    return `export default import.meta.${globMethod}('${glob}');`;
  },
});
