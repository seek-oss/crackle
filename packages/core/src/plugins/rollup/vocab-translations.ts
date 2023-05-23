import fs from 'fs/promises';
import path from 'path';

import { compiledVocabFileFilter } from '@vocab/webpack';
import type { Plugin, PluginContext } from 'rollup';

import type { EnhancedConfig } from '../../config';
import { memoize } from '../../utils/memoize';
import { promiseMap } from '../../utils/promise-map';

export const isVocabFile = (id: string) => compiledVocabFileFilter.test(id);

const handleVocabTranslations = async function (
  this: PluginContext,
  vocabDir: string,
  toDistPath: (id: string) => string,
) {
  const distDir = toDistPath(vocabDir);

  const allFiles = await fs.readdir(vocabDir);
  const jsonFiles = await promiseMap(
    allFiles.filter((name) => name.endsWith('translations.json')),
    async (name) => {
      const destFileName = path.join(distDir, name);
      const contents = await fs.readFile(path.join(vocabDir, name), 'utf-8');

      this.emitFile({
        type: 'asset',
        fileName: destFileName,
        source: contents,
      });

      return destFileName;
    },
  );

  // return value is important for memoization
  return jsonFiles;
};

export const vocabTranslations = (
  _config: EnhancedConfig,
  { toDistPath }: { toDistPath: (id: string) => string },
): Plugin => {
  let handleVocabTranslationsMemo: typeof handleVocabTranslations;

  return {
    name: 'crackle:vocab-translations',

    buildStart() {
      // Because this is called for every generated Vocab translation file, we don't want to emit assets
      // multiple times. The function is memoized so that it only emits assets once per `vocab` directory,
      // because the translation file can be imported from multiple places.
      handleVocabTranslationsMemo = memoize(handleVocabTranslations);
    },

    resolveId: {
      order: 'pre',
      async handler(id, importer, options) {
        const resolved = await this.resolve(id, importer, {
          skipSelf: true,
          ...options,
        });

        if (resolved && isVocabFile(resolved.id)) {
          const vocabDir = path.dirname(resolved.id);
          await handleVocabTranslationsMemo.call(this, vocabDir, toDistPath);
        }
      },
    },
  };
};
