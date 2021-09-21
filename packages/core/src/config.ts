import fs from 'fs';
import path from 'path';

export interface Config {
  /**
   * Port for the server used in `start` and `serve`.
   * @default 5000
   */
  port: number;

  /**
   * The path that static assets will be served from in production.
   * @default  '/'
   */
  publicPath: string;

  /**
   * The root of the application that all paths are resolved relative to.
   * @default process.cwd
   */
  root: string;

  /**
   * Directories that crackle should search to find .page.tsx files.
   * @default ['src']
   */
  pageRoots: string[];

  /**
   * Path to the App shell component
   * @default 'src/App.tsx'
   */
  appShell: `${string}.tsx`;
}

export interface EnhancedConfig extends Config {
  resolveFromRoot: (filePath: string) => string;
}

export type PartialConfig = Partial<Config>;

export const defaultConfig: Config = {
  port: 5000,
  publicPath: '/',
  root: process.cwd(),
  pageRoots: ['src'],
  appShell: 'src/App.tsx',
};

const determineAppShell = (
  inlineConfig: PartialConfig | undefined,
  resolveFromRoot: (filePath: string) => string,
) => {
  if (inlineConfig?.appShell) {
    return resolveFromRoot(inlineConfig.appShell);
  }

  const defaultAppShellPath = resolveFromRoot(defaultConfig.appShell);

  // eslint-disable-next-line no-sync
  if (fs.existsSync(defaultAppShellPath)) {
    return defaultAppShellPath;
  }

  return require.resolve('../entries/default-app-shell.tsx');
};

export const getConfig = (inlineConfig?: PartialConfig): EnhancedConfig => {
  const config = {
    ...defaultConfig,
    ...inlineConfig,
  };

  const resolveFromRoot = (filePath: string) =>
    path.join(config.root, filePath);

  const appShell = determineAppShell(
    inlineConfig,
    resolveFromRoot,
  ) as `${string}.tsx`;

  return {
    ...config,
    appShell,
    resolveFromRoot,
  };
};
