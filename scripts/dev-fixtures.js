const { execSync } = require('child_process');
const fs = require('fs/promises');
const path = require('path');

const runDevInEachFixture = async () => {
  const fixtures = await fs.readdir('fixtures');

  for (const fixture of fixtures) {
    const cwd = path.join(process.cwd(), 'fixtures', fixture);

    // eslint-disable-next-line no-console
    console.log(`Running dev in ${fixture}`);

    await execSync('pnpm dev', {
      cwd,
      stdio: 'inherit',
    });
  }
};

runDevInEachFixture();
