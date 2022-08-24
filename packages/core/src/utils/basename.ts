import path from 'path';

export const basename = (filePath: string) =>
  path.basename(filePath, path.extname(filePath));
