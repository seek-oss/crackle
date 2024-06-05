import { format as prettyFormat } from 'pretty-format';

import vitestConfig from '../vitest.config';

import type { Plugin } from './types';

export default {
  test(val) {
    return typeof val === 'object' && val?.main;
  },
  serialize(val) {
    return prettyFormat(val, {
      ...vitestConfig.test?.snapshotFormat,
      compareKeys: null,
    });
  },
} satisfies Plugin;
