import type { PartialConfig } from '../config';
import { getConfig } from '../config';
import { generateDevDeclarationFiles } from '../utils/dev-declaration-files';

export const dev = async (inlineConfig?: PartialConfig) => {
  const config = getConfig(inlineConfig);
  await generateDevDeclarationFiles(config);
};
