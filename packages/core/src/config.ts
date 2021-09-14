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
};

export const getConfig = (inlineConfig?: PartialConfig): EnhancedConfig => {
  const config = {
    ...defaultConfig,
    ...inlineConfig,
  };

  return {
    ...config,
    resolveFromRoot: (filePath: string) => path.join(config.root, filePath),
  };
};
