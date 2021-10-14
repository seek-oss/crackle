import type { PartialConfig } from './config';
import { getConfig } from './config';
import type { PackageDiffDetails } from './reporters/fix/app';
import { renderApp } from './reporters/fix/app';
import { getPackageEntryPoints, getPackages } from './utils/get-packages';
import { promiseMap } from './utils/promise-map';
import { fixPackageJson } from './utils/setup-package-json';

export const fix = async (inlineConfig?: PartialConfig) => {
  const config = getConfig(inlineConfig);
  const packages = await getPackages(config);
  const packageList = Array.from(packages.values());

  const packageDiffs: PackageDiffDetails[] = [];

  await promiseMap(packageList, async (pkg) => {
    const entries = await getPackageEntryPoints({
      packageRoot: pkg.root,
    });
    const diffs = await fixPackageJson(pkg.root, entries);
    packageDiffs.push({
      packageName: pkg.name,
      diffs,
    });
  });

  renderApp(packageDiffs);
};
