import snapshotDiff from 'snapshot-diff';

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

export default {
  test(value: any) {
    return Boolean(value) && value.diffA != null && value.diffB != null;
  },
  print(value: any, serialize: (val: unknown) => string) {
    const { diffA, diffB } = value as ExpectDiff;
    return diffWithOptions(serialize(diffA), serialize(diffB));
  },
};
