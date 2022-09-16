import stripAnsi from 'strip-ansi';
import type { expect } from 'vitest';

type Plugin = Parameters<typeof expect.addSnapshotSerializer>[0];

const serializer: Plugin = {
  test(val) {
    return typeof val === 'string';
  },
  serialize(val) {
    return `"${stripAnsi(val)}"`;
  },
};

export default serializer;
