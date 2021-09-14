import path from 'path';

import { build as esbuild } from 'esbuild';
import findUp from 'find-up';

import type { PartialConfig } from './config';

const evaluateConfig = (configFilePath: string, configSource: string) => {
  const exports = {
    default: {},
  };

  // eslint-disable-next-line no-eval
  eval(configSource);

  return {
    root: path.dirname(configFilePath),
    ...exports.default,
  } as PartialConfig;
};

interface ResolveConfigOptions {
  cwd?: string;
  onUpdate?: (config: PartialConfig) => void;
}
export const resolveConfig = async ({
  cwd = process.cwd(),
  onUpdate,
}: ResolveConfigOptions = {}): Promise<PartialConfig> => {
  const configFilePath = await findUp('crackle.config.ts', { cwd });

  if (!configFilePath) {
    // eslint-disable-next-line no-console
    console.log(
      'Unable to locate a crackle.config.ts file, using default configuration.',
    );
    return {};
  }

  const result = await esbuild({
    entryPoints: [configFilePath],
    bundle: true,
    write: false,
    outdir: 'out',
    target: ['node14'],
    format: 'cjs',
    watch: onUpdate
      ? {
          onRebuild: (err, rebuildResult) => {
            if (err || !rebuildResult || !rebuildResult?.outputFiles) {
              // eslint-disable-next-line no-console
              console.error(`Invalid config file: ${configFilePath}\n`, err);
              return;
            }

            const [{ text: configSource }] = rebuildResult.outputFiles;

            onUpdate(evaluateConfig(configFilePath, configSource));
          },
        }
      : undefined,
  });

  const [{ text: configSource }] = result.outputFiles;

  return evaluateConfig(configFilePath, configSource);
};
