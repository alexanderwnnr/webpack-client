const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contenthash].js', // Используйте хэш для лучшего кэширования
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // Путь для ресурсов
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Поддержка как JS, так и JSX
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'], // Загрузка CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Поддержка изображений
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // Сохранение исходного пути и имени файла
              context: 'src',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/, // Поддержка шрифтов
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]', // Сохранение исходного пути и имени файла
              context: 'src',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Упрощение импорта
  },
};