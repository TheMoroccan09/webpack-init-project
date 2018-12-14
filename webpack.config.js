const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("dist/src"),
    filename: "app.js"
  }, 
  watch: true
};
