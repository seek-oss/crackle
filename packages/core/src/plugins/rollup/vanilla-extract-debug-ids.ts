import path from 'path';

import { cssFileFilter, transform } from '@vanilla-extract/integration';
import type { Plugin } from 'rollup';

import type { EnhancedConfig } from '../../config';

export const addVanillaDebugIds = (config: EnhancedConfig): Plugin => ({
  name: 'crackle:vanilla-extract-debug-ids',
  async transform(code, id) {
    if (!cssFileFilter.test(id)) {
      return;
    }

    const result = await transform({
      source: code,
      filePath: id,
      rootPath: config.root,
      packageName: path.basename(config.root),
      identOption: 'debug',
    });

    return result;
  },
});
