/* eslint-disable @typescript-eslint/no-var-requires */

require('module-alias').addAliases({
  'sku/react-treat': __SKU_REACT_TREAT_MOCK,
  'sku/treat': __SKU_TREAT_MOCK,
});

module.exports = require('./build');
