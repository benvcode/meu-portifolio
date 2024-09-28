// webpack.prod.js

const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/style.css',
    }),
  ],

  module: {
    rules: [
      // Configuração para CSS
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // Extrai o CSS para um arquivo separado.
      },

      // Configuração para Fontes
      {
        test: /\.(woff(2)?|ttf|eot|svg)$/,  // Lida com arquivos de fontes.
        type: 'asset/resource', // Copia as fontes para o diretório de saída.
        generator: {
          filename: 'fonts/[name][ext][query]',  // Salva no diretório "fonts".
        },
      },
    ],

  },
});