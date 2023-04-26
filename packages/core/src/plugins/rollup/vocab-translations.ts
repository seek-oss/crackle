import fs from 'fs/promises';
import path from 'path';

import { compiledVocabFileFilter } from '@vocab/webpack';
import type { Plugin, PluginContext } from 'rollup';

import type { EnhancedConfig } from '../../config';
import { memoize } from '../../utils/memoize';
import { promiseMap } from '../../utils/promise-map';

export const isVocabFile = (id: string) => compiledVocabFileFilter.test(id);

const handleVocabTranslations = memoize(async function (
  this: PluginContext,
  vocabDir: string,
  toDistPath: (id: string) => string,
) {
  const distDir = toDistPath(vocabDir);
  await promiseMap(await fs.readdir(vocabDir), async (name) => {
    if (name.endsWith('translations.json')) {
      const json = await fs.readFile(path.join(vocabDir, name), 'utf-8');
      this.emitFile({
        type: 'asset',
        fileName: path.join(distDir, name),
        source: json,
      });
    }
  });
  // return value is important for memoize
  return null;
});

export const vocabTranslations = (
  _config: EnhancedConfig,
  { toDistPath }: { toDistPath: (id: string) => string },
): Plugin => ({
  name: 'crackle:vocab-translations',

  resolveId: {
    order: 'pre',
    async handler(id, importer) {
      const resolved = (await this.resolve(id, importer, { skipSelf: true }))!;
      if (isVocabFile(resolved.id)) {
        const vocabDir = path.dirname(resolved.id);
        await handleVocabTranslations.call(this, vocabDir, toDistPath);
      }
    },
  },
});
