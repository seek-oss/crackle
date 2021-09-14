import { Plugin } from 'vite';

import { Config } from './config';

export const addPageRoots = (config: Config): Plugin => ({
  enforce: 'pre',
  name: 'add-page-roots',
  async transform(code, id) {
    if (!id.includes('core/entries/page-modules')) {
      return;
    }

    const newCode = code.replace(/__PAGE_ROOTS/g, config.pageRoots.join(','));
    console.log('newCode: ', newCode);
    return newCode;
  },
});
