import type {
  PartialConfig as UserConfig,
  EnhancedConfig as ResolvedConfig,
} from './config';

export type { AppShell, CrackleServer } from './types';

export type { UserConfig, ResolvedConfig };

export const defineConfig = (config: UserConfig): UserConfig => config;
