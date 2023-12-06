import assert from 'assert';

import cliPkg from '@crackle/cli/package.json';
import bootstrapPkg from '@crackle-private/bootstrap/package.json';

import { run, done } from './utils';

if (cliPkg.version.startsWith('0.0.0')) {
  console.log('Not updating bootstrap because @crackle/cli is a snapshot');

  // eslint-disable-next-line no-process-exit
  process.exit(0);
}

// This is meant to run after `changeset version`.
// It means we have a new local version that will eventually be published to npm.
// Because the local version and the latest from npm are different, we can install without pnpm linking to the workspace package, which is not desired.

const version = `${await run(`npm info @crackle/cli@latest version`, {
  encoding: 'utf-8',
  stdio: 'pipe',
})}`.trim();

assert(
  version !== cliPkg.version,
  'Attempting to update bootstrap with workspace version',
);

if (version === bootstrapPkg.dependencies['@crackle/cli']) {
  console.warn(`@crackle/cli@${version} already installed`);

  // eslint-disable-next-line no-process-exit
  process.exit(0);
}

await run(
  `pnpm add --filter='@crackle-private/bootstrap' @crackle/cli@${version}`,
);

// We don't need to commit and push the changes because `changesets/action` will do it

done();
