import { build as esbuild } from 'esbuild';
import glob from 'fast-glob';

const routesEntryName = 'ROUTES_ENTRY';
const routeEntryNs = 'ROUTES_ENTRY_NAMESPACE';

export const getAllRoutes = async () => {
  const root = process.cwd();

  const pageFiles = await glob(['src/pages/*.tsx', 'src/**/*.page.tsx']);

  const pageImports = pageFiles
    .map(
      (pageFile, index) =>
        `import { routeData as page${index} } from './${pageFile}'; pages.push(page${index}());`,
    )
    .join('\n');

  const result = await esbuild({
    entryPoints: [routesEntryName],
    bundle: true,
    write: false,
    outdir: 'out',
    target: ['node14'],
    format: 'cjs',
    external: ['braid-design-system'],
    plugins: [
      {
        name: 'routes-virtual-entry',
        setup(build) {
          const filter = new RegExp(routesEntryName);
          build.onResolve({ filter }, (args) => ({
            path: args.path,
            namespace: routeEntryNs,
          }));

          build.onLoad({ filter, namespace: routeEntryNs }, () => ({
            contents: `
              const pages = [];
              ${pageImports}

              console.log('pages', pages);
            `,
            resolveDir: root,
          }));
        },
      },
    ],
  });

  const [{ text: routesSource }] = result.outputFiles;

  console.log('routesSource', routesSource);

  eval(routesSource);
};
