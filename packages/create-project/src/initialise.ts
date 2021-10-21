import fs from 'fs/promises';
import path from 'path';

import exec from 'execa';
import getLatestVersion from 'latest-version';

import type { TemplateId } from './constants';
import { copyFiles } from './utils/files';

const sleep = (time: number) => new Promise((res) => setTimeout(res, time));

const getPackageVersions = async (packageNames: string[]) => {
  const versions = await Promise.all(
    packageNames.map(async (packageName) => {
      const latestVersion = await getLatestVersion(packageName);
      return [packageName, `^${latestVersion}`];
    }),
  );

  return Object.fromEntries(versions) as Record<string, string>;
};

export async function* initialise(
  templateId: TemplateId,
  name: string,
): AsyncGenerator<string, void, void> {
  // Add a check for existing dir
  yield 'Copying template files...';

  const sourceDir = path.join(__dirname, '../templates', templateId);
  const destinationDir = path.join(process.cwd(), name);

  await copyFiles({
    sourceDir,
    destinationDir,
  });

  yield 'Creating package.json...';

  const dependencies = await getPackageVersions(['@crackle/router', 'react']);
  const devDependencies = await getPackageVersions([
    '@crackle/cli',
    '@crackle/core',
    '@types/react',
  ]);

  const pkg = {
    name,
    version: '1.0.0',
    private: true,
    scripts: {
      build: 'crackle build',
      serve: 'crackle serve',
      start: 'crackle start',
    },
    dependencies,
    devDependencies,
  };

  await fs.writeFile(
    path.join(destinationDir, 'package.json'),
    JSON.stringify(pkg, null, 2),
    'utf-8',
  );

  yield 'Installing dependencies...';

  await exec('yarn', {
    cwd: destinationDir,
  });

  yield 'Creation complete!';
}
