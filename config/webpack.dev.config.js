const path = require('path');
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin')
const relativeDirs = '../';
const PATHS = {
  src: path.join(__dirname, relativeDirs, 'src')
}

module.exports = {
  mode: "development",
  devtool: 'inline-source-map',
  entry: './src/js/index.js',
  externals: {
    jquery: 'jQuery'
  },
  output: {
    filename: '[hash].bundle.js',
    path: path.resolve(__dirname, relativeDirs, 'dist/', 'dev/'),

  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/views/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ['html-loader']
      },
      {
        test: /\.(s?)css$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(svg)$/,
        use: [
          'file-loader',
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist/', 'dev/'),
    open: 'Google Chrome',
    port: 9000
  }
};