// webpack.common.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  entry: './src/main.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/assets/img/icons/favicons/favicon.ico',
    }),

    new WebpackAssetsManifest({
      output: "site.webmanifest"
    }),
  ],

  resolve: {
    alias: {
      '@css': path.resolve(__dirname, './src/assets/css'),
    },
  },

  module: {
    rules: [

      // images
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Lida com arquivos de imagens
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[path][name][ext][query]',
        },
      },

      // css
      {
        test: /\.css$/,
        use:
          [
            'style-loader',  // CSS é injetado no DOM usando style-loader
            'css-loader',  // Carrega e resolve imports e URLs de CSS
          ],
      },

      // scss
      {
        test: /\.styles.scss$/,
        exclude: /node_modules/,
        use: [
          // Converte o scss em string(necessário em webcomponents)
          "sass-to-string",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                outputStyle: "compressed",
                silenceDeprecations: ['legacy-js-api'],
              },
            },
          },
        ],
      },
    ],
  },
};