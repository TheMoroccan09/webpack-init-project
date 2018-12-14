const Path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: Path.resolve("dist/src"),
    filename: "app.js"
  }, 
  devServer: {
    contentBase: Path.join(__dirname, "dist"),
    compress: false,
    writeToDisk: true,
    port: 8000
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: './index.html', to: '../index.html', toType: 'file'}
    ])
  ]
};
