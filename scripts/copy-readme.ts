import { run, done } from './utils';

await run(`cp README.md packages/cli/README.md`);

done();
