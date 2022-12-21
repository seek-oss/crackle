import path from 'path';

import ensureGitignore from 'ensure-gitignore';

import type { PackageEntryPoint } from '../types';

export const updateGitignore = async (
  packageRoot: string,
  entryPoints: PackageEntryPoint[],
) => {
  const entries = new Set(entryPoints.map((entry) => entry.entryName));
  // TODO: declare these as global constants
  entries.add('dist'); // site build dir
  entries.add('dist-render'); // site renderer build dir

  await ensureGitignore({
    filepath: path.join(packageRoot, '.gitignore'),
    comment: 'managed by crackle',
    patterns: [...entries].map((entry) => `/${entry}`),
  });
};
