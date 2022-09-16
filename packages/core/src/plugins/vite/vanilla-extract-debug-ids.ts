import {
  transformAsync as babelTransform,
  createConfigItem,
} from '@babel/core';
import vanillaBabelPlugin from '@vanilla-extract/babel-plugin';
import { cssFileFilter } from '@vanilla-extract/integration';
import type { Plugin } from 'rollup';

export const addVanillaDebugIds = (): Plugin => ({
  name: 'crackle:vanilla-extract-debug-ids',
  async transform(code, id) {
    if (!cssFileFilter.test(id)) {
      return;
    }

    let filename = id;

    const index = id.indexOf('?used');

    if (index > 0) {
      filename = id.substring(0, index);
    }

    const result = await babelTransform(code, {
      plugins: [createConfigItem(vanillaBabelPlugin)],
      babelrc: false,
      filename,
    });

    return result!.code;
  },
});
