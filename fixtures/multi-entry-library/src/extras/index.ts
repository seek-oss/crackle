import type { resolveConfig } from '@crackle/core/resolve-config';

import { logThePhrase } from '../common/commonLogger';
import type { MathsFn } from '../common/maths';

export const logger = () => logThePhrase('This is a logger');

export const calcAndLog = (a: number, b: number, fn: MathsFn) => {
  logThePhrase(fn(a, b).toString());
};

export type Config = Awaited<ReturnType<typeof resolveConfig>>;
