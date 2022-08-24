import stripAnsi from 'strip-ansi';

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
