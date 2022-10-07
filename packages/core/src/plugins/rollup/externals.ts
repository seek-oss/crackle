/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';

import readPackageUp from 'read-pkg-up';
import type { FunctionPluginHooks, Plugin } from 'rollup';
import rollupExternals, {
  type ExternalsOptions,
} from 'rollup-plugin-node-externals';
import type { PackageJson } from 'type-fest';

import type { Format } from '../../types';
import { promiseMap } from '../../utils/promise-map';
import { resolveFrom } from '../../utils/resolve-from';

function patch(id: string) {
  const resolvedId = require.resolve(id);
  return resolvedId.slice(resolvedId.lastIndexOf(id));
}

async function findDependencies(config: ExternalsOptions) {
  const packagePath = config.packagePath! as string;
  const pkg = require(packagePath) as PackageJson;
  const externalDeps = [
    ...Object.keys((config.deps && pkg.dependencies) || {}),
    ...Object.keys((config.devDeps && pkg.devDependencies) || {}),
    ...Object.keys((config.peerDeps && pkg.peerDependencies) || {}),
    ...Object.keys((config.optDeps && pkg.optionalDependencies) || {}),
  ];
  const pkgsById = new Map<string, PackageJson>();

  await promiseMap(externalDeps, async (dep) => {
    const { packageJson } = (await readPackageUp({
      cwd: resolveFrom(packagePath, `${dep}/package.json`),
    }))!;
    pkgsById.set(dep, packageJson);
  });

  return pkgsById;
}

export const externals = (
  packageRoot: string,
  format: Format = 'esm',
): Plugin => {
  const packagePath = path.join(packageRoot, 'package.json');
  const config = {
    packagePath,
    deps: true,
    devDeps: false,
    peerDeps: true,
    optDeps: true,
  };
  const plugin = rollupExternals(config);

  let pkgsById: Map<string, PackageJson>;

  return {
    ...plugin,
    async buildStart(options) {
      await Promise.all([
        findDependencies(config).then((result) => (pkgsById = result)),
        (plugin as FunctionPluginHooks).buildStart.call(this, options),
      ]);
    },
    async resolveId(source, importer, options) {
      const resolved = (plugin as FunctionPluginHooks).resolveId.call(
        this,
        source,
        importer,
        options,
      );

      if (
        (typeof resolved === 'boolean' && !resolved) ||
        (typeof resolved === 'object' && resolved?.external)
      ) {
        let id = source;
        let isSubpath = false;

        if (!source.startsWith('@') && source.includes('/')) {
          id = source.split('/')[0];
          isSubpath = true;
        }
        if (source.startsWith('@') && Number(source.match(/\//g)?.length) > 1) {
          id = source.split('/').slice(0, 2).join('/');
          isSubpath = true;
        }

        const pkg = pkgsById.get(id);
        const patched = {
          id:
            format === 'esm' && isSubpath && !pkg?.exports
              ? patch(source)
              : source,
          external: true,
        };

        return patched;
      }

      return resolved;
    },
  };
};
