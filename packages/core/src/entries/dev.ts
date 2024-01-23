import { type PartialConfig, getConfig } from '../config';
import { generateDevFiles } from '../utils/dev-entry-points';

export const dev = async (inlineConfig?: PartialConfig) => {
  await getConfig(inlineConfig);

  await generateDevFiles();
};
