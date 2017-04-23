const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'examples/index.js'),
  output: {
    path: path.join(__dirname, 'examples'),
    publicPath: path.join(__dirname, 'examples'),
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
    contentBase: './examples',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Examples',
      inject: 'body',
    }),
  ],
};
