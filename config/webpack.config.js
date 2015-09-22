var path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "..", "src/client/index.js"),

  module: {
    loaders: [{ test: /\.jsx?$/, loader: "babel-loader" }],
  },

  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "bundle.js",
  },
}
