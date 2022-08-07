import fs from 'fs';
import path from 'path';

import { build as esbuild } from 'esbuild';

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
  const configFilePath = path.join(cwd, 'crackle.config.ts');

  // eslint-disable-next-line no-sync
  if (!fs.existsSync(configFilePath)) {
    // eslint-disable-next-line no-console
    console.log(
      'No crackle.config.ts file found, using default configuration.',
    );
    return { root: cwd };
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
