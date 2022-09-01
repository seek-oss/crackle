/* eslint-disable @typescript-eslint/no-var-requires */

require('module-alias').addAliases({
  'sku/react-treat': SKU_REACT_TREAT_MOCK,
  'sku/treat': SKU_TREAT_MOCK,
});

module.exports = require('./build');
