import { run, done } from './utils';

// We tag the latest version because this is meant to run on `prepublishOnly` (which means we have a new version be published to npm, so bootstrap will be the latest-1).
// That way we can install the latest from npm without pnpm linking to the workspace package, which is not desired.

const latest = `${await run(`npm info @crackle/cli@latest version`, {
  encoding: 'utf-8',
  stdio: 'pipe',
})}`.trim();

await run(`npm dist-tag add @crackle/cli@${latest} bootstrap`);

done();
