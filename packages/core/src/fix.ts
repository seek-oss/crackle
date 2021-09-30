import type { PartialConfig } from './config';
import { getConfig } from './config';
import { getPackageEntryPoints, getPackages } from './utils/get-packages';
import { promiseMap } from './utils/promise-map';
import { fixPackageJson } from './utils/setup-package-json';

export const fix = async (inlineConfig?: PartialConfig) => {
  const config = getConfig(inlineConfig);
  const packages = await getPackages(config);
  const packageList = Array.from(packages.values());

  await promiseMap(packageList, async (pkg) => {
    const entries = await getPackageEntryPoints({
      packageRoot: pkg.root,
      absolute: true,
    });
    const diffs = await fixPackageJson(pkg.root, entries);
    // eslint-disable-next-line no-console
    console.log('diffs: ', diffs);
  });
};
