import { type PartialConfig, getConfig, context } from '../config';
import { generateDevFiles } from '../utils/dev-entry-points';

export const dev = async (inlineConfig?: PartialConfig) => {
  const config = await getConfig(inlineConfig);

  await context.run(config, async () => {
    await generateDevFiles();
  });
};
