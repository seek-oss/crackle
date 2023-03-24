import path from 'path';

import dedent from 'dedent';
import resolveFrom from 'resolve-from';

import type { EnhancedConfig } from '../config';
import { logger } from '../entries/logger';
import type { Format, PackageEntryPoint } from '../types';

import {
  createEntryPackageJsons,
  getExports,
  getPackageEntryPoints,
  getPackages,
  hasDefaultExport,
} from './entry-points';
import { writeIfRequired } from './files';
import { promiseMap } from './promise-map';

const getHookLoader = (id: string, format: Format) => {
  const stringify = (value: any) => JSON.stringify(value, null, 2);
  // ! don't change this ! unbuild searches for the string and inserts shims
  const rekwire = 'req' + 'uire';
  const shims = dedent`
    import { createRequire } from "module";

    const ${rekwire} = createRequire(import.meta.url);
  `;

  const hookPath = stringify(resolveFrom('.', 'tsm'));

  const setup = dedent`
    ${format === 'esm' ? shims : ''}

    ${rekwire}(${hookPath});
  `;
  const load = `${rekwire}(${stringify(id)})`;

  return { setup, load };
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
    logger.info(
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

      logger.info(`✅ Created stubs for ${entry.entryName}`);
    });

    await createEntryPackageJsons(entryPaths);
  }
};
