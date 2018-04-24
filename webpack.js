
var webpack = require('webpack');
var path = require('path');
var libraryName = 'haphazard';
var outputFile = libraryName + '.js';
console.log("dirname is ", __dirname)
var config = {
  entry: __dirname + '/lib/' + libraryName + '.js',
  target: "node",
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
    ]
  },
  resolve: {
    modules: [
        path.resolve('./lib'),
        "node_modules"
    ],
    extensions: ['.js']
  }
};

module.exports = config;
