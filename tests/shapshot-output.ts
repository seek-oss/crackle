import fs from 'fs/promises';
import path from 'path';

import glob from 'fast-glob';
import fixturez from 'fixturez';
import _ from 'lodash';
import { addSerializer as addSpecificSnapshotSerializer } from '~utils/specific-snapshot-serializer';

const f = fixturez(__dirname);

addSpecificSnapshotSerializer();

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
    fileName.replace(/(.cjs|.mjs|.d.ts)$/, ''),
  );

  await promiseMap(Object.entries(groups), async ([groupName, files]) => {
    await Promise.all(
      files.map(async (fileName) => {
        const contents = await fs.readFile(
          path.join(fixtureDir, fileName),
          'utf-8',
        );
        expect(contents).toMatchSpecificSnapshot(
          `__snapshots__/${suiteName}/${fixtureName}/${groupName}.snap`,
          // @ts-ignore Types don't match the implementation
          // https://github.com/igor-dv/jest-specific-snapshot/blob/v8.0.0/src/index.js#L53
          fileName,
        );
      }),
    );
  });
}
