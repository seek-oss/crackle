import fs from 'fs/promises';

interface CopyFilesOptions {
  sourceDir: string;
  destinationDir: string;
}

export const copyFiles = ({ sourceDir, destinationDir }: CopyFilesOptions) =>
  fs.cp(sourceDir, destinationDir, { recursive: true });
