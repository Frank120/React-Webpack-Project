const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CssNextPlugin = require('postcss-cssnext');
const fileStream = require('fs');
const path = require('path');

module.exports = (env, compileEntries) => {
  const config = {
    entry: env === 'local' ? {} : { vendor: ['jquery', 'react', 'react-dom', 'prop-types'] },

    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      chunkFilename: 'async-chunks/[name].js',
      filename: `entries/[name]${env === 'local' ? '' : '.[chunkhash]'}.js`,
    },

    devtool: 'inline-source-map',

    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, 'src')],

          // With the env preset, babel will automatically determine needed presets http://babeljs.io/docs/plugins/preset-env/
          loader: env === 'local' ? ['babel-loader'] :
          ['babel-loader', {
            loader: 'eslint-loader',
            options: {
              quiet: env === 'prod',
            },
          }],
        },
        {
          test: /\.scss$/,
          include: [path.resolve(__dirname, 'src')],

          // Note the order of loader applied is opposite with the order within the loaders array
          loader: (env === 'local' ? ['css-hot-loader'] : []).concat(ExtractTextPlugin.extract([
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
            'resolve-url-loader',
            {
              loader: 'postcss-loader',
              options: { plugins: () => [CssNextPlugin], sourceMap: true },
            },
            { loader: 'sass-loader', options: { sourceMap: true } },
          ])),
        },
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, 'src')],

          // Note the order of loader applied is opposite with the order within the loaders array
          loader: ExtractTextPlugin.extract([
            'css-loader',
            'resolve-url-loader',
          ]),
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          include: [path.resolve(__dirname, 'src')],
          loader: [{
            loader: 'url-loader',
            options: {
              // Images smaller than 2kb will be embedded as base64 data url
              limit: 2000,
              name: '/[path]/[name].[ext]',
              outputPath: 'assets/images',
            },
          }],
        },
        {
          test: /\.pug/,
          include: [path.resolve(__dirname, 'src')],
          loader: [{
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          }],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)(\?[a-z0-9]+)?$/,
          include: [path.resolve(__dirname, 'src')],
          loader: [{
            loader: 'url-loader',
            options: {
              limit: Infinity,
              name: '/[name].[ext]',
              outputPath: 'assets/fonts',
            },
          }],
        }],
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    plugins: [
      new CleanWebpackPlugin('dist'),

      // Make css bundle
      new ExtractTextPlugin({ filename: 'assets/style/[name].css', allChunks: true }),

      new webpack.optimize.CommonsChunkPlugin({
        // (the commons chunk name)
        names: env === 'local' ? ['commons'] : ['commons', 'vendor', 'manifest'],

        // (Modules must be shared between 2 entries)
        minChunks: 2,
      }),
    ],
  };

  // Get entries from the entries path,
  // if the list of entries need to be compiled is given and the current entry is not included,
  // just don't add it to the config entry collection
  const entries = fileStream.readdirSync('./src/entries').filter(entry =>
  env !== 'local' || !compileEntries || !compileEntries.length || compileEntries.includes(entry));

  entries.forEach((entry) => {
    const localOnlyEntries = [    // activate HMR for React
      'react-hot-loader/patch',

      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      'webpack-dev-server/client?http://localhost:8080',

      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server'];


    config.entry[entry] = [
      // Babel polyfill for advanced ES features
      'babel-polyfill',

      // The actual entry
      `./src/entries/${entry}/entry.jsx`,
    ];

    if (env === 'local') {
      config.entry[entry] = localOnlyEntries.concat(config.entry[entry]);
    }


    config.plugins.push(new HtmlWebpackPlugin({
      chunks: env === 'local' ? ['commons', entry] : ['manifest', 'vendor', 'commons', entry],
      filename: `pages/${entry}.html`, // Main html output path
      template: `./src/entries/${entry}/template.pug`, // Html template path
    }));
  });

  config.plugins.push(new HtmlWebpackPlugin({
    inject: false,
    filename: 'index.html', // Main html output path
    template: './src/index.pug', // Html template path
    entries,
  }));

  return config;
};

