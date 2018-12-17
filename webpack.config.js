const Path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    path: Path.resolve("dist"),
    filename: "src/app.js"
  }, 
  devServer: {
    contentBase: Path.join(__dirname, "dist"),
    compress: false,
    writeToDisk: true,
    port: 8000
  },
  plugins: [
    new ExtractTextPlugin({filename:'styles/app.bundle.css'}),
    new CopyWebpackPlugin([
      {from: './index.html', to: './index.html', toType: 'file'},
    ])
  ],
  module: {
    rules:[
      {
          test:/\.css$/,
          use: ExtractTextPlugin.extract({ 
            fallback:'style-loader',
            use: 'css-loader',
        })
      }]
  }

};
