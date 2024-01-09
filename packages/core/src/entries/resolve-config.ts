import fs from 'fs';
import path from 'path';

import * as esbuild from 'esbuild';
import _eval from 'eval';

import type { PartialConfig } from '../config';

import { logger } from './logger';

const localLogger = logger.withDefaults({ tag: 'config' });

const evaluateConfig = (
  configFilePath: string,
  configSource: string,
): PartialConfig => {
  const exports = _eval(configSource, 'fake.js', {}, true) as {
    default: PartialConfig;
  };

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
    localLogger.debug(
      'No crackle.config.ts file found, using default configuration.',
    );
    return { root: cwd };
  }

  let watching = false;

  const context = await esbuild.context({
    entryPoints: [configFilePath],
    bundle: false,
    write: false,
    outdir: 'out',
    target: ['node16'],
    format: 'cjs',
    plugins: onUpdate
      ? [
          {
            name: 'onReload',
            setup(build) {
              build.onEnd((result) => {
                if (!watching) return;

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

  // esbuild's context keeps the process alive, so we close it when we don't have a callback
  if (onUpdate) {
    context.watch();
    watching = true;
  } else {
    context.dispose();
  }

  return evaluateConfig(configFilePath, configSource);
};
