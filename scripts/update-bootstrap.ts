import assert from 'assert';

import cliPkg from '@crackle/cli/package.json';
import bootstrapPkg from '@crackle-private/bootstrap/package.json';

import { run, done, fromRoot } from './utils';

if (cliPkg.version.startsWith('0.0.0')) {
  console.log('Not updating bootstrap because @crackle/cli is a snapshot');

  // eslint-disable-next-line no-process-exit
  process.exit(0);
}

// We tag the latest version because this is meant to run before `changeset publish`.
// It means we have a new local version to be published to npm, so bootstrap will be latest-1 after we publish.
// That way we can install the latest from npm without pnpm linking to the workspace package, which is not desired.

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

await run(`npm dist-tag add @crackle/cli@${version} bootstrap`);

await run(
  `pnpm install --filter='@crackle-private/bootstrap' @crackle/cli@${version}`,
);

await run(`git add bootstrap/package.json pnpm-lock.yaml`, {
  cwd: fromRoot('.'),
});
await run(`git commit -m "Update bootstrap to @crackle/cli@${version}"`);

// We don't need to push the commit because `changeset publish` does it with `git push --tags`

done();
