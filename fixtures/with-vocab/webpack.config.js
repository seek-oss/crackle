const { VocabWebpackPlugin } = require('@vocab/webpack');

module.exports = {
  entry: './src/consumer.ts',
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new VocabWebpackPlugin({
      configFile: require.resolve('./vocab.config.js'),
    }),
  ],
};
