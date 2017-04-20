const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/examples/index.js'),
  output: {
    path: path.join(__dirname, '/examples'),
    publicPath: path.join(__dirname),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js&/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};
