const merge = require("webpack-merge")
const common = require("./webpack.config")
const webpack = require('webpack')

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: './bundle',
    hot: true,
    hotOnly: true
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
})