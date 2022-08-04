import chalk from 'chalk';
import React from 'react';
import { renderToString } from 'react-dom/server';
import type { Manifest } from 'vite';

import { logger } from '../../src/logger';
import type { RenderAllPagesFn } from '../types';

import { createRouteMap, nodePageModules, Page } from './shared';

const getImportsFromManifest = (manifest: Manifest, pageName: string) => {
  const scriptImports = new Set<string>();
  const cssImports = new Set<string>();

  const getImportsForFilename = (fileName: string | undefined) => {
    if (!fileName) {
      throw new Error('Filename undefined');
    }

    const manifestEntry = manifest[fileName];

    for (const css of manifestEntry.css ?? []) {
      cssImports.add(css);
    }

    scriptImports.add(manifestEntry.file);

    for (const staticImport of manifestEntry.imports ?? []) {
      getImportsForFilename(staticImport);
    }
  };

  const manifestChunks = Object.values(manifest);

  const entry = manifestChunks.find((chunk) => chunk.isEntry)!;

  getImportsForFilename(entry.src);

  if (!entry.dynamicImports) {
    throw new Error('No dynamic imports on entry');
  }

  const pageImport = entry.dynamicImports.find((importFileName) =>
    pageName.includes(importFileName),
  );

  getImportsForFilename(pageImport);

  return { scriptImports, cssImports, entry: entry.file };
};

const generateScriptPreloadTags = (
  scriptImports: Set<string>,
  publicPath: string,
) =>
  Array.from(scriptImports).map((scriptImport) => (
    <link
      rel="modulepreload"
      href={publicPath.concat(scriptImport)}
      key={scriptImport}
    />
  ));

const generateCssTags = (cssImports: Set<string>, publicPath: string) =>
  Array.from(cssImports).map((css) => (
    <link rel="stylesheet" href={publicPath.concat(css)} key={css} />
  ));

export const renderAllPages: RenderAllPagesFn = async (
  manifest,
  publicPath,
) => {
  const totalPages = Object.keys(nodePageModules).length;
  const noun = totalPages === 1 ? 'page' : 'pages';

  logger.info(`🛠  Rendering ${chalk.bold(`${totalPages} ${noun}`)}...`);

  const pageModules = [];

  for (const [pageName, pageModule] of Object.entries(nodePageModules)) {
    const { route } = pageModule.routeData();
    const { scriptImports, cssImports, entry } = getImportsFromManifest(
      manifest,
      pageName,
    );

    const headTags = [
      ...generateCssTags(cssImports, publicPath),
      ...generateScriptPreloadTags(scriptImports, publicPath),
    ];

    const html = renderToString(
      <Page
        path={route}
        headTags={headTags}
        bodyTags={<script src={publicPath.concat(entry)} type="module" />}
        pageData={{ routeMap: createRouteMap() }}
      >
        {React.createElement(pageModule.default)}
      </Page>,
    );

    pageModules.push({ route, html });

    logger.info(`   📜 [${pageModules.length}/${totalPages}] ${chalk.bold(route)}`);
  }

  return pageModules;
};
