const path = require('path');
const WebPack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const settings = {
  distPath: path.join(__dirname, 'dist'),
  srcPath: path.join(__dirname, 'src'),
};

function appendSrcPath(subpath) {
  return path.join(settings.srcPath, subpath);
}

module.exports = {
  entry: appendSrcPath('index.js'),
  output: {
    path: settings.distPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([settings.distPath], {
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new WebPack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
