const { VocabWebpackPlugin } = require('@vocab/webpack');

module.exports = {
  entry: {
    'with-mjs': './src/consumer.mts',
    'with-cjs': './src/consumer.cts',
  },
  mode: 'development',
  devtool: false,
  plugins: [
    new VocabWebpackPlugin({
      configFile: require.resolve('./vocab.config.js'),
    }),
  ],
};
