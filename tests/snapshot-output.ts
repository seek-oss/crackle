import fs from 'fs/promises';

import glob from 'fast-glob';
import fixturez from 'fixturez';
import _ from 'lodash';
import { expect } from 'vitest';

const f = fixturez(__dirname);

const promiseMap = async <T, K>(
  items: T[],
  fn: (item: T) => Promise<K>,
): Promise<K[]> => Promise.all(items.map(fn));

export default async function snapshotOutput(
  suiteName: string,
  fixtureName: string,
) {
  const fixtureDir = f.find(fixtureName);

  const distFiles = await glob('dist/**', {
    cwd: fixtureDir,
    onlyFiles: true,
  });
  const groups = _.groupBy(distFiles, (fileName) =>
    fileName.replace(/(.cjs|.mjs|.d.ts|.d.mts)$/, '.ts'),
  );

  await promiseMap(Object.entries(groups), async ([groupName, files]) => {
    const bundle = await promiseMap(files.sort(), async (fileName) => {
      const contents = await fs.readFile(`${fixtureDir}/${fileName}`, 'utf-8');
      return `/* #region ${fileName} */\n${contents}/* #endregion */\n`;
    });

    const output = bundle
      .join('\n\n')
      // make snapshots more stable by replacing version numbers
      .replaceAll(
        new RegExp('(/node_modules/.pnpm)/tsx@[\\d.]+/', 'g'),
        '$1/tsx@[version]/',
      );

    const snapshotDir = `__snapshots__/${suiteName}/${fixtureName}`;
    await expect(output).toMatchFileSnapshot(
      `${snapshotDir}/${groupName}.snap`,
      `Failed to match snapshot for ${groupName}.snap`,
    );
  });
}
