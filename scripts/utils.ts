import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const fromRoot = (location: string) =>
  path.resolve(__dirname, '..', location);

export const run = async (
  command: string,
  { cwd, ...options }: Parameters<typeof execSync>[1] = {},
) => {
  const cwdSuffix = cwd ? ` (in ${cwd})` : '';
  console.log(`🛠  ${command}${cwdSuffix}...`);
  const output = execSync(command, {
    cwd,
    stdio: 'inherit',
    ...options,
  });
  console.log(`✅ ${command}`);
  console.log();
  return output;
};

export const done = () => console.log('✨ Done.');
