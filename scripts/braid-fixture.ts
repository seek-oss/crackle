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
    boolean: true,
    default: false,
    implies: 'branch',
  })
  .option('absorb', {
    boolean: true,
    default: false,
    implies: 'branch',
  })
  .option('test', {
    boolean: true,
    default: false,
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
const run: typeof _run = (command) => _run(command, { cwd: fromRoot('.') });
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
      /packages/braid-design-system/*
      /pnpm-lock.yaml
      /tsconfig.json
    `,
  );
}

// Actually do the checkout
await run(`git submodule update --force --checkout ${submodule}`);

// End of submodule code

const runInBraid: typeof _run = (command) =>
  _run(command, { cwd: fromRoot(`${submodule}/packages/braid-design-system`) });

if (argv.test) {
  await runInBraid(`pnpm install --no-frozen-lockfile`);

  await runInBraid(`pnpm generate:icons`);
  await runInBraid(`pnpm generate:snippets`);
  await runInBraid(`pnpm build`);
}

done();
