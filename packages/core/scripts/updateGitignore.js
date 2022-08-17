const path = require('path');

const ensureGitignore = require('ensure-gitignore');

const pkg = require('../package.json');

ensureGitignore({
  filepath: path.join(__dirname, '../.gitignore'),
  comment: 'entrypoints generated from package.json#files',
  patterns: pkg.files.map((entrypoint) => entrypoint),
});
