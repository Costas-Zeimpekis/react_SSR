const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // Tell webpack where the root file is located, in order to create the bundle
  entry: './src/client/client.js',

  // Tell webpack how to name the file it produces and and it should be located
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};

module.exports = merge(baseConfig, config);
