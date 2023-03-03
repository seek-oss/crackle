import path from 'path';

import fse from 'fs-extra';
import sortPackageJson from 'sort-package-json';

import type { Format, PackageJson } from '../types';

interface WriteFileOpts {
  dir: string;
  fileName: string;
  contents: string;
}

const exists = async (filePath: string) => {
  try {
    await fse.stat(filePath);
    return true;
  } catch {
    return false;
  }
};

export const writeFile = async ({ dir, fileName, contents }: WriteFileOpts) => {
  await fse.mkdir(dir, { recursive: true });
  return fse.writeFile(path.join(dir, fileName), contents, 'utf-8');
};

export const writeIfRequired = async ({
  dir,
  fileName,
  contents,
}: WriteFileOpts) => {
  if (!(await exists(dir))) {
    await fse.mkdir(dir, { recursive: true });
  }

  const filePath = path.join(dir, fileName);

  let write = false;

  try {
    const existingContents = await fse.readFile(filePath, 'utf-8');
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
  if (!(await exists(dir))) {
    await fse.mkdir(dir, { recursive: true });
    return;
  }

  for (const file of await fse.readdir(dir)) {
    if (skip.includes(file)) {
      continue;
    }
    await fse.rm(path.resolve(dir, file), { recursive: true, force: true });
  }
};

export const extensionForFormat = (format: Format) =>
  (({ esm: 'mjs', cjs: 'cjs', dts: 'd.ts' } as const)[format]);

export const toRollupFormat = (format: Format) =>
  (({ esm: 'esm', cjs: 'cjs', dts: 'esm' } as const)[format]);
