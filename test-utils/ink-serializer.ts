import stripAnsi from 'strip-ansi';

import type { Plugin } from './types';

export default {
  test: (val) => typeof val === 'string',
  serialize: (val) => `"${stripAnsi(val)}"`,
} satisfies Plugin;
