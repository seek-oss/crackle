import path from 'path';

import fse from 'fs-extra';
import type { FunctionPluginHooks, Plugin } from 'rollup';
import rollupExternals, {
  type ExternalsOptions,
} from 'rollup-plugin-node-externals';
import semverIntersects from 'semver/ranges/intersects.js';

import type { EnhancedConfig } from '../../config';
import { logger } from '../../entries/logger';
import type { PackageJson, Format } from '../../types';
import { memoize } from '../../utils/memoize';
import { promiseMap } from '../../utils/promise-map';
import { resolveFrom } from '../../utils/resolve-from';

class PackagesById extends Map<string, PackageJson> {}

const ABSOLUTE_OR_RELATIVE = new RegExp('^(/|./|../)');

const localLogger = logger.withDefaults({ tag: 'externals' });

const logDebugOnce = memoize((message: string) => {
  localLogger.debug(message);
  return message;
});

const loadPackage = async (packagePath: string): Promise<PackageJson> =>
  fse.readJson(packagePath);

const parseImportSpecifier = memoize((id: string) => {
  let scope: string | undefined;
  let scopedPackageId = id;
  let packageId = id;
  let isSubpath = false;

  if (!id.startsWith('@') && id.includes('/')) {
    isSubpath = true;
    packageId = id.split('/')[0];
    scopedPackageId = packageId;
  }
  if (id.startsWith('@') && Number(id.match(/\//g)?.length) > 1) {
    isSubpath = true;
    [scope, packageId] = id.split('/');
    scopedPackageId = packageId;
    packageId = `${scope}/${packageId}`;
  }

  return {
    isSubpath,
    packageId, // full package id, including the scope
    scope,
    scopedPackageId, // package id without the scope
  };
});

async function loadPackageFrom(from: string, id: string): Promise<PackageJson> {
  try {
    const pkgPath = await resolveFrom(from, `${id}/package.json`);
    const pkg = await loadPackage(pkgPath);
    return pkg;
  } catch (e: any) {
    if (e.code === 'ERR_PACKAGE_PATH_NOT_EXPORTED') {
      // `./package.json` is not exported, but we're not bothered -- it means the package has
      // `exports` and that's all we care about
      localLogger.debug(`Stubbing package.json for ${id}`);
      return { name: id, exports: {} };
    }
    logger.warn(`Could not read package.json for ${id}`);
    return { name: id };
  }
}

async function findDependencies(options: ExternalsOptions) {
  const packagePath = options.packagePath! as string;
  const packageRoot = path.dirname(packagePath);

  const packageJson = await loadPackage(packagePath);
  const externalDeps = Object.keys({
    ...(options.deps ? packageJson.dependencies : undefined),
    ...(options.devDeps ? packageJson.devDependencies : undefined),
    ...(options.peerDeps ? packageJson.peerDependencies : undefined),
    ...(options.optDeps ? packageJson.optionalDependencies : undefined),
  });
  const packagesById = new PackagesById();

  await promiseMap(externalDeps, async (dep) => {
    const depPackage = await loadPackageFrom(packageRoot, dep);
    packagesById.set(dep, depPackage);
  });

  return packagesById;
}

export function externals(
  config: EnhancedConfig,
  format?: Format,
  forceExternal?: RegExp,
): Plugin {
  const packageRoot = config.root;
  const packagePath = path.join(packageRoot, 'package.json');
  // eslint-disable-next-line no-sync
  const rootPackageJson = fse.readJsonSync(packagePath) as PackageJson;
  const options = {
    packagePath,
    deps: true,
    devDeps: false,
    peerDeps: true,
    optDeps: true,
  } satisfies ExternalsOptions;
  const plugin = rollupExternals(options);

  let packagesById: PackagesById;

  const patchImportSpecifier = memoize(async (id: string) => {
    const resolvedId = await resolveFrom(packagePath, id);
    const { scope, scopedPackageId } = parseImportSpecifier(id);
    return (
      (scope ? `${scope}/` : '') +
      resolvedId.slice(resolvedId.lastIndexOf(scopedPackageId))
    );
  });
  const shouldReconcilePackage = memoize(
    (packageId: string) =>
      config.esm.reconcileDependencies[packageId] &&
      semverIntersects(
        rootPackageJson.peerDependencies?.[packageId] ?? '*',
        config.esm.reconcileDependencies[packageId],
      ),
  );

  return {
    ...plugin,

    name: `crackle:patched-${plugin.name}`,

    async buildStart(...args) {
      await Promise.all([
        (plugin as FunctionPluginHooks).buildStart.call(this, ...args),
        findDependencies(options).then((result) => (packagesById = result)),
      ]);
    },

    resolveId: {
      order: 'pre',
      async handler(id, importer, hookOptions) {
        const resolved = await (plugin as FunctionPluginHooks).resolveId.call(
          this,
          id,
          importer,
          hookOptions,
        );

        if (
          (typeof resolved === 'boolean' && !resolved) ||
          (typeof resolved === 'object' && resolved?.external)
        ) {
          logDebugOnce(`External dependency: ${id}`);

          const { packageId, isSubpath } = parseImportSpecifier(id);
          const packageJson = packagesById.get(packageId);
          const patched = {
            id:
              format === 'esm' &&
              isSubpath &&
              (!packageJson?.exports || shouldReconcilePackage(packageId))
                ? await patchImportSpecifier(id)
                : id,
            external: true,
          };

          return patched;
        }

        if (forceExternal) {
          const resolvedByRollup = await this.resolve(id, importer, {
            skipSelf: true,
            ...hookOptions,
          });
          if (resolvedByRollup && forceExternal.test(resolvedByRollup.id)) {
            return {
              id: resolvedByRollup.id,
              external: true,
            };
          }
        }

        if (!id.match(ABSOLUTE_OR_RELATIVE)) {
          logDebugOnce(`Internalized dependency ${id}`);
        }

        return resolved;
      },
    },
  };
}
