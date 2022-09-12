// import {
//   transformAsync as babelTransform,
//   createConfigItem,
// } from '@babel/core';
// import vanillaBabelPlugin from '@vanilla-extract/babel-plugin';
import {
  cssFileFilter,
  addFileScope,
  getPackageInfo,
} from '@vanilla-extract/integration';
import type { Plugin } from 'rollup';

const packageInfo = getPackageInfo();

export const addVanillaDebugIds = (projectRoot: string): Plugin => ({
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

    // const result = await babelTransform(code, {
    //   plugins: [createConfigItem(vanillaBabelPlugin)],
    //   babelrc: false,
    //   filename,
    // });

    return addFileScope({
      source: code,
      filePath: filename,
      rootPath: projectRoot,
      packageName: packageInfo.name,
      target: 'library',
    });
  },
});
