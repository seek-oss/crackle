import path from 'path';

import { cssFileFilter } from '@vanilla-extract/integration';
import type { OutputOptions } from 'rollup';
import externals from 'rollup-plugin-node-externals';
import { build as viteBuild } from 'vite';

import type { PartialConfig, EnhancedConfig } from './config';
import { getConfig } from './config';
import { typescriptDeclarations } from './plugins/rollup';
import { addVanillaDebugIds } from './plugins/vite';
import { createPackageReporter } from './reporters/package';
import type { PackageReporter } from './reporters/package';
import { basename } from './utils/basename';
import { createEntryPackageJsons } from './utils/create-entry-package-json';
import { getPackageEntryPoints, getPackages } from './utils/get-packages';
import { promiseMap } from './utils/promise-map';
import { validatePackageJson } from './utils/setup-package-json';
import { commonViteConfig } from './vite-config';

type Format = 'esm' | 'cjs';

const extensionForFormat = (format: Format) =>
  ({ esm: 'mjs', cjs: 'cjs' }[format]);

const createRollupOutputOptions = (format: Format): OutputOptions => {
  const extension = extensionForFormat(format);

  return {
    format,
    hoistTransitiveImports: false,
    manualChunks: (id, { getModuleInfo }) => {
      if (
        cssFileFilter.test(id) ||
        getModuleInfo(id)?.importers.some((importer) =>
          cssFileFilter.test(importer),
        )
      ) {
        const [_projectRoot, rawLocalPath] = id.split('src/');
        const localPath = rawLocalPath.replace('/', '-');

        if (cssFileFilter.test(id)) {
          return localPath.replace(cssFileFilter, `.css.${extension}`);
        }

        return localPath.replace(/\.(ts|tsx|js|mjs|cjs|jsx)$/, `.${extension}`);
      }
    },
    chunkFileNames: (chunkInfo) => {
      const chunkPath = `dist/${chunkInfo.name}`;

      return chunkPath.endsWith('.js')
        ? chunkPath
        : `${chunkPath}.chunk.${extension}`;
    },
    entryFileNames: (chunkInfo) =>
      chunkInfo.facadeModuleId?.includes('src/entries')
        ? `${basename(chunkInfo.facadeModuleId)}/index.${extension}`
        : `dist/${chunkInfo.name}.${extension}`,
  };
};

const buildPackage = async (
  config: EnhancedConfig,
  packageName: string,
  dispatchEvent: PackageReporter,
) => {
  dispatchEvent({ type: 'BUILD_STARTED', packageName });

  const entries = await getPackageEntryPoints({
    packageRoot: config.root,
  });

  const packageDiffs = await validatePackageJson(config.root, entries);

  if (packageDiffs.length) {
    dispatchEvent({
      type: 'PACKAGE_JSON_VALIDATION_FAILED',
      packageName,
      diffs: packageDiffs,
    });

    process.exitCode = 1;
    return;
  }

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
        entrypoints: entries.map(({ entryPath }) => ({ source: entryPath })),
      }),
      addVanillaDebugIds,
    ],
    logLevel: 'silent',
    build: {
      emptyOutDir: false,
      minify: false,
      lib: {
        entry: '',
        formats: [],
      },
      outDir: config.root,
      rollupOptions: {
        input: entries.map(({ entryPath }) => entryPath),
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
        output: [
          createRollupOutputOptions('cjs'),
          createRollupOutputOptions('esm'),
        ],
      },
    },
  });

  await createEntryPackageJsons(entries);

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
