import { transformAsync as babelTransform } from '@babel/core';
// @ts-expect-error no types
import babelPluginSyntaxJsx from '@babel/plugin-syntax-jsx';
// @ts-expect-error no types
import babelPluginSyntaxTypescript from '@babel/plugin-syntax-typescript';
import babelPluginRemoveExports from '@crackle/babel-plugin-remove-exports';
import type { Plugin } from 'vite';

export const stripRouteData = (): Plugin => ({
  enforce: 'pre',
  name: 'crackle:strip-route-data',
  async transform(code, id, ssr) {
    if (ssr || !id.endsWith('.page.tsx')) {
      return;
    }

    // TODO: merge with src/route-data.ts
    const transformedContents = await babelTransform(code, {
      plugins: [
        [
          babelPluginRemoveExports,
          { retainDefault: true, retainIdentifiers: ['React'] },
        ],
        babelPluginSyntaxJsx,
        [babelPluginSyntaxTypescript, { isTSX: true }],
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
