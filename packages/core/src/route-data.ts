import { transformFileAsync as babelTransform } from '@babel/core';
import removeExportsPlugin from '@crackle/babel-plugin-remove-exports';
import { build as esbuild } from 'esbuild';
import glob from 'fast-glob';

import { getConfig } from './config';

const routesEntryName = 'ROUTES_ENTRY';
const routeEntryNs = 'ROUTES_ENTRY_NAMESPACE';

const transformWithBabel = async (path: string) => {
  const transformedContents = await babelTransform(path, {
    plugins: [
      removeExportsPlugin,
      '@babel/plugin-syntax-jsx',
      ['@babel/plugin-syntax-typescript', { isTSX: true }],
    ],
    babelrc: false,
  });

  if (!transformedContents?.code) {
    throw new Error(`No result from babel plugin transform of ${path}`);
  }

  return {
    contents: transformedContents.code,
    loader: 'ts',
  } as const;
};

export const getAllRoutes = async () => {
  const { root } = getConfig();

  const pageFiles = await glob(['src/**/*.page.tsx']);

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
            ${pageImports}
            exports.pages = pages;`,
            resolveDir: root,
          }));
        },
      },
    ],
  });

  const [{ text: routesSource }] = result.outputFiles;

  // eslint-disable-next-line no-eval
  return eval(routesSource);
};
