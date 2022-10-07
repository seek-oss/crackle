import { resolvePath } from 'mlly';

export const resolveFrom = async (
  fromDirectory: string,
  moduleId: string,
): Promise<string> => resolvePath(moduleId, { url: fromDirectory });
