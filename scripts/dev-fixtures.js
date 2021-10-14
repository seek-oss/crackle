const fs = require('fs/promises');
const path = require('path');

const { dev } = require('@crackle/core/dev');
const { resolveConfig } = require('@crackle/core/resolve-config');

const runDevInEachFixture = async () => {
  const fixtures = await fs.readdir('fixtures');

  for (const fixture of fixtures) {
    const config = await resolveConfig({
      cwd: path.join(process.cwd(), 'fixtures', fixture),
    });

    await dev(config);
  }
};

runDevInEachFixture();
