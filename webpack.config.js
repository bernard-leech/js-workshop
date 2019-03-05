const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
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
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.ejs',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
