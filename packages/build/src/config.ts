export interface Config {
  port: number;
  publicPath: string;
}

export type InlineConfig = Partial<Config>;

export const defaultConfig: Config = {
  port: 5000,
  publicPath: '/',
};

export const getConfig = (inlineConfig?: InlineConfig): Config => ({
  ...defaultConfig,
  ...inlineConfig,
});
