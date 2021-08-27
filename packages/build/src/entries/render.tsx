import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import serializeJavascript from 'serialize-javascript';
import { Manifest } from 'vite';

import { serverPageModules } from './serverPageModules';

import type { RenderAllPagesFn } from '../types';

// @ts-expect-error
import AppShell from '__THE_ENTRY';

const pageData: Record<string, string> = {};

for (const [pageName, { routeData }] of Object.entries(serverPageModules)) {
  const { route } = routeData();

  pageData[route] = pageName;
}

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

const generateScriptPreloadTags = (scriptImports: Set<string>) =>
  Array.from(scriptImports).map((scriptImport) => (
    <link rel="modulepreload" href={scriptImport} key={scriptImport} />
  ));

const generateCssTags = (cssImports: Set<string>) =>
  Array.from(cssImports).map((css) => (
    <link rel="stylesheet" href={css} key={css} />
  ));

export const renderAllPages: RenderAllPagesFn = (manifest: Manifest) => {
  let pageModules = [];

  for (const [pageName, pageModule] of Object.entries(serverPageModules)) {
    const { route } = pageModule.routeData();
    const { scriptImports, cssImports, entry } = getImportsFromManifest(
      manifest,
      pageName,
    );

    const html = renderToString(
      <html>
        <head>
          {generateCssTags(cssImports)}
          {generateScriptPreloadTags(scriptImports)}
        </head>

        <body>
          <div id="app">
            <StaticRouter location={route}>
              <AppShell>{React.createElement(pageModule.default)}</AppShell>
            </StaticRouter>
          </div>

          <script
            id="__ELMO_PAGE_DATA"
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: serializeJavascript(pageData, { isJSON: true }),
            }}
          />
          <script src={entry} type="module" />
        </body>
      </html>,
    );

    pageModules.push({ route, html });
  }

  return pageModules;
};
