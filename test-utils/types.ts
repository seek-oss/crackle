import type { expect } from 'vitest';

export type Plugin = Parameters<typeof expect.addSnapshotSerializer>[0];
