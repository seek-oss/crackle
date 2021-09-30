import fs from 'fs/promises';
import path from 'path';

interface WriteFileOpts {
  dir: string;
  fileName: string;
  contents: string;
}

export const writeFile = async ({ dir, fileName, contents }: WriteFileOpts) => {
  await fs.mkdir(dir, { recursive: true });
  return fs.writeFile(path.join(dir, fileName), contents, 'utf-8');
};
