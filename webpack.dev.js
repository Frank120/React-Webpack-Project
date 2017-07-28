const Merge = require('webpack-merge');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const CommonConfig = require('./webpack.common.js');

module.exports = function (env, compileEntries) {
  return Merge(CommonConfig(env, compileEntries), {

    plugins: [
      new StyleLintPlugin({
        quiet: false,
        syntax: 'scss',
        failOnError: true,
      }),
    ],
  });
};
