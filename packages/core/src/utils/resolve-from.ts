import path from 'path';

import resolveSync from 'resolve-from';

export const resolveFrom = async (fromDirectory: string, moduleId: string) =>
  resolveSync(fromDirectory, moduleId);

export const resolveFromCrackle = (...paths: string[]) => {
  const crackleRoot = path.dirname(
    resolveSync('.', '@crackle/core/package.json'),
  );
  return path.join(crackleRoot, ...paths);
};
