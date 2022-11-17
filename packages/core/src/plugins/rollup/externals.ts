import path from 'path';

import type { FunctionPluginHooks, Plugin } from 'rollup';
import {
  externals as rollupExternals,
  type ExternalsOptions,
} from 'rollup-plugin-node-externals';
import type { PackageJson } from 'type-fest';

import type { Format } from '../../types';
import { promiseMap } from '../../utils/promise-map';
import { resolveFrom } from '../../utils/resolve-from';

class PackagesById extends Map<string, PackageJson> {}

async function findDependencies(config: ExternalsOptions) {
  const packagePath = config.packagePath! as string;

  const loadPackage = (id: string): PackageJson => require(id);

  const packageJson = loadPackage(packagePath);
  const externalDeps = [
    ...Object.keys((config.deps && packageJson.dependencies) || {}),
    ...Object.keys((config.devDeps && packageJson.devDependencies) || {}),
    ...Object.keys((config.peerDeps && packageJson.peerDependencies) || {}),
    ...Object.keys((config.optDeps && packageJson.optionalDependencies) || {}),
  ];
  const packagesById = new PackagesById();

  await promiseMap(externalDeps, async (dep) => {
    const depPackagePath = await resolveFrom(
      packagePath,
      `${dep}/package.json`,
    );
    const depPackage = loadPackage(depPackagePath);
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

  const patch = (id: string) => {
    const resolvedId = require.resolve(id);
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
        const resolved = (plugin as FunctionPluginHooks).resolveId.call(
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
                ? patch(id)
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
