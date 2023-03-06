import { format as prettyFormat } from 'pretty-format';
import type { UserConfig } from 'vitest/config';

import vitestConfig from '../vitest.config';

import type { Plugin } from './types';

type PickVal<T, Condition, Base = Required<T>> = {
  [Key in keyof Base as Base[Key] extends Condition ? Key : never]: Base[Key];
};

const snapshotOptions = (vitestConfig as UserConfig).test!.snapshotFormat!;

export default {
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
} satisfies Plugin;
