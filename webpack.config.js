const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    // JS
    'app': path.resolve(__dirname, 'src/index.js'),
    // CSS
    'styles': path.resolve(__dirname, 'src/assets/scss/app.scss')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // static files
    compress: true,
    hot: true,
    open: 'Google Chrome',
    overlay: true,
    stats: 'errors-only',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          // {
          //   loader: 'postcss-loader'
          // },
          {
            loader: 'sass-loader'
          }
        ],
        include: path.join(__dirname, '/src')
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new HtmlWebPackPlugin({
      template: './src/index.ejs',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
