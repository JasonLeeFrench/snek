const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'babel-polyfill',
    './src/app'
  ],
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'script.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      { 
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      { 
        test: /\.less$/,
        loader: "style!css!autoprefixer!less"
      },
    ]
  }
}