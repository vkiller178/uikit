const path = require("path");
var nodeExternals = require("webpack-node-externals");

const path2src = p => path.resolve(__dirname, "../src/", p);

module.exports = {
  entry: path2src("index.ts"),
  output: {
    library: "fcbox-uikit",
    libraryTarget: "umd",
    filename: "index.umd.js"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", "js"]
  },

  externals: [nodeExternals({ modulesFromFile: true })]
};