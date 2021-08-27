import path from 'path';

export const getLocalPath = (localFile: string) =>
  path.join(__dirname, localFile);

export const getWorkdirPath = (pathName: string) =>
  path.join(process.cwd(), pathName);
