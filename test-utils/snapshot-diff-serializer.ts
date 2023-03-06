import snapshotDiff from 'snapshot-diff';

import type { Plugin } from './types';

type DiffOptions = Parameters<typeof snapshotDiff>[2];
type ExpectDiff = {
  diffA: unknown;
  diffB: unknown;
};

const defaultOptions = {
  aAnnotation: 'Diff A',
  bAnnotation: 'Diff B',
  stablePatchmarks: true,
} satisfies DiffOptions;

const diffWithOptions = (diffA: any, diffB: any, options?: DiffOptions) =>
  snapshotDiff(diffA, diffB, { ...defaultOptions, ...options });

export const createSerializer = (options?: DiffOptions) =>
  ({
    test(value) {
      return Boolean(value) && value.diffA != null && value.diffB != null;
    },
    print(value, serialize) {
      const { diffA, diffB } = value as ExpectDiff;
      return diffWithOptions(serialize(diffA), serialize(diffB), options);
    },
  } satisfies Plugin);

export default createSerializer();
