import path from 'path';

import { build as esbuild } from 'esbuild';
import findUp from 'find-up';

import type { PartialConfig } from './config';

export const resolveConfig = async (): Promise<PartialConfig> => {
  const configFilePath = await findUp('crackle.config.ts');

  if (!configFilePath) {
    // eslint-disable-next-line no-console
    console.log('Unable to locate a crackle.config.ts file.');
    return {};
  }

  const result = await esbuild({
    entryPoints: [configFilePath],
    bundle: true,
    write: false,
    outdir: 'out',
    target: ['node14'],
    format: 'cjs',
  });

  const exports = {
    default: {},
  };

  const [{ text: configSource }] = result.outputFiles;

  // eslint-disable-next-line no-eval
  eval(configSource);

  return {
    root: path.dirname(configFilePath),
    ...exports.default,
  } as PartialConfig;
};
