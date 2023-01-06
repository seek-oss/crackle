import path from 'path';

import type { TransformOptions } from 'esbuild';
import { resolveModuleExportNames } from 'mlly';
import resolveFrom from 'resolve-from';

import type { EnhancedConfig } from '../config';
import { logger } from '../entries/logger';
import type { Format, PackageEntryPoint } from '../types';

import {
  createEntryPackageJsons,
  getPackageEntryPoints,
  getPackages,
} from './entry-points';
import { writeIfRequired } from './files';
import { promiseMap } from './promise-map';

const RESOLVE_EXTENSIONS = ['.ts', '.tsx', '.mjs', '.cjs', '.js', '.jsx'];

const getHookLoader = (id: string, format: Format) => {
  const stringify = (value: any) => JSON.stringify(value, null, 2);
  // ! don't change this bullshit ! unbuild searches for the string and mangles our shims
  const rekwire = 'req' + 'uire';
  // ! don't change the formatting ! unbuild checks for this exact string
  const shims = `

// -- Unbuild CommonJS Shims --
import __cjs_url__ from 'url';
import __cjs_path__ from 'path';
import __cjs_mod__ from 'module';
const __filename = __cjs_url__.fileURLToPath(import.meta.url);
const __dirname = __cjs_path__.dirname(__filename);
const require = __cjs_mod__.createRequire(import.meta.url);
`;

  const hookPath = stringify(resolveFrom('.', 'esbuild-runner'));
  const hookOptions = stringify({
    type: 'transform',
    esbuild: {
      target: 'esnext',
    } satisfies TransformOptions,
  });

  const setup = [
    ...(format === 'esm' ? [shims, ''] : []),
    `${rekwire}(${hookPath}).install(${hookOptions});`,
  ].join('\n');
  const load = `${rekwire}(${stringify(id)})`;

  return { setup, load };
};

const getExports = async (filePath: string) => {
  const exports = await resolveModuleExportNames(filePath, {
    extensions: RESOLVE_EXTENSIONS,
  });
  return exports;
};

const hasDefaultExport = async (filePath: string) => {
  const exports = await getExports(filePath);
  return exports.some((specifier) => specifier === 'default');
};

type GetContents = (
  entry: PackageEntryPoint,
  { relativePath }: { relativePath: string },
) => Promise<string | null>;

async function writeFile(
  entry: PackageEntryPoint,
  format: Format,
  getContents: GetContents,
) {
  const outputPath = entry.getOutputPath(format, { from: entry.outputDir });
  const relativePath = path.relative(
    entry.packageDir,
    entry.entryPath.replace(path.extname(entry.entryPath), ''),
  );

  logger.debug(`entryPath: ${entry.entryPath}`);
  logger.debug(`outputDir: ${entry.outputDir}`);
  logger.debug(`outputPath: ${outputPath}`);
  logger.debug(`relativePath: ${relativePath}`);
  logger.debug('---');

  const contents = await getContents(entry, { relativePath });

  if (!contents) return;

  await writeIfRequired({
    dir: entry.outputDir,
    fileName: outputPath,
    contents,
  });
}

const getCjsContents: GetContents = async (entry) => {
  const { setup, load } = getHookLoader(entry.entryPath, 'cjs');
  const contentLines = [setup, '', `module.exports = ${load};`];

  return contentLines.join('\n');
};

const getEsmContents: GetContents = async (entry) => {
  const exports = await getExports(entry.entryPath);

  if (exports.length === 0) {
    logger.error(
      `Could not stub ESM exports for ${
        entry.isDefaultEntry ? 'index' : entry.entryName
      }`,
    );
    return 'export {}';
  }

  const { setup, load } = getHookLoader(entry.entryPath, 'esm');
  const contentLines = [
    setup,
    '',
    `const _mod = ${load};`,
    '',
    ...exports.map((specifier) =>
      specifier === 'default'
        ? `export default _mod.${specifier};`
        : `export const ${specifier} = _mod.${specifier};`,
    ),
  ];

  return contentLines.join('\n');
};

const getDtsContents: GetContents = async (entry, { relativePath }) => {
  const contentLines = [`export * from "${relativePath}";`];
  if (await hasDefaultExport(entry.entryPath)) {
    contentLines.push(`export { default } from "${relativePath}";`);
  }
  return contentLines.join('\n');
};

export const generateDevFiles = async (config: EnhancedConfig) => {
  const packages = await getPackages(config);
  for (const pkg of packages.values()) {
    const entryPaths = await getPackageEntryPoints(pkg.root);

    await promiseMap(entryPaths, async (entry) => {
      await writeFile(entry, 'cjs', getCjsContents);
      await writeFile(entry, 'esm', getEsmContents);
      await writeFile(entry, 'dts', getDtsContents);
    });

    await createEntryPackageJsons(entryPaths);
  }
};
