import fs from 'fs';
import path from 'path';

import * as esbuild from 'esbuild';
import _eval from 'eval';

import type { PartialConfig } from './config';

const evaluateConfig = (
  configFilePath: string,
  configSource: string,
): PartialConfig => {
  const exports = _eval(configSource, 'fake.js') as { default: PartialConfig };

  return {
    root: path.dirname(configFilePath),
    ...exports.default,
  };
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

  let firstBuild = true;

  const context = await esbuild.context({
    entryPoints: [configFilePath],
    bundle: true,
    write: false,
    outdir: 'out',
    target: ['node14'],
    format: 'cjs',
    plugins: onUpdate
      ? [
          {
            name: 'onReload',
            setup(build) {
              build.onEnd((result) => {
                if (firstBuild) return;
                firstBuild = false;

                const [{ text: configSource }] = result.outputFiles!;
                onUpdate(evaluateConfig(configFilePath, configSource));
              });
            },
          },
        ]
      : [],
  });

  const result = await context.rebuild();

  const [{ text: configSource }] = result.outputFiles;

  context.watch();

  return evaluateConfig(configFilePath, configSource);
};
