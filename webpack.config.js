const webpackBaseConfig = require('./webpack/webpack.config.base');
const webpackMerge = require('webpack-merge');

const { NODE_ENV } = process.env || (() => { throw `NODE_ENV must be defined, result ${process.env.NODE_ENV}`; })();

const webpackConfig = require(`./webpack/webpack.config.${NODE_ENV}.js`);

module.exports = () => webpackMerge(webpackBaseConfig, webpackConfig);