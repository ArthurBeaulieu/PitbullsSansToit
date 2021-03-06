const path = require('path');
const webpack = require('webpack');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: {
    homepage: './src/js/Homepage.js',
    adoption: './src/js/Adoption.js',
    help: './src/js/Help.js',
    about: './src/js/About.js'
  },
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../assets/dist'),
    library: 'APST', // We set a library name to bundle the export default of the class
    libraryTarget: 'window', // Make it globally available
    libraryExport: 'default' // Make APST.default become APST
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,
    plugins.ESLintPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin
  ]
};
