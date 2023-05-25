import path from 'path';

import { type Plugin, normalizePath } from 'vite';

import type { EnhancedConfig } from '../../config';
import {
  getPackageEntryPoints,
  getPackages,
  type Packages,
} from '../../utils/entry-points';

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

        // TODO: use getPackageEntryPoints from src/utils/entry-points.ts
        if (source === packageName) {
          return normalizePath(path.join(root, 'src/index.ts'));
        }

        if (!packageEntries.get(packageName)) {
          packageEntries.set(
            packageName,
            (await getPackageEntryPoints(root)).map(
              ({ entryName }) => entryName,
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
