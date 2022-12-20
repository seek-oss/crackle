import resolveSync from 'resolve-from';

export const resolveFrom = async (fromDirectory: string, moduleId: string) =>
  resolveSync(fromDirectory, moduleId);
