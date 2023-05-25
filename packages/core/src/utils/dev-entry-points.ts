import { AsyncLocalStorage } from 'async_hooks';
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

const configContext = new AsyncLocalStorage<EnhancedConfig>();

const getHookLoader = (entry: PackageEntryPoint, format: Format) => {
  const stringifyRelative = (p: string) =>
    JSON.stringify(path.relative(entry.getOutputPath(format), p));

  const config = configContext.getStore();
  // ! don't change this ! unbuild searches for the string and inserts its own shims
  const rekwire = 'req' + 'uire';

  let setup: string | undefined;
  if (!config?.webpack) {
    const shims = dedent`
    import { createRequire } from "module";

    const ${rekwire} = createRequire(import.meta.url);
  `;

    const hookPath = resolveFrom('.', 'tsm');

    setup = dedent`
    ${format === 'esm' ? shims : ''}

    ${rekwire}(${stringifyRelative(hookPath)});
  `;
  }
  const load = `${rekwire}(${stringifyRelative(entry.entryPath)})`;

  return {
    setup,
    load,
  };
};

type GetContents = (
  entry: PackageEntryPoint,
  { relativePath }: { relativePath: string },
) => Promise<string>;

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

  logger.debug(dedent`
    [writeFile ${format}]
    entryPath: ${entry.entryPath}
    outputDir: ${entry.outputDir}
    outputPath: ${outputPath}
    relativePath: ${relativePath}
  `);

  const contents = await getContents(entry, { relativePath });

  await writeIfRequired({
    dir: entry.outputDir,
    fileName: outputPath,
    contents: `${contents}\n`,
  });
}

const getCjsContents: GetContents = async (entry) => {
  const { setup, load } = getHookLoader(entry, 'cjs');
  const contentLines = [
    ...(setup ? [setup, ''] : []),
    `module.exports = ${load};`,
  ];

  return contentLines.join('\n');
};

const getEsmContents: GetContents = async (entry) => {
  const { setup, load } = getHookLoader(entry, 'esm');
  const exports = await getExports(entry.entryPath);

  let contentLines: string[] = setup ? [setup, ''] : [];

  if (exports.length === 0) {
    logger.info(
      `Could not find ESM exports for ${
        entry.isDefaultEntry ? 'index' : entry.entryName
      }`,
    );
    return [...contentLines, 'export {}'].join('\n');
  }

  contentLines = [
    ...contentLines,
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

  configContext.enterWith(config);

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
