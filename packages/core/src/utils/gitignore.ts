import path from 'path';

import ensureGitignore from 'ensure-gitignore';

import { siteBuild } from '../constants';
import type { PackageEntryPoint } from '../types';

export const updateGitignore = async (
  packageRoot: string,
  entryPoints: PackageEntryPoint[],
) => {
  const entryNames = new Set(entryPoints.map((entry) => entry.entryName));

  entryNames.add(siteBuild.outDir);
  entryNames.add(siteBuild.rendererDir);

  await ensureGitignore({
    filepath: path.join(packageRoot, '.gitignore'),
    comment: 'managed by crackle',
    patterns: Array.from(entryNames).map((entryName) => `/${entryName}`),
  });
};
