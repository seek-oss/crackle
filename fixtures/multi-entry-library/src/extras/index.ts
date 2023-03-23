// @crackle/core is a devDependency so the types should be inlined
import type { logger as crackleLogger } from '@crackle/core/logger';

import { logThePhrase } from '../common/commonLogger';
import type { MathsFn } from '../common/maths';

export type InlinedType = typeof crackleLogger;

export const logger = () => logThePhrase('This is a logger');

export const calcAndLog = (a: number, b: number, fn: MathsFn) => {
  logThePhrase(fn(a, b).toString());
};
