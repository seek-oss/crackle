import { execSync } from 'child_process';

export const run = async (
  command: string,
  { cwd }: Parameters<typeof execSync>[1] = {},
) => {
  console.log(`🛠  ${command}...`);
  execSync(command, { cwd, stdio: 'inherit' });
  console.log(`✅ ${command}`);
  console.log();
};

export const done = () => console.log('✨ Done.');
