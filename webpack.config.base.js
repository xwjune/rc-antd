const path = require('path');
const webpack = require('webpack');
const pkg = require('./package.json');
const loaders = require('./webpack.loader');
const entry = require('./webpack.entry');

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
};
const reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom',
};

module.exports = {
  entry: {
    [pkg.name]: [
      ...entry,
      './src/index',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'junRcAntd',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', 'jsx'],
  },
  module: {
    rules: loaders,
  },
  externals: {
    react: reactExternal,
    'react-dom': reactDOMExternal,
  },
  plugins: [
    new webpack.BannerPlugin(`${pkg.name} v${pkg.version}\n\nCopyright ${pkg.author}, Inc.\nAll rights reserved.`),
  ],
};
