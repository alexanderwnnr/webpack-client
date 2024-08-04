const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map', // Источники карты для отладки
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Папка для статических файлов
    },
    hot: true, // Включение горячей перезагрузки модулей
    open: true, // Автоматическое открытие браузера при запуске
    historyApiFallback: true, // Поддержка React Router
    port: 3000, // Порт сервера разработки
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Плагин для горячей перезагрузки
  ],
});