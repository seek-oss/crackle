import type { Plugin } from './types';

export default {
  test: (val) => typeof val === 'string',
  serialize: (val) => (val as string).trim(),
} satisfies Plugin;
