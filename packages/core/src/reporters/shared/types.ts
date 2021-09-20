import type { RollupError as BaseRollupError } from 'rollup';

export type RollupError = BaseRollupError & { location: string };
export type BuildError = Error | RollupError;

export type Status = 'Pending' | 'Running' | 'Failed' | 'Complete' | 'Canceled';

export type Reporter<EventType> = (event: EventType) => void;
