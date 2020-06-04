const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              corejs: 2,
            },
          ],
        ],
      },
    },
  }, {
    test: /\.css$/,
    // exclude: /node_modules/, // 需注释，不然解析antd引入的css文件loader报错
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
    ],
  }, {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  },
];

module.exports = loaders;
