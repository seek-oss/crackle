import type { PartialConfig } from '../config';
import { getConfig } from '../config';
import { generateDevFiles } from '../utils/dev-entry-points';

export const dev = async (inlineConfig?: PartialConfig) => {
  const config = getConfig(inlineConfig);
  await generateDevFiles(config);
};
