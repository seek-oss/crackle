import fss from 'fs';
import fs from 'fs/promises';
import path from 'path';

import sortPackageJson from 'sort-package-json';

import type { Format, PackageJson } from '../types';

interface WriteFileOpts {
  dir: string;
  fileName: string;
  contents: string;
}

const { existsSync } = fss;

export const writeFile = async ({ dir, fileName, contents }: WriteFileOpts) => {
  await fs.mkdir(dir, { recursive: true });
  return fs.writeFile(path.join(dir, fileName), contents, 'utf-8');
};

export const writeIfRequired = async ({
  dir,
  fileName,
  contents,
}: WriteFileOpts) => {
  const filePath = path.join(dir, fileName);
  fileName = path.basename(filePath); // eslint-disable-line no-param-reassign
  dir = path.dirname(filePath); // eslint-disable-line no-param-reassign

  if (!existsSync(dir)) {
    await fs.mkdir(dir, { recursive: true });
  }

  let write = false;

  try {
    const existingContents = await fs.readFile(filePath, 'utf-8');
    write = existingContents !== contents;
  } catch (e) {
    write = true;
  }

  if (write) {
    await writeFile({ dir, fileName, contents });
  }
};

export const writePackageJson = async <T extends PackageJson>({
  dir,
  contents,
}: {
  dir: string;
  contents: T;
}) =>
  writeIfRequired({
    dir,
    fileName: 'package.json',
    contents: JSON.stringify(sortPackageJson(contents), null, 2).concat('\n'),
  });

export const emptyDir = async (dir: string, skip = ['.git']): Promise<void> => {
  if (!existsSync(dir)) {
    await fs.mkdir(dir, { recursive: true });
    return;
  }

  for (const file of await fs.readdir(dir)) {
    if (skip.includes(file)) {
      continue;
    }
    await fs.rm(path.resolve(dir, file), { recursive: true, force: true });
  }
};

export const extensionForFormat = (format: Format) =>
  (({ esm: 'mjs', cjs: 'cjs', dts: 'd.ts' } as const)[format]);
