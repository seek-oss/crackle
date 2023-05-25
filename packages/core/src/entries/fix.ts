import { type PartialConfig, getConfig } from '../config';
import { type PackageDiffDetails, renderApp } from '../reporters/fix';
import { getPackageEntryPoints, getPackages } from '../utils/entry-points';
import { updateGitignore } from '../utils/gitignore';
import { promiseMap } from '../utils/promise-map';
import { fixPackageJson } from '../utils/setup-package-json';

export const fix = async (inlineConfig?: PartialConfig) => {
  const config = getConfig(inlineConfig);
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

  renderApp(packageDiffs);
};
