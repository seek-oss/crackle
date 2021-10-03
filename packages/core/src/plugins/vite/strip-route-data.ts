import { transformAsync as babelTransform } from '@babel/core';
import type { Plugin } from 'vite';

export const stripRouteData = (): Plugin => ({
  enforce: 'pre',
  name: 'crackle:strip-route-data',
  async transform(code, id, ssr) {
    if (ssr || !id.endsWith('.page.tsx')) {
      return;
    }

    const transformedContents = await babelTransform(code, {
      plugins: [
        [
          '@crackle/babel-plugin-remove-exports',
          { retainDefault: true, retainIdentifiers: ['React'] },
        ],
        '@babel/plugin-syntax-jsx',
        ['@babel/plugin-syntax-typescript', { isTSX: true }],
      ],
      babelrc: false,
      configFile: false,
      filename: id,
    });

    if (!transformedContents?.code) {
      throw new Error(`No result from babel plugin transform of ${id}`);
    }

    return transformedContents.code;
  },
});
