const path = require("path");
const webpack = require('webpack');

const clientConfig = {
  mode: "development",
  entry: {
    client: ["./src/client.js", "@babel/polyfill"]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.APP_ENV': {}
    })
  ]
};

const serverConfig = {
  mode: "development",
  target: "node",
  entry: {
    server: ["./index.js", "@babel/polyfill"]
  },
  output: {
    path: path.resolve(__dirname, ".."),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.APP_ENV': {}
    })
  ]
};

module.exports = [clientConfig, serverConfig];