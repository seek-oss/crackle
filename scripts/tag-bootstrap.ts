import cliPkg from '@crackle/cli/package.json';

import { run, done } from './utils';

if (cliPkg.version.startsWith('0.0.0')) {
  console.log('Not updating bootstrap because @crackle/cli is a snapshot');

  // eslint-disable-next-line no-process-exit
  process.exit(0);
}

// We tag the latest version because this is meant to run before `changeset publish`.
// It means we have a new local version to be published to npm, so bootstrap will be latest-1 after we publish.

const version = `${await run(`npm info @crackle/cli@latest version`, {
  encoding: 'utf-8',
  stdio: 'pipe',
})}`.trim();

await run(`npm dist-tag add @crackle/cli@${version} bootstrap`);

done();
