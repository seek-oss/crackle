import {
  transformAsync as babelTransform,
  createConfigItem,
} from '@babel/core';
import vanillaBabelPlugin from '@vanilla-extract/babel-plugin';
import { cssFileFilter } from '@vanilla-extract/integration';
import { Plugin } from 'vite';

export const addVanillaDebugIds: Plugin = {
  name: 'add-vanilla-debug-ids',
  async transform(code, id) {
    if (!cssFileFilter.test(id)) {
      return;
    }

    const result = await babelTransform(code, {
      plugins: [createConfigItem(vanillaBabelPlugin)],
      babelrc: false,
      filename: id,
    });

    return result!.code;
  },
};
