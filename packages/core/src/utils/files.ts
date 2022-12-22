import { existsSync } from 'fs';
import fs from 'fs/promises';
import path from 'path';

import sortPackageJson from 'sort-package-json';

import type { Format, PackageJson } from '../types';

interface WriteFileOpts {
  dir: string;
  fileName: string;
  contents: string;
}

export const writeFile = async ({ dir, fileName, contents }: WriteFileOpts) => {
  await fs.mkdir(dir, { recursive: true });
  return fs.writeFile(path.join(dir, fileName), contents, 'utf-8');
};

export const writeIfRequired = async ({
  dir,
  fileName,
  contents,
}: WriteFileOpts) => {
  if (!existsSync(dir)) {
    await fs.mkdir(dir, { recursive: true });
  }

  const filePath = path.join(dir, fileName);

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
