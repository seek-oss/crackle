import path from 'path';

import type { Plugin } from 'vite';
import { normalizePath } from 'vite';

import type { EnhancedConfig } from '../../config';
import { basename } from '../../utils/basename';
import { getPackageEntryPoints, getPackages } from '../../utils/get-packages';
import type { Packages } from '../../utils/get-packages';

export const internalPackageResolution = (config: EnhancedConfig): Plugin => {
  let packages: Packages | undefined;
  let packageMatchRegex: RegExp | undefined;
  // cache package entries so we don't have to hit the file system on every request
  const packageEntries = new Map<string, string[]>();

  return {
    enforce: 'pre',
    name: 'crackle:internal-package-resolution',
    async buildStart() {
      packages = await getPackages(config);

      packageMatchRegex = new RegExp(
        `^${Array.from(packages.keys()).join('|')}`,
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

        if (!packageEntries.get(packageName)) {
          packageEntries.set(
            packageName,
            (await getPackageEntryPoints({ packageRoot: root })).map(
              ({ entryPath }) => basename(entryPath),
            ),
          );
        }

        const entries = packageEntries.get(packageName)!;

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
