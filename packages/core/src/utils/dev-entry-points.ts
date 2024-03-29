import path from 'path';

import dedent from 'dedent';

import { getConfigFromContext } from '../config';
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
import { resolveFrom } from './resolve-from';

const localLogger = logger.withDefaults({ tag: 'dev' });

const getReadableEntryName = (entry: PackageEntryPoint) =>
  entry.isDefaultEntry ? 'index' : entry.entryName;

interface HookLoader {
  setup: string;
  load: (importName: string) => string;
}
const getHookLoader = async (
  entry: PackageEntryPoint,
  format: Format,
): Promise<HookLoader> => {
  const stringifyRelative = (p: string) =>
    JSON.stringify(path.relative(entry.packageDir, p));

  const config = getConfigFromContext();

  // ! don't change this ! unbuild searches for the string and inserts its own shims
  const rekwire = 'req' + 'uire';

  let setup: HookLoader['setup'] = '';
  let load: HookLoader['load'] = (mod: string) =>
    format === 'esm'
      ? `import * as ${mod} from ${stringifyRelative(entry.entryPath)};`
      : `const ${mod} = ${rekwire}(${stringifyRelative(entry.entryPath)});`;

  if (config.dev.shim === 'none') {
    return { setup, load };
  }

  if (config.dev.shim === 'require') {
    const shims = dedent`
      import { createRequire } from "module";

      const ${rekwire} = createRequire(import.meta.url);
    `;

    const hookPath = await resolveFrom('.', 'tsx/cjs');

    setup = dedent`
      ${format === 'esm' ? shims : ''}

      ${rekwire}(${stringifyRelative(hookPath)});
    `;
    load = (mod) =>
      `const ${mod} = ${rekwire}(${stringifyRelative(entry.entryPath)});`;
  }

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

  localLogger.debug(dedent`
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
  const { setup, load } = await getHookLoader(entry, 'cjs');

  return dedent`
    ${setup}

    ${load('_mod')}

    module.exports = _mod;
  `;
};

const getEsmContents: GetContents = async (entry) => {
  const { setup, load } = await getHookLoader(entry, 'esm');
  const exports = await getExports(entry.entryPath);

  if (exports.length === 0) {
    logger.info(
      `Could not find ESM exports for \`${getReadableEntryName(entry)}\`.`,
      `Stubbing with empty exports.`,
    );
    return dedent`
      ${setup}

      export {};
    `;
  }

  return dedent`
    ${setup}

    ${load('_mod')}

    ${exports
      .map((specifier) =>
        specifier === 'default'
          ? `export default _mod.${specifier};`
          : `export const ${specifier} = _mod.${specifier};`,
      )
      .join('\n')}
  `;
};

const getDtsContents: GetContents = async (entry, { relativePath }) => {
  const contentLines = [`export * from "${relativePath}";`];
  if (await hasDefaultExport(entry.entryPath)) {
    contentLines.push(`export { default } from "${relativePath}";`);
  }
  return contentLines.join('\n');
};

export const generateDevFiles = async () => {
  const config = getConfigFromContext();
  const packages = await getPackages(config);

  for (const pkg of packages.values()) {
    const entryPaths = await getPackageEntryPoints(pkg.root);

    await promiseMap(entryPaths, async (entry) => {
      await Promise.all([
        writeFile(entry, 'cjs', getCjsContents),
        writeFile(entry, 'esm', getEsmContents),
        writeFile(entry, 'dts', getDtsContents),
        writeFile(entry, 'dtsm', getDtsContents),
      ]);

      logger.success(`Created stubs for \`${getReadableEntryName(entry)}\``);
    });

    await createEntryPackageJsons(entryPaths);
  }
};
