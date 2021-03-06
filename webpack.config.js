var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'components', 'Main.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader"},
          {
            test: /\.jsx?$/,

            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
              presets: ['react', 'es2015']
            }
          }
      ]
  }
};