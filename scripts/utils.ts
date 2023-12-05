import { execSync } from 'child_process';

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
