import path from 'path';

import enquirer from 'enquirer';
import glob from 'fast-glob';
import fse from 'fs-extra';

import { done, run } from './utils';

type Answers = {
  name: string;
  type: ('site' | 'library')[];
};

const template = {
  packageJson: ({ name, type }: Answers) => ({
    name: `@crackle-fixtures/${name}`,
    private: true,
    version: '1.0.0',
    scripts: {
      fix: 'crackle fix',
      ...(type.includes('site') && {
        start: 'crackle start',
        build: 'crackle build',
        serve: 'crackle serve',
      }),
      ...(type.includes('library') && {
        dev: 'crackle dev',
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

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const fixturesDir = path.join(__dirname, '../fixtures');

const existingFixtures = (
  await glob([`${fixturesDir}/*`], {
    onlyDirectories: true,
  })
).map((fixturePath: string) => path.basename(fixturePath));
if (existingFixtures.length === 0) {
  throw new Error(`No fixtures found in ${fixturesDir}`);
}

const answers = await enquirer.prompt<Answers>([
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

await fse.mkdirp(path.join(packageDir, 'src'));
await fse.writeJson(packageJsonPath, packageJson, { spaces: 2 });
await fse.writeFile(path.join(packageDir, 'src/index.ts'), index);

try {
  console.log('Trying `bat`...');
  await run(`bat ${packageJsonPath}`);
} catch (e: any) {
  console.log('File:', packageJsonPath);
  console.log(await fse.readFile(packageJsonPath, { encoding: 'utf8' }));
}
await run('pnpm install', { cwd: packageDir });
await run(`pnpm --filter='${packageJson.name}' fix`);

done();
