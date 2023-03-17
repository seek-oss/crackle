/* eslint-disable no-console */
import { execSync } from 'child_process';
import path from 'path';

import { prompt } from 'enquirer';
import glob from 'fast-glob';
import fs from 'fs-extra';

type Answers = {
  name: string;
  type: ('site' | 'library')[];
};

const run = async (
  command: string,
  { cwd }: Parameters<typeof execSync>[1] = {},
) => {
  console.log(`Running ${command}...`);
  execSync(command, { cwd, stdio: 'inherit' });
  console.log();
};

const template = {
  packageJson: ({ name, type }: Answers) => ({
    name: `@crackle-fixtures/${name}`,
    private: true,
    version: '1.0.0',
    scripts: {
      fix: 'crackle fix',
      ...(type.includes('site') && {
        dev: 'crackle dev',
        start: 'crackle start',
        build: 'crackle build',
        serve: 'crackle serve',
      }),
      ...(type.includes('library') && {
        package: 'crackle package',
      }),
    },
    author: 'SEEK',
    license: 'MIT',
    dependencies: {},
    devDpendencies: {},
  }),
  index: (_answers: Answers) => `export default {}`,
};

(async () => {
  const fixturesDir = path.join(__dirname, '../fixtures');

  const existingFixtures = (
    await glob([`${fixturesDir}/*`], {
      onlyDirectories: true,
    })
  ).map((fixturePath: string) => path.basename(fixturePath));
  if (existingFixtures.length === 0) {
    throw new Error(`No fixtures found in ${fixturesDir}`);
  }

  const answers = await prompt<Answers>([
    {
      name: 'name',
      message: 'What is the fixture name?',
      type: 'input',
      required: true,
      validate(value) {
        if (!value) {
          return 'Package name is required';
        }
        if (existingFixtures.includes(value)) {
          return 'Fixture already exists';
        }
        return true;
      },
    },
    {
      name: 'type',
      message: 'What is the fixture type?',
      type: 'multiselect',
      choices: ['library', 'site'],
      required: true,
      validate(value) {
        if (value.length === 0) {
          return 'Choose at least one';
        }
        return true;
      },
    },
  ]);

  console.log(`Creating ${answers.name}...`);
  console.log();

  const packageDir = path.join(fixturesDir, answers.name);
  const packageJsonPath = path.join(packageDir, 'package.json');

  const packageJson = template.packageJson(answers);
  const index = template.index(answers);

  await fs.mkdirp(path.join(packageDir, 'src'));
  await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });
  await fs.writeFile(path.join(packageDir, 'src/index.ts'), index);

  try {
    console.log('Trying `bat`...');
    await run(`bat ${packageJsonPath}`);
  } catch (e: any) {
    console.log('File:', packageJsonPath);
    console.log(await fs.readFile(packageJsonPath, { encoding: 'utf8' }));
  }
  await run('pnpm install', { cwd: packageDir });
  await run(`pnpm --filter='${packageJson.name}' fix`);

  console.log('Done.');
})();
