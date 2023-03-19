import fs from 'fs';
import path from 'path';

import { parse } from 'es-module-lexer';
import glob from 'fast-glob';

import type { EnhancedConfig } from '../config';
import { distDir } from '../constants';
import type { Format, PackageEntryPoint } from '../types';

import {
  emptyDir,
  extensionForFormat,
  writeIfRequired,
  writePackageJson,
} from './files';
import { promiseMap } from './promise-map';

export interface Package {
  name: string;
  root: string;
}

export type Packages = Map<string, Package>;

export const hasDefaultExport = async (filePath: string) => {
  const fileContents = await fs.promises.readFile(filePath, 'utf-8');
  // `parse` returns a promise if not initialised
  // https://github.com/guybedford/es-module-lexer/blob/1.1.0/src/lexer.ts#L156-L159
  const [, exports] = await parse(fileContents, filePath);
  return exports.some((specifier) => specifier.n === 'default');
};

export const getPackages = async (
  config: EnhancedConfig,
): Promise<Packages> => {
  // TODO: remove/replace with monorepo-aware library
  const monorepoPackages = await glob(['packages/*/package.json'], {
    cwd: config.root,
    absolute: true,
    fs,
  });

  const isMonorepo = monorepoPackages.length > 0;

  const allPackageJsons = isMonorepo
    ? monorepoPackages
    : [config.resolveFromRoot('package.json')];

  const packages = new Map<string, Package>();

  for (const packageJsonPath of allPackageJsons) {
    const packageJson = JSON.parse(
      await fs.promises.readFile(packageJsonPath, { encoding: 'utf-8' }),
    );

    packages.set(packageJson.name, {
      name: packageJson.name,
      root: path.dirname(packageJsonPath),
    });
  }

  return packages;
};

export const getPackageEntryPoints = async (
  packageRoot: string,
): Promise<PackageEntryPoint[]> => {
  const defaultEntry = 'src/index.ts';
  const otherEntries = 'src/entries';

  const entryPaths = await glob([defaultEntry, `${otherEntries}/**/*.ts`], {
    cwd: packageRoot,
    fs,
  });

  return entryPaths.map((relativeEntryPath) => {
    const extension = path.extname(relativeEntryPath);
    const isDefaultEntry = relativeEntryPath === defaultEntry;

    const entryPath = path.join(packageRoot, relativeEntryPath);
    const entryFileName = isDefaultEntry
      ? 'index'
      : path.relative(otherEntries, relativeEntryPath).replace(extension, '');
    const entryName = isDefaultEntry ? distDir : entryFileName;
    const outputDir = path.join(packageRoot, distDir);
    const outputFileName = path.join(outputDir, entryFileName);
    const packageDir = isDefaultEntry
      ? outputDir
      : path.join(packageRoot, entryName);

    return {
      entryName,
      entryPath,
      isDefaultEntry,
      outputDir,
      packageDir,
      getOutputPath: (format, { from = outputDir } = {}) =>
        `${path.relative(from, outputFileName)}.${extensionForFormat(format)}`,
    };
  });
};

export const cleanPackageEntryPoints = async (
  entryPoints: PackageEntryPoint[],
  pre?: (entryPoint: PackageEntryPoint) => void,
) => {
  await promiseMap(entryPoints, async (entryPoint) => {
    pre?.(entryPoint);
    await emptyDir(entryPoint.packageDir);
  });
};

export const createEntryPackageJsons = async (
  entryPoints: PackageEntryPoint[],
) => {
  const relativeOutputPath = (
    entryPoint: PackageEntryPoint,
    format: Format,
  ) => {
    const result = entryPoint.getOutputPath(format, {
      from: entryPoint.packageDir,
    });
    return result.startsWith('.') ? result : `./${result}`;
  };

  await promiseMap(entryPoints, async (entryPoint) => {
    if (!entryPoint.isDefaultEntry) {
      const typesOutputPath = relativeOutputPath(entryPoint, 'dts').replace(
        `.${extensionForFormat('dts')}`,
        '',
      );
      const declarationLines = [`export * from "${typesOutputPath}";`];
      if (await hasDefaultExport(entryPoint.entryPath)) {
        declarationLines.push(`export { default } from "${typesOutputPath}";`);
      }

      const typesPath = `./index.${extensionForFormat('dts')}`;
      await writeIfRequired({
        dir: entryPoint.packageDir,
        fileName: typesPath,
        contents: `${declarationLines.join('\n')}\n`,
      });

      await writePackageJson({
        dir: entryPoint.packageDir,
        contents: {
          main: relativeOutputPath(entryPoint, 'cjs'),
          module: relativeOutputPath(entryPoint, 'esm'),
          types: typesPath,
        },
      });
    }
  });
};
