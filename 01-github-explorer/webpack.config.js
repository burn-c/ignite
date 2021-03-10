const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx$/, // arquivos terminados em .jsx
        exclude: /node_modules/, // exclui esse diretorio
        use: "babel-loader", // integração babel + webpack
      },
    ],
  },
};
