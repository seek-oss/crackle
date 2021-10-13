import path from 'path';

export const basename = (filePath: string) => {
  if (filePath.endsWith('.tsx')) {
    return path.basename(filePath, '.tsx');
  }

  return path.basename(filePath, '.ts');
};
