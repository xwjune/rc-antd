const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取css到单独文件的插件
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩css插件
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name].min.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    new OptimizeCssAssetsPlugin(),
  ],
});
