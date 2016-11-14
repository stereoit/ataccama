var {resolve} = require("path")
  , HtmlWebpackPlugin = require('html-webpack-plugin');

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
  plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
  devServer: { inline: true }
};
