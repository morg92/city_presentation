const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const distFolderPaht = path.resolve(__dirname + '/../dist');

module.exports = {
    entry: [
        path.resolve(__dirname + '/../src/client.js')
    ],
    output: {
        path: distFolderPaht,
        filename: 'bundle.js',
        publicPath: './',
        sourceMapFilename: '[name].map'
    },
    plugins: [
        new CleanWebpackPlugin([distFolderPaht], {
            root: path.resolve(__dirname + '/..'),
            verbose: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: true,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        })
    ]
};