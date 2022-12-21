import { format as prettyFormat } from 'pretty-format';
import type { expect } from 'vitest';
import type { UserConfig } from 'vitest/config';

import vitestConfig from '../vitest.config';

type Plugin = Parameters<typeof expect.addSnapshotSerializer>[0];
type PickVal<T, Condition, Base = Required<T>> = {
  [Key in keyof Base as Base[Key] extends Condition ? Key : never]: Base[Key];
};

const snapshotOptions = (vitestConfig as UserConfig).test!.snapshotFormat!;

const serializer: Plugin = {
  test(val) {
    return typeof val === 'object' && val?.main;
  },
  serialize(val) {
    return prettyFormat(val, {
      // omit complex types because Vitest's bundled types are incompatible with prety-format's
      ...(snapshotOptions as PickVal<typeof snapshotOptions, boolean | number>),
      compareKeys: null,
    });
  },
};

export default serializer;
