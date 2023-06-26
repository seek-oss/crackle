import type { PartialConfig as CrackleConfig } from './config';

export type { AppShell, CrackleServer } from './types';

export type { CrackleConfig };

export const defineConfig = (config: CrackleConfig) => config;
