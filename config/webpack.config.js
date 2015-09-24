var path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "..", "src/client/index.js"),
    "tic-tac-toe": path.resolve(__dirname, "..", "src/client/tic-tac-toe/index.js"),
  },

  module: {
    loaders: [{ test: /\.jsx?$/, loader: "babel-loader" }],
  },

  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "[name].js",
  },
}
