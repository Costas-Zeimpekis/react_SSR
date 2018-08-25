const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack that we are building a bundle for nodeJS, rather then for a browser
  target: 'node',

  // Tell webpack where the root file is located, in order to create the bundle
  entry: './src/index.js',

  // Tell webpack how to name the file it produces and and it should be located
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
