/* eslint-disable no-console */
import path from 'path';

import { cssFileFilter } from '@vanilla-extract/integration';
import glob from 'fast-glob';
import externals from 'rollup-plugin-node-externals';
import { build as viteBuild } from 'vite';

import type { PartialConfig, EnhancedConfig } from './config';
import { getConfig } from './config';
import { createPackageReporter } from './reporters/package';
import type { PackageReporter } from './reporters/package';
import typescriptDeclarations from './rollup-plugin-ts-declarations';
import type { ManualChunksFn } from './types';
import { getPackages } from './utils/get-packages';
import { promiseMap } from './utils/promise-map';
import { commonViteConfig } from './vite-config';
import { addVanillaDebugIds } from './vite-plugins/vanilla-extract-debug-ids';

const manualChunks: ManualChunksFn = (id, { getModuleInfo }) => {
  if (
    cssFileFilter.test(id) ||
    getModuleInfo(id)?.importers.some((importer) =>
      cssFileFilter.test(importer),
    )
  ) {
    const [_projectRoot, localPath] = id.split('src/');
    return localPath.replace('/', '-').replace('.ts', '.js');
  }
};

const buildPackage = async (
  config: EnhancedConfig,
  packageName: string,
  dispatchEvent: PackageReporter,
) => {
  dispatchEvent({ type: 'BUILD_STARTED', packageName });

  const entries = await glob(['src/entries/*.ts', 'src/index.ts'], {
    absolute: true,
    cwd: config.root,
  });

  await viteBuild({
    ...commonViteConfig(config),
    plugins: [
      {
        ...externals({
          deps: true,
          packagePath: config.resolveFromRoot('./package.json'),
        }),
        enforce: 'pre',
      },
      typescriptDeclarations({
        directory: config.root,
        name: packageName,
        entrypoints: entries.map((entry) => ({ source: entry })),
      }),
      addVanillaDebugIds,
    ],
    logLevel: 'silent',
    build: {
      emptyOutDir: false,
      minify: false,
      lib: {
        entry: '',
        formats: ['es'],
      },
      outDir: config.root,
      rollupOptions: {
        input: entries,
        treeshake: {
          moduleSideEffects: (id, external) => {
            if (external) {
              return false;
            }

            if (cssFileFilter.test(id)) {
              // Mark .css.ts files as side effect free except for reset and atoms as they
              // need to be hoisted to ensure they are first in the CSS order
              // TODO: make the reset and atom file checks more specific
              return id.includes('reset') || id.includes('atoms');
            }

            return true;
          },
        },
        output: {
          hoistTransitiveImports: false,
          manualChunks,
          chunkFileNames: (chunkInfo) => {
            const chunkPath = `dist/${chunkInfo.name}`;

            return chunkPath.endsWith('.js')
              ? chunkPath
              : `${chunkPath}.chunk.js`;
          },
          entryFileNames: (chunkInfo) =>
            chunkInfo.facadeModuleId?.includes('src/entries')
              ? `${path.basename(chunkInfo.facadeModuleId, '.ts')}/index.js`
              : `dist/${chunkInfo.name}.js`,
        },
      },
    },
  });

  dispatchEvent({ type: 'BUILD_COMPLETED', packageName });
};

export const buildPackages = async (partialConfig?: PartialConfig) => {
  const config = getConfig(partialConfig);

  const dispatchEvent = await createPackageReporter();

  const packages = await getPackages(config);

  await promiseMap(Array.from(packages.values()), (pkg) => {
    const packageConfig = getConfig({ ...config, root: pkg.root });

    return buildPackage(packageConfig, pkg.name, dispatchEvent).catch((err) => {
      dispatchEvent({
        type: 'BUILD_FAILED',
        packageName: pkg.name,
        error: err.loc
          ? {
              ...err,
              location: path.relative(config.root, err.loc.file),
            }
          : err,
      });
    });
  });
};
