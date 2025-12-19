import { type PartialConfig, getConfig, context } from '../config';
import { type PackageDiffDetails, renderDiffs } from '../reporters/fix';
import { getPackageEntryPoints, getPackages } from '../utils/entry-points';
import { updateGitignore } from '../utils/gitignore';
import { promiseMap } from '../utils/promise-map';
import { fixPackageJson } from '../utils/setup-package-json';

import { logger } from './logger';

export const fix = async (inlineConfig?: PartialConfig) => {
  const config = await getConfig(inlineConfig);

  await context.run(config, async () => {
    const packages = await getPackages(config);
    const packageList = Array.from(packages.values());

    const packageDiffs: PackageDiffDetails[] = [];

    await promiseMap(packageList, async (pkg) => {
      const entries = await getPackageEntryPoints(pkg.root);
      const diffs = await fixPackageJson(pkg.root, entries);
      packageDiffs.push({
        packageName: pkg.name,
        diffs,
      });

      await updateGitignore(pkg.root, entries);
    });

    if (packageDiffs.length === 0) {
      logger.info('Nothing to fix');
    } else {
      logger.info(renderDiffs(packageDiffs));
      logger.success('`crackle fix` completed successfully');
    }
  });
};
