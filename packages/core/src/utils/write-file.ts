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

export const writeIfRequired = async ({
  dir,
  fileName,
  contents,
}: WriteFileOpts) => {
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
