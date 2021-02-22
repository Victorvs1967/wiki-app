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
        'process.env': {APP_ENV: JSON.stringify('dev'), APP_FRONTEND_PORT: 4002, APP_BACKEND_URL: JSON.stringify('backend:4001')}
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
        'process.env': {APP_ENV: JSON.stringify('dev')}
    })
  ]
};

module.exports = [clientConfig, serverConfig];