import snapshotDiff from 'snapshot-diff';
import type { expect } from 'vitest';

type Plugin = Parameters<typeof expect.addSnapshotSerializer>[0];
type ExpectDiff = {
  diffA: unknown;
  diffB: unknown;
};

const options = {
  aAnnotation: 'Diff A',
  bAnnotation: 'Diff B',
  stablePatchmarks: true,
};

const diffWithOptions = (diffA: any, diffB: any) =>
  snapshotDiff(diffA, diffB, options);

const serializer: Plugin = {
  test(value) {
    return Boolean(value) && value.diffA != null && value.diffB != null;
  },
  print(value, serialize) {
    const { diffA, diffB } = value as ExpectDiff;
    return diffWithOptions(serialize(diffA), serialize(diffB));
  },
};

export default serializer;
