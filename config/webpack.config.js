var path = require("path");

module.exports = {
  entry: path.resolve(__dirname + "/../src/client/index.js"),

  loaders: [{ test: /\.js$/, loader: "babel" }],

  output: {
    path: path.resolve(__dirname + "/../build"),
    filename: "bundle.js",
  },
}
