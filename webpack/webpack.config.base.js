const path = require('path');
const webpack = require('webpack');
const loaders = require('./webpack.loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlTemplatePath = path.resolve(__dirname + '/../index.ejs');

module.exports = {
    module: {
        rules: loaders
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new HtmlWebpackPlugin({
            template: htmlTemplatePath,
            chunksSortMode: 'dependency',
            filename: 'index.html',
            config: {},
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })

    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
};
