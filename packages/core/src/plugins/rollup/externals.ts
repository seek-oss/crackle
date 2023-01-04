import path from 'path';

import fse from 'fs-extra';
import type { FunctionPluginHooks, Plugin } from 'rollup';
import {
  externals as rollupExternals,
  type ExternalsOptions,
} from 'rollup-plugin-node-externals';
import type { PackageJson } from 'type-fest';

import { logger } from '../../entries/logger';
import type { Format } from '../../types';
import { promiseMap } from '../../utils/promise-map';
import { resolveFrom } from '../../utils/resolve-from';

class PackagesById extends Map<string, PackageJson> {}

const loadPackage = async (packagePath: string): Promise<PackageJson> =>
  fse.readJson(packagePath);

async function loadPackageFrom(from: string, id: string): Promise<PackageJson> {
  try {
    const pkgPath = await resolveFrom(from, `${id}/package.json`);
    const pkg = await loadPackage(pkgPath);
    return pkg;
  } catch (e: any) {
    if (e.code === 'ERR_PACKAGE_PATH_NOT_EXPORTED') {
      // `./package.json` is not exported, but we're not bothered -- it means the package has
      // `exports` and that's all we care about
      logger.info(`Stubbing package.json for ${id}`);
      return { name: id, exports: {} };
    }
    logger.warn(`Could not read package.json for ${id}`);
    return { name: id };
  }
}

async function findDependencies(config: ExternalsOptions) {
  const packagePath = config.packagePath! as string;
  const packageRoot = path.dirname(packagePath);

  const packageJson = await loadPackage(packagePath);
  const externalDeps = [
    ...Object.keys((config.deps && packageJson.dependencies) || {}),
    ...Object.keys((config.devDeps && packageJson.devDependencies) || {}),
    ...Object.keys((config.peerDeps && packageJson.peerDependencies) || {}),
    ...Object.keys((config.optDeps && packageJson.optionalDependencies) || {}),
  ];
  const packagesById = new PackagesById();

  await promiseMap(externalDeps, async (dep) => {
    const depPackage = await loadPackageFrom(packageRoot, dep);
    packagesById.set(dep, depPackage);
  });

  return packagesById;
}

export function externals(packageRoot: string, format: Format = 'esm'): Plugin {
  const packagePath = path.join(packageRoot, 'package.json');
  const config = {
    packagePath,
    deps: true,
    devDeps: false,
    peerDeps: true,
    optDeps: true,
  };
  const plugin = rollupExternals(config);

  let packagesById: PackagesById;

  const patch = async (id: string) => {
    const resolvedId = await resolveFrom(packagePath, id);
    return resolvedId.slice(resolvedId.lastIndexOf(id));
  };

  return {
    ...plugin,

    name: `crackle:patched-${plugin.name}`,

    async buildStart(...args) {
      await Promise.all([
        (plugin as FunctionPluginHooks).buildStart.call(this, ...args),
        findDependencies(config).then((result) => (packagesById = result)),
      ]);
    },

    resolveId: {
      order: 'pre',
      async handler(id, ...rest) {
        // `resolveId` is async in Rollup 3
        const resolved = await (plugin as FunctionPluginHooks).resolveId.call(
          this,
          id,
          ...rest,
        );

        if (
          (typeof resolved === 'boolean' && !resolved) ||
          (typeof resolved === 'object' && resolved?.external)
        ) {
          let packageId = id;
          let isSubpath = false;

          if (!id.startsWith('@') && id.includes('/')) {
            packageId = id.split('/')[0];
            isSubpath = true;
          }
          if (id.startsWith('@') && Number(id.match(/\//g)?.length) > 1) {
            packageId = id.split('/').slice(0, 2).join('/');
            isSubpath = true;
          }

          const packageJson = packagesById.get(packageId);
          const patched = {
            id:
              format === 'esm' && isSubpath && !packageJson?.exports
                ? await patch(id)
                : id,
            external: true,
          };

          return patched;
        }

        return resolved;
      },
    },
  };
}
