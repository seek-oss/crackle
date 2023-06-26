import fs from 'fs/promises';
import path from 'path';

import { compiledVocabFileFilter } from '@vocab/webpack';
import type { Plugin, PluginContext } from 'rollup';

import type { EnhancedConfig } from '../../config';
import { memoize } from '../../utils/memoize';
import { promiseMap } from '../../utils/promise-map';

export const isVocabFile = (id: string) => compiledVocabFileFilter.test(id);

// Because this is called for every generated Vocab translation file, we don't want to emit assets
// multiple times. The function is memoized so that it only emits assets once per `vocab` directory,
// because the translation file can be imported from multiple places.
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
    async handler(id, importer, options) {
      const resolved = await this.resolve(id, importer, {
        skipSelf: true,
        ...options,
      });
      if (resolved && isVocabFile(resolved.id)) {
        const vocabDir = path.dirname(resolved.id);
        await handleVocabTranslations.call(this, vocabDir, toDistPath);
      }
    },
  },
});
