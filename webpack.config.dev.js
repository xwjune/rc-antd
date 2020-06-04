const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取css到单独文件的插件
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  devtool: 'none',
  mode: 'development',
  output: {
    filename: '[name].js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
});
