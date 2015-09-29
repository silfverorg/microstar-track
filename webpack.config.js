module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "index.js",
    library: 'microstar-track',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  }
};
