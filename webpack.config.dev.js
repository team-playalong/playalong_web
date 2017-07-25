var webpackConfig = require('./webpack.config');

webpackConfig.devtool = 'cheap-module-source-map';
webpackConfig.output = {
    pathinfo: true,
    publicPath: '/',
    filename: '[name].js',
};

module.exports = webpackConfig;
