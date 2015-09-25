/**
 * Webpack dev configuration
 */
var path = require("path");
var webpack = require("webpack");
var base = require("./webpack.config");
var CleanPlugin = require("clean-webpack-plugin");
var autoprefixer = require("autoprefixer-stylus");

module.exports = {
  cache: true,
  context: base.context,
  entry: base.entry,
  output: {
    path: path.join(process.cwd(), "dist/js"),
    filename: "bundle.dev.js",
    publicPath: "http://127.0.0.1:2992/js"
  },
  module: base.module,
  stylus: base.stylus,
  resolve: base.resolve,
  resolveLoader:  base.resolveLoader,
  devtool: "eval-source-map",
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
