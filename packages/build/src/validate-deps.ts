import fs from 'fs';

import { listDuplicates } from 'yarn-deduplicate';

import { getConfig } from './config';

export const validateDeps = () => {
  const config = getConfig();
  const lockfileLocation = config.resolveFromRoot('yarn.lock');
  // eslint-disable-next-line no-sync
  if (fs.existsSync(lockfileLocation)) {
    const duplicates = listDuplicates(lockfileLocation, {
      // @ts-expect-error "includeScopes" is missing in definition
      includeScopes: '@crackle',
    });

    if (duplicates.length > 0) {
      // eslint-disable-next-line no-console
      console.warn(
        `Duplicate versions of @crackle packages detected. This will likely lead to build failures. Duplicate packages: ${duplicates.join(
          ', ',
        )}`,
      );
    }
  }
};
