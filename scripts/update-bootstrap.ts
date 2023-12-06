import assert from 'assert';

import cliPkg from '@crackle/cli/package.json';
import bootstrapPkg from '@crackle-private/bootstrap/package.json';

import { run, done, fromRoot } from './utils';

let version = `${await run(`npm info @crackle/cli dist-tags.bootstrap`, {
  encoding: 'utf-8',
  stdio: 'pipe',
})}`.trim();

if (!version) {
  console.log('No bootstrap tag found. Getting latest version...');

  const latest = `${await run(`npm info @crackle/cli@latest version`, {
    encoding: 'utf-8',
    stdio: 'pipe',
  })}`.trim();

  version = latest;
}

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
  `pnpm install --filter='@crackle-private/bootstrap' @crackle/cli@${version}`,
);

await run(`git add bootstrap/package.json pnpm-lock.yaml`, {
  cwd: fromRoot('.'),
});
await run(`git commit -m "Update bootstrap to @crackle/cli@${version}"`);
await run(`git push`);

done();