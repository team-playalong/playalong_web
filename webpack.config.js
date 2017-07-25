var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var dirApp = path.join(__dirname, 'app');
var dirAssets = path.join(__dirname, 'assets');
var dirReact = path.join(__dirname, 'app/react');


// Is the current build a development build
var IS_DEV = (process.env.NODE_ENV === 'development');

module.exports = {
  entry: {
    vendor: [
      'jquery',
      'lodash',
    ],
    bundle: path.join(dirApp, 'index'),
  },
  resolve: {
    modules: [
      'node_modules',
      dirAssets,
      dirApp,
      dirReact,
    ],
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_DEV: IS_DEV,
    }),
    new webpack.ProvidePlugin({
      // jQuery
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery',

      // lodash
      _: 'lodash',
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/app/index.ejs'),
      title: 'Playalong',
      env: process.env.NODE_ENV,
    }),
  ],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
        ],
        exclude: /(node_modules)/,
      },
      // STYLES
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },

      // CSS / SASS
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
        ],
      },
      // Fonts
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      // EJS
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
      },

      // JS
      {
        test: /.*(app\/react).*(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: IS_DEV,
              // This is a feature of `babel-loader` for webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
            },
          }
        ],
        exclude: /(node_modules)/,
      },
      // IMAGES
      {
        test: /\.(jpe*g|png|gif|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
};
