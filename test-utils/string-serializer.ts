import type { Plugin } from './types';

export default {
  test: (val) => typeof val === 'string',
  print: (val) => (val as string).trim(),
} satisfies Plugin;
