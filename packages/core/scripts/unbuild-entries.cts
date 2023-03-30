import path from 'path';

import fse from 'fs-extra';

import config from '../build.config';
import { promiseMap } from '../src/utils/promise-map';

(async () => {
  const { entries } = config as { entries: string[] };

  const root = path.resolve(__dirname, '..');
  const pkgPath = path.join(root, 'package.json');
  const pkg = await fse.readJson(pkgPath);

  // update package.json exports
  for (const entry of entries) {
    const entryName = path.basename(entry);
    pkg.exports[entry === 'src/index' ? '.' : `./${entryName}`] = {
      types: `./dist/${entryName}.d.ts`,
      import: `./dist/${entryName}.mjs`,
      require: `./dist/${entryName}.cjs`,
    };
  }
  await fse.writeJson(pkgPath, pkg, { spaces: 2 });

  // create package.json for each entry
  promiseMap(
    entries
      .filter((entry) => entry !== 'src/index')
      .map((entry) => path.basename(entry)),
    async (entryName) => {
      const entryPkgPath = path.join(root, entryName, 'package.json');

      await fse.mkdirp(path.dirname(entryPkgPath));
      await fse.writeJson(
        entryPkgPath,
        {
          main: `../dist/${entryName}.cjs`,
          module: `../dist/${entryName}.mjs`,
          types: `../dist/${entryName}.d.ts`,
        },
        { spaces: 2 },
      );
    },
  );
})();
