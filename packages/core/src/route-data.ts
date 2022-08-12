import { transformFileAsync as babelTransform } from '@babel/core';
import type { RouteData } from '@crackle/router';
import { build as esbuild } from 'esbuild';
import _eval from 'eval';
import glob from 'fast-glob';

import type { PartialConfig } from './config';
import { getConfig } from './config';

const routesEntryName = 'ROUTES_ENTRY';
const routeEntryNs = 'ROUTES_ENTRY_NAMESPACE';

const transformWithBabel = async (path: string) => {
  const transformedContents = await babelTransform(path, {
    plugins: [
      [
        '@crackle/babel-plugin-remove-exports',
        { retainExports: ['routeData'] },
      ],
      '@babel/plugin-syntax-jsx',
      ['@babel/plugin-syntax-typescript', { isTSX: true }],
    ],
    babelrc: false,
    configFile: false,
  });

  if (!transformedContents?.code) {
    throw new Error(`No result from babel plugin transform of ${path}`);
  }

  return {
    contents: transformedContents.code,
    loader: 'ts',
  } as const;
};

export const getAllRoutes = async (inlineConfig?: PartialConfig) => {
  const { root, pageRoots } = getConfig(inlineConfig);

  const pageFiles = await glob(
    pageRoots.map((pageRoot) => `${pageRoot}/**/*.page.tsx`),
    { cwd: root },
  );

  const pageImports = pageFiles
    .map(
      (pageFile, index) =>
        `import { routeData as page${index} } from './${pageFile}'; pages.push({ path: '${pageFile}', ...page${index}() });`,
    )
    .join('\n');

  const result = await esbuild({
    entryPoints: [routesEntryName],
    bundle: true,
    write: false,
    outdir: 'out',
    target: ['node14'],
    format: 'cjs',
    plugins: [
      {
        name: 'routes-virtual-entry',
        setup(build) {
          const filter = new RegExp(routesEntryName);
          build.onResolve({ filter }, (args) => ({
            path: args.path,
            namespace: routeEntryNs,
          }));

          build.onLoad({ filter: new RegExp('.*.page.tsx$') }, ({ path }) =>
            transformWithBabel(path),
          );

          build.onLoad(
            { filter: new RegExp('.*src/pages/.*.tsx$') },
            ({ path }) => transformWithBabel(path),
          );

          build.onLoad({ filter, namespace: routeEntryNs }, () => ({
            contents: `
            const pages = [];
            ${pageImports};
            module.exports = pages;`,
            resolveDir: root,
          }));
        },
      },
    ],
  });

  const [{ text: routesSource }] = result.outputFiles;

  return _eval(routesSource) as RouteData<any>;
};
