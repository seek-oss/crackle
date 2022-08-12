import fixturez from 'fixturez';
import type { PluginContext, NormalizedInputOptions } from 'rollup';
import type { Plugin } from 'vite';

import { getConfig } from '../../config';
import { resolveConfig } from '../../resolve-config';

import { internalPackageResolution } from './internal-package-resolution';

describe('internalPackageResolution', () => {
  const f = fixturez(__dirname);
  const monorepoRoot = f.find('monorepo');
  let plugin: Plugin;

  beforeEach(async () => {
    const inlineConfig = await resolveConfig({ cwd: `${monorepoRoot}/site` });
    const config = getConfig(inlineConfig);
    plugin = internalPackageResolution({
      ...config,
      root: monorepoRoot,
    });
    await plugin.buildStart!.call({} as PluginContext, {} as NormalizedInputOptions);
  });

  test('single entry', async () => {
    expect(
      await plugin.resolveId!.call(
        {} as PluginContext,
        '@crackle-fixtures/single-entry-library',
        undefined,
        {},
      ),
    ).toMatch('monorepo/packages/single-entry-library/src/index.ts');
  });

  test('multi-entry', async () => {
    expect(
      await plugin.resolveId!.call(
        {} as PluginContext,
        '@crackle-fixtures/multi-entry-library/extras',
        undefined,
        {},
      ),
    ).toMatch('monorepo/packages/multi-entry-library/src/entries/extras.ts');
  });
});
