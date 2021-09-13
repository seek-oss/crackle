import path from 'path';

export interface CompleteConfig {
  port: number;
  publicPath: string;
  root: string;
}

export interface Config extends CompleteConfig {
  resolveFromRoot: (filePath: string) => string;
}

export type PartialConfig = Partial<CompleteConfig>;

export const defaultConfig: CompleteConfig = {
  port: 5000,
  publicPath: '/',
  root: process.cwd(),
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
