import chalk from 'chalk';

import type { PartialConfig } from './config';
import { getConfig } from './config';
import { logger } from './logger';
import {
  cleanPackageEntryPoints,
  getPackageEntryPoints,
} from './utils/entry-points';

export const clean = async (inlineConfig?: PartialConfig) => {
  const config = getConfig(inlineConfig);

  const entries = await getPackageEntryPoints(config.root);

  await cleanPackageEntryPoints(entries, (entryPoint) => {
    logger.info(`🧹 Cleaning ${chalk.bold(entryPoint.entryName)}`);
  });
};