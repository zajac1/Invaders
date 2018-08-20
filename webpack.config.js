const path = require('path');

module.exports = {
  entry: './modules/Game.ts',
  mode: "development",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'all.js',
    path: path.resolve(__dirname)
  }
};
