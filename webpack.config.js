'use strict';

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  context: path.resolve(__dirname),
  entry: [
    './src/Studio.tsx'
  ],
  output: {
    path: path.join(__dirname, '/workplace/'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['','.css','.ts','.tsx', '.js','.jsx', '.json', '.html']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  node:{
    fs:'empty',
    json:'empty',
    console:true
  },
  module: {
    loaders: [
    {
      test: /\.(ts|tsx)?$/,
      exclude: /node_modules/,
      loaders:['babel','ts']
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.json?$/,
      loader: 'json'
    }]
  }
};