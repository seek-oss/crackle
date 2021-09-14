import path from 'path';

export interface CompleteConfig {
  port: number;
  publicPath: string;
  root: string;
  /**
   * Directories that crackle should search to find .page.tsx files.
   * @default {['src']}
   */
  pageRoots: string[];
}

export interface Config extends CompleteConfig {
  resolveFromRoot: (filePath: string) => string;
}

export type PartialConfig = Partial<CompleteConfig>;

export const defaultConfig: CompleteConfig = {
  port: 5000,
  publicPath: '/',
  root: process.cwd(),
  pageRoots: ['src'],
};

export const getConfig = (inlineConfig?: PartialConfig): Config => {
  const config = {
    ...defaultConfig,
    ...inlineConfig,
  };

  return {
    ...config,
    resolveFromRoot: (filePath: string) => path.join(config.root, filePath),
  };
};
