var {resolve} = require("path")
  , HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: ["./app.js"]
  },
  output: {
    path: resolve(__dirname, "dist"),
    // publicPath: "/assets/",
    filename: "bundle.[chunkhash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
  ],
  module: {
     loaders: [
       { test: /\.json$/, loader: 'json' },
       { test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
     ]
  },
  devServer: { inline: true },
  devtool: 'source-map'
};
