// this is a devDependency so the types will be inlined
import devDep from '@crackle-fixtures/dev-dep';
export type { DevDepType } from '@crackle-fixtures/dev-dep';

import type { MathsFn } from '../common/maths';

export const logger = (...args: any[]) =>
  // eslint-disable-next-line no-console
  console.log('This logs', devDep, ':', ...args);

export const calcAndLog = (a: number, b: number, fn: MathsFn) =>
  logger(fn(a, b).toString());
