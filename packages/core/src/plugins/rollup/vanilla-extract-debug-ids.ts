import path from 'path';

import { cssFileFilter, transform } from '@vanilla-extract/integration';
import type { Plugin } from 'rollup';

export const addVanillaDebugIds = (packageRoot: string): Plugin => ({
  name: 'crackle:vanilla-extract-debug-ids',
  async transform(code, id) {
    if (!cssFileFilter.test(id)) {
      return;
    }

    const result = await transform({
      source: code,
      filePath: id,
      rootPath: packageRoot,
      packageName: path.basename(packageRoot),
      identOption: 'debug',
    });

    return result;
  },
});
