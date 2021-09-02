import path from 'path';

export const getWorkdirPath = (pathName: string) =>
  path.join(process.cwd(), pathName);
