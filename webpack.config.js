const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ['babel-polyfill','./src/js/index.js']
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
