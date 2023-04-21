import fs from 'fs/promises';
import path from 'path';

import { compiledVocabFileFilter } from '@vocab/webpack';
import type { Plugin } from 'rollup';

import type { EnhancedConfig } from '../../config';
import { memoize } from '../../utils/memoize';
import { promiseMap } from '../../utils/promise-map';

const getVocabDir = (id: string) => {
  if (id.endsWith('.vocab')) return id;
  if (id.endsWith('.vocab/index')) return path.dirname(id);
};

export const isVocabFile = (id: string) =>
  compiledVocabFileFilter.test(id) || Boolean(getVocabDir(id));

export const vocabTranslations = (
  _config: EnhancedConfig,
  { toDistPath }: { toDistPath: (id: string) => string },
): Plugin => ({
  name: 'crackle:vocab-translations',

  resolveId: {
    order: 'pre',
    handler: memoize(async function (id, importer) {
      const vocabDir = getVocabDir(id);
      if (vocabDir) {
        const translationsDir = path.resolve(path.dirname(importer!), vocabDir);
        const distDir = toDistPath(translationsDir);
        await promiseMap(await fs.readdir(translationsDir), async (name) => {
          if (name.endsWith('translations.json')) {
            const json = await fs.readFile(
              path.join(translationsDir, name),
              'utf-8',
            );
            this.emitFile({
              type: 'asset',
              fileName: path.join(distDir, name),
              source: json,
            });
          }
        });
      }
      // return value is important for memoize
      return null;
    }),
  },
});
