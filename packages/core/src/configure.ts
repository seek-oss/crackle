import path from 'path';

import ensureGitignore from 'ensure-gitignore';

import type { PartialConfig } from './config';
import { getConfig } from './config';
import type { Package } from './utils/get-packages';
import { getPackageEntryPoints, getPackages } from './utils/get-packages';
import { promiseMap } from './utils/promise-map';

const ignoresForPackage = async (pkg: Package, ignoreFiles: string[]) => {
  const entries = await getPackageEntryPoints({ packageRoot: pkg.root });

  const patterns = entries.map((entry) =>
    entry.isDefaultEntry
      ? 'dist'
      : path.join('/', path.basename(entry.entryPath, '.ts')),
  );

  return promiseMap(ignoreFiles, (ignoreFile) =>
    ensureGitignore({
      patterns,
      filepath: path.join(pkg.root, ignoreFile),
      comment: 'Managed by crackle',
    }),
  );
};

export const configure = async (inlineConfig?: PartialConfig) => {
  const config = getConfig(inlineConfig);

  const packages = await getPackages(config);

  const ignoreFiles = ['.gitignore', '.eslintignore'];

  await promiseMap(Array.from(packages.values()), (pkg) =>
    ignoresForPackage(pkg, ignoreFiles),
  );
};
