import { run, done } from './utils';

const latest = `${await run(`npm info @crackle/cli@latest version`, {
  encoding: 'utf-8',
  stdio: 'pipe',
})}`.trim();

await run(`npm dist-tag add @crackle/cli@${latest} bootstrap`);

done();
