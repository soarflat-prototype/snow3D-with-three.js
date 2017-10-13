const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    'getting-started/gettingStarted': './src/gettingStarted',
    'sprite/sprite': './src/sprite',
    'arrow-helper/arrowHelper': './src/arrowHelper',
    'snow-3d/snow3D': './src/snow3D',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'docs/'),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env'],
      }
    }],
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      },
    }),
  ]
} else {
  module.exports.devtool = '#source-map';
}
