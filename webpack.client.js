const path = require('path');

module.exports = {
  // Tell webpack where the root file is located, in order to create the bundle
  entry: './src/client/client.js',

  // Tell webpack how to name the file it produces and and it should be located
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  // Tell webpack to run on every files it run though
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};
