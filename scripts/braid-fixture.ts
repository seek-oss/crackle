import path from 'path';
import { fileURLToPath } from 'url';

import dedent from 'dedent';
import fse from 'fs-extra';
import yargs from 'yargs';

import { run as _run, done } from './utils';

const argv = await yargs(process.argv.slice(2))
  .option('branch', {
    default: 'master',
    requiresArg: true,
  })
  .option('clone', {
    type: 'boolean',
    default: false,
    implies: 'branch',
  })
  .option('absorb', {
    type: 'boolean',
    default: false,
    implies: 'branch',
  })
  .option('test', {
    choices: [true, 'integration'],
  })
  .help()
  .strict()
  .showHelp()
  .parse();
console.log();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const repo = 'git@github.com:seek-oss/braid-design-system.git';
const submodule = 'fixtures/braid-design-system';
const branch = argv.branch;

const fromRoot = (location: string) => path.resolve(__dirname, '..', location);
const run: typeof _run = (command, options) =>
  _run(command, { cwd: fromRoot('.'), ...options });
const clean = async (location: string) =>
  (await fse.exists(fromRoot(location))) && run(`rm -fr ${location}`);

// Modified from https://stackoverflow.com/questions/45688121/how-to-do-submodule-sparse-checkout-with-git/45689692//45689692

if (argv.clone) {
  // Clean submodule dirs so we can start fresh
  await clean(`.git/modules/${submodule}`);
  await clean(submodule);

  // Can't use SSH in CI and we don't need to push, so we use HTTPS instead
  if (process.env.CI) {
    await run(
      'git config --global url."https://github.com/".insteadOf "git@github.com:"',
    );
  }

  // Checkout the to-be submodule
  await run(
    `git clone --depth=1 --no-checkout -b ${branch} ${repo} ${submodule}`,
  );
}

if (argv.absorb) {
  // Add as a submodule
  await run(`git submodule add -b ${branch} --force ${repo} ${submodule}`);

  // Move the .git dir from $fixture/.git into parent repo's .git
  await run(`git submodule absorbgitdirs`);

  // Note there is no "submodule.sub.sparsecheckout" key
  await run(`git -C ${submodule} config core.sparseCheckout true`);

  // This pattern determines which files within $repo get checked out
  await fse.appendFile(
    fromRoot(`.git/modules/${submodule}/info/sparse-checkout`),
    dedent`
      /fixtures/*
      /packages/braid-design-system/*
      /jest*
      /package.json
      /pnpm-lock.yaml
      /tsconfig.json
    `,
  );
}

if (argv.clone || argv.absorb) {
  // Actually do the checkout
  await run(`git submodule update --force --checkout ${submodule}`);
}

// End of submodule code

const runInBraid = (command: string) =>
  run(command, { cwd: fromRoot(`${submodule}/packages/braid-design-system`) });

if (argv.test) {
  await run(`pnpm install --no-frozen-lockfile`, { cwd: fromRoot(submodule) });

  // These are task dependencies of `build`
  await runInBraid(`pnpm generate:icons`);
  await runInBraid(`pnpm generate:snippets`);
  // Run Braid's build command to make sure it still works & to generate the bundles
  await runInBraid(`pnpm build`);

  if (argv.test === 'integration') {
    // Run Braid's integration tests
    await run(`pnpm test:fixtures`, { cwd: fromRoot(submodule) });
  }
}

done();
