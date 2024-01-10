import fs from 'fs/promises';
import path from 'path';
import process from 'process';

import { mockAdapter, setAdapter } from '@vanilla-extract/css/adapter';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import builtinModules from 'builtin-modules';
import fse from 'fs-extra';
import type { RollupOutput } from 'rollup';
import type { UserConfig as ViteConfig, Manifest } from 'vite';

import type { RenderAllPagesFn } from '../../entries/types';
import { type PartialConfig, getConfig } from '../config';
import { clientEntry, siteBuild } from '../constants';
import { internalPackageResolution } from '../plugins/vite/internal-package-resolution';
import { addPageRoots } from '../plugins/vite/page-roots';
import { stripRouteData } from '../plugins/vite/strip-route-data';
import {
  extractDependencyGraph,
  getSsrExternalsForCompiledDependency,
} from '../utils/dependency-graph';
import { promiseMap } from '../utils/promise-map';
import { resolveFromCrackle } from '../utils/resolve-from';
import { commonViteConfig } from '../vite-config';

import { logger } from './logger';

export const build = async (inlineConfig?: PartialConfig) => {
  const config = await getConfig(inlineConfig);
  const depGraph = await extractDependencyGraph(config.root);
  const ssrExternals = getSsrExternalsForCompiledDependency(
    '@vanilla-extract/css',
    depGraph,
  );

  const commonBuildConfig: ViteConfig = {
    ...commonViteConfig(config),
    plugins: [
      stripRouteData(),
      react(),
      vanillaExtractPlugin({ identifiers: 'short' }),
      addPageRoots(config),
      // Crackle pretends it has knowledge of the monorepo at this stage
      internalPackageResolution({
        ...config,
        root: config.resolveFromRoot('..'),
      }),
    ],
    logLevel: 'silent',
    ssr: {
      external: [...builtinModules],
      noExternal: ssrExternals.noExternal,
    },
  };

  const { build: viteBuild } = await import('vite');

  const manifestPath = 'manifest.json';

  try {
    logger.start('Building `client`...');
    await viteBuild({
      ...commonBuildConfig,
      base: config.web.publicPath,
      build: {
        manifest: manifestPath,
        rollupOptions: {
          input: clientEntry,
        },
      },
    });

    logger.success('Successfully built `client`!\n');
  } catch (error: any) {
    logger.error('Build failed for `client`:', error);
    process.exitCode = 1;
    return;
  }

  const outDir = config.resolveFromRoot(siteBuild.outDir);
  const rendererDir = config.resolveFromRoot(siteBuild.rendererDir);

  try {
    logger.start('Building `renderer`...');

    const {
      output: [rendererOutput],
    } = (await viteBuild({
      ...commonBuildConfig,
      mode: 'development',
      base: config.web.publicPath,
      build: {
        minify: false,
        ssr: true,
        rollupOptions: {
          input: resolveFromCrackle('./entries/render/build.tsx'),
        },
        outDir: rendererDir,
      },
    })) as RollupOutput;

    logger.success('Successfully built `renderer`!\n');

    setAdapter(mockAdapter);

    // TODO: use vite-node instead
    const { renderAllPages } = (await import(
      `${rendererDir}/${rendererOutput.fileName}`
    )) as {
      renderAllPages: RenderAllPagesFn;
    };
    const manifest = (await fse.readJson(
      `${outDir}/${manifestPath}`,
    )) as Manifest;
    const pages = await renderAllPages(manifest, config.web.publicPath);

    await promiseMap(pages, async ({ route, html }) => {
      const routeDir = path.join(outDir, route);
      await fs.mkdir(routeDir, { recursive: true });
      return fs.writeFile(`${routeDir}/index.html`, html);
    });

    logger.success('Rendered all pages');
  } catch (error: any) {
    logger.error(error);
    process.exitCode = 1;
  } finally {
    await fs.rm(rendererDir, {
      recursive: true,
      force: true,
    });
  }
};
