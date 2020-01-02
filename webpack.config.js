const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/ReactTagify.component.jsx",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "ReactTagify.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [{ loader: "babel-loader", options: { babelrc: true } }]
      }
    ]
  }
};
