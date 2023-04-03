import { execSync } from 'child_process';

export const run = async (
  command: string,
  { cwd }: Parameters<typeof execSync>[1] = {},
) => {
  const cwdSuffix = cwd ? ` (in ${cwd})` : '';
  console.log(`🛠  ${command}${cwdSuffix}...`);
  execSync(command, { cwd, stdio: 'inherit' });
  console.log(`✅ ${command}`);
  console.log();
};

export const done = () => console.log('✨ Done.');
