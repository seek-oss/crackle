import path from 'path';

import glob from 'fast-glob';
import type { Plugin } from 'vite';
import { normalizePath } from 'vite';

import type { EnhancedConfig } from '../config';
import { getPackages } from '../utils/get-packages';
import type { Packages } from '../utils/get-packages';

export const internalPackageResolution = (config: EnhancedConfig): Plugin => {
  let packages: Packages | undefined;
  let packageMatchRegex: RegExp | undefined;

  return {
    enforce: 'pre',
    name: 'crackle:internal-package-resolution',
    async buildStart() {
      packages = await getPackages(config);

      packageMatchRegex = new RegExp(
        `^${Array.from(packages.keys()).join('|')}/?`,
      );
    },
    async resolveId(source) {
      const packageMatchResult = packageMatchRegex?.exec(source);

      if (packageMatchResult) {
        const packageName = packageMatchResult[0].replace(/\/$/, '');
        const { root } = packages?.get(packageName) ?? {};

        if (!root) {
          throw new Error(`Could not resolve package root: ${packageName}`);
        }

        if (source === packageName) {
          return normalizePath(path.join(root, 'src/index.ts'));
        }

        const entries = (
          await glob(['src/entries/*.ts'], {
            cwd: root,
          })
        ).map((entryPath) => path.basename(entryPath, '.ts'));

        for (const entry of entries) {
          if (source === `${packageName}/${entry}`) {
            return normalizePath(path.join(root, 'src/entries', `${entry}.ts`));
          }
        }
      }

      return undefined;
    },
  };
};
