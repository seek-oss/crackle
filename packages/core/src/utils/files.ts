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

export const copyFile = (from: string, to: string) => fse.copy(from, to);

export const writeFile = async ({ dir, fileName, contents }: WriteFileOpts) => {
  await fse.mkdir(dir, { recursive: true });
  return fse.writeFile(path.join(dir, fileName), contents, 'utf-8');
};

export const writeIfRequired = async ({
  dir: dirRaw,
  fileName: fileNameRaw,
  contents,
}: WriteFileOpts) => {
  // Normalize paths in case `fileName` contains a directory
  // Before:
  //   { dir: '/path/to/dir', fileName: 'foo/bar.js' }
  // After:
  //   { dir: '/path/to/dir/foo', fileName: 'bar.js' }
  const filePath = path.join(dirRaw, fileNameRaw);
  const dir = path.dirname(filePath);
  const fileName = path.basename(filePath);

  if (!(await exists(dir))) {
    await fse.mkdir(dir, { recursive: true });
  }
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

export const formats: Format[] = ['cjs', 'esm', 'dts', 'dtsm'];

export const extensionForFormat = (format: Format) =>
  (({ cjs: 'cjs', esm: 'mjs', dts: 'd.ts', dtsm: 'd.mts' } as const)[format]);
