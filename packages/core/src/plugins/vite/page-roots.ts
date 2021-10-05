import path from 'path';

import type { Plugin } from 'vite';

import type { EnhancedConfig } from '../../config';

const pageGlobSuffix = '/**/*.page.tsx';

const browserPageModules = '__BROWSER_PAGE_MODULES';
const nodePageModules = '__NODE_PAGE_MODULES';

const prefix = (name: string) => `/${name}`;

export const addPageRoots = (config: EnhancedConfig): Plugin => ({
  enforce: 'pre',
  name: 'crackle:page-roots',
  resolveId(source) {
    if (source === browserPageModules || source === nodePageModules) {
      /**
       * The fake IDs need to be prepended with a / because vite converts them to valid browser paths.
       * Without this, the module graph doesn't line up
       *
       * https://github.com/vitejs/vite/blob/8fe8df37d4b68705bfb2f768b47ca99a8678f4e9/packages/vite/src/node/plugins/importAnalysis.ts#L216-L219
       *  */
      return prefix(source);
    }
  },
  load(id) {
    if (id !== prefix(browserPageModules) && id !== prefix(nodePageModules)) {
      return;
    }

    const globMethod = id === prefix(browserPageModules) ? 'glob' : 'globEager';

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
