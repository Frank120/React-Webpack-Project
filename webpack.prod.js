const webpack = require('webpack');
const Merge = require('webpack-merge');

const CommonConfig = require('./webpack.common.js');
const StyleLintPlugin = require('stylelint-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = function (env, compileEntries) {
  return Merge(CommonConfig(env, compileEntries), {
    devtool: 'cheap-module-source-map',

    plugins: [
      new StyleLintPlugin({
        quiet: true,
        syntax: 'scss',
        failOnError: true,
      }),

      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
      }),

      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),

      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          keep_fnames: true,
        },
        compress: {
          drop_console: true,
        },
        comments: false,
      }),
    ],
  });
};

