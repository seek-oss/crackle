import type { RollupError } from 'rollup';
import type { SetRequired } from 'type-fest';

export type BuildError = Error | RollupError;

export type { RollupError, SetRequired };
