import type { OutputOptions } from 'rollup';
import { rollup } from 'rollup';
import dts from 'rollup-plugin-dts';
import ts from 'typescript';

import { externals } from '../plugins/rollup';
import type { PackageEntryPoint } from '../types';

const formatDiagnostics = ts.formatDiagnosticsWithColorAndContext;

const getCompilerOptions = async (packageRoot: string) => {
  const formatHost: ts.FormatDiagnosticsHost = {
    getCurrentDirectory: () => packageRoot,
    getNewLine: () => ts.sys.newLine,
    getCanonicalFileName: (f) => f,
  };

  const configPath = ts.findConfigFile(packageRoot, ts.sys.fileExists);
  if (!configPath) {
    throw new Error('No tsconfig.json found');
  }
  const { config: tsconfig, error } = ts.readConfigFile(
    configPath,
    ts.sys.readFile,
  );
  if (error) {
    const formattedError = formatDiagnostics([error], formatHost);
    throw new Error(formattedError);
  }

  const { options, errors } = ts.parseJsonConfigFileContent(
    tsconfig,
    ts.sys,
    packageRoot,
  );
  if (errors.length) {
    const formattedError = formatDiagnostics(errors, formatHost);
    throw new Error(formattedError);
  }

  return options;
};

export const createDtsBundle = async (
  packageRoot: string,
  entries: PackageEntryPoint[],
  outputOptions: OutputOptions,
) => {
  const compilerOptions = await getCompilerOptions(packageRoot);

  const bundle = await rollup({
    input: entries.map(({ entryPath }) => entryPath),
    plugins: [
      externals(packageRoot),
      dts({
        respectExternal: true,
        compilerOptions: {
          ...compilerOptions,
          baseUrl: packageRoot,
        },
      }),
    ],
  });

  await bundle.write({
    ...outputOptions,
    exports: 'named',
    format: 'esm',
  });

  await bundle.close();
};
