const path = require("path")

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'sass-loader',
            options: {
              precision: 10
            }
          }
        ],
        include: path.resolve(__dirname, '../src')
      }
    ]
  }
}