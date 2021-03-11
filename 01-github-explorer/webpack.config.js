const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  devtool: isDevelopment ? "eval-source-map" : "source-map",
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/, // arquivos terminados em .jsx
        exclude: /node_modules/, // exclui esse diretorio
        use: "babel-loader", // integração babel + webpack
      },
      {
        test: /\.scss$/, // arquivos terminados em .jsx
        exclude: /node_modules/, // exclui esse diretorio
        use: ["style-loader", "css-loader", "sass-loader"], // integração babel + webpack
      },
    ],
  },
};
