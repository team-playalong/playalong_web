var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpackConfig = require('./webpack.config');
var CopyWebpackPlugin = require('copy-webpack-plugin');

webpackConfig.devtool = 'cheap-module-source-map';

webpackConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }));

// Move templates to dist folder
// TODO - check how to make this part of the bundle
webpackConfig.plugins.push(new CopyWebpackPlugin([
  { from: '**/*.html' },
  { from: '**/*.png' },
  { from: '**/*.svg' },
]));

webpackConfig.plugins.push(new CleanWebpackPlugin(['dist']));

webpackConfig.output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
};

module.exports = webpackConfig;
