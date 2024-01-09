import { type PartialConfig, getConfig } from '../config';
import {
  cleanPackageEntryPoints,
  getPackageEntryPoints,
} from '../utils/entry-points';

import { logger } from './logger';

export const clean = async (inlineConfig?: PartialConfig) => {
  const config = getConfig(inlineConfig);

  const entries = await getPackageEntryPoints(config.root);

  await cleanPackageEntryPoints(entries, (entryPoint) => {
    logger.info(`Cleaning \`${entryPoint.entryName}\``);
  });

  logger.success('Done!');
};
