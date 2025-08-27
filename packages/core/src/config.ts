import assert from 'assert';
import { AsyncLocalStorage } from 'async_hooks';
import fs from 'fs';
import path from 'path';
import process from 'process';

import { defu } from 'defu';

import type { PartialDeep } from './types';
import { resolveFromCrackle } from './utils/resolve-from';

export interface Config {
  /**
   * The root of the application that all paths are resolved relative to
   *
   * @default process.cwd()
   */
  root: string;
  /**
   * Compile output to CommonJS.
   *
   * @default {}
   */
  cjs: any;
  /**
   * Compile output to ES Modules.
   */
  esm: {
    /**
     * Peer dependencies that require ESM reconciliation.
     *
     * Specify the package and corresponding version range for which ESM compatibility is required.
     *
     * @see https://github.com/seek-oss/crackle/blob/master/docs/esm-reconciliation.md#reconciling-peer-dependencies
     * @default {}
     */
    reconcileDependencies: Record<string, string>;
  };
  dts: {
    /**
     * Controls how Crackle generates `.d.ts` files.
     *
     * - 'bundle' rolls up all `.d.ts` files into a single file
     * - 'preserve' generates `.d.ts` files for each file in the source directory, for maximum compatibility with TypeScript
     *
     * @default 'bundle'
     */
    mode: 'bundle' | 'preserve';
    /**
     * Override TypeScript `compilerOptions` for when generating `.d.ts` files.
     *
     * @default { incremental: false, noEmitOnError: false }
     */
    options: Record<string, unknown>;
  };
  dev: {
    /**
     * Controls whether Crackle should generate a shim.
     *
     * - 'require' creates a `require` shim using `createRequire`
     * - 'none' does not add a shim
     *
     * @default 'require'
     */
    shim?: 'require' | 'none';
  };
  package: {
    /**
     * Automatically clean output directory.
     *
     * @default true
     */
    clean: boolean;
    /**
     * Automatically run `fix` if necessary.
     *
     * @default false
     */
    fix: boolean;
    /**
     * Controls how Crackle generates output files.
     *
     * - 'bundle' rolls up output files into as few chunks as possible
     * - 'preserve' creates separate files for all modules using the original module names as file names
     *
     * @default 'bundle'
     */
    mode: 'bundle' | 'preserve';
  };
  web: {
    /**
     * Path to the App shell component
     *
     * @default 'src/App.tsx'
     */
    appShell: `${string}.tsx`;
    /**
     * Directories that Crackle should search to find .page.tsx files
     *
     * @default ['src']
     */
    pageRoots: string[];
    /**
     * Port for the server used in `start` and `serve`
     *
     * @default 5000
     */
    port: number;
    /**
     * The path that static assets will be served from in production
     *
     * @default  '/'
     */
    publicPath: string;
  };
}

export interface EnhancedConfig extends Config {
  resolveFromRoot: (filePath: string) => string;
}

export type PartialConfig = PartialDeep<Config>;

export const defaultConfig: Config = {
  root: process.cwd(),
  cjs: {},
  esm: {
    reconcileDependencies: {},
  },
  dts: {
    mode: 'bundle',
    options: {
      incremental: false,
      noEmitOnError: false,
    },
  },
  dev: {
    shim: 'require',
  },
  package: {
    clean: true,
    fix: false,
    mode: 'bundle',
  },
  web: {
    appShell: 'src/App.tsx',
    pageRoots: ['src'],
    port: 5000,
    publicPath: '/',
  },
};

const determineAppShell = (
  inlineConfig: PartialConfig | undefined,
  resolveFromRoot: (filePath: string) => string,
) => {
  if (inlineConfig?.web?.appShell) {
    return resolveFromRoot(inlineConfig.web.appShell);
  }

  const defaultAppShellPath = resolveFromRoot(defaultConfig.web.appShell);

  // eslint-disable-next-line no-sync
  if (fs.existsSync(defaultAppShellPath)) {
    return defaultAppShellPath;
  }

  return resolveFromCrackle('./entries/default-app-shell.tsx');
};

export const mergeConfig = <
  C extends PartialConfig,
  O extends PartialConfig,
  M extends PartialConfig,
>(
  config: C,
  override: O,
): M =>
  // defu provides defaults, so we need to swap the order
  defu(override, config) as M;

export const getConfig = async (inlineConfig?: PartialConfig) => {
  const { loadConfig } = await import('c12');
  const { config } = await loadConfig({
    name: 'crackle',
    defaultConfig,
    rcFile: false,
    overrides: inlineConfig as Config,
  });

  // We're going to have a config at this point because we provide a default config
  assert(config);

  const resolveFromRoot = (filePath: string) =>
    path.join(config.root, filePath);

  const appShell = determineAppShell(
    inlineConfig,
    resolveFromRoot,
  ) as EnhancedConfig['web']['appShell'];

  const enhancedConfig: EnhancedConfig = mergeConfig(config, {
    resolveFromRoot,
    web: {
      appShell,
    },
  });

  context.enterWith(enhancedConfig);

  return enhancedConfig;
};

export const context = new AsyncLocalStorage<EnhancedConfig>();

export const getConfigFromContext = () => {
  const config = context.getStore();
  assert(config, 'config not set in context');
  return config;
};
