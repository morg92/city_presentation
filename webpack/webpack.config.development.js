const path = require('path');
const webpack = require('webpack');

const publicPath = '/';
const contentBase = path.resolve(__dirname + '/../');
const port = 4000;
const host = '0.0.0.0';

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://' + host + ':' + port,
        'webpack/hot/only-dev-server',
        path.resolve(__dirname + '/../src/client.js')
    ],
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js',
        publicPath: publicPath,
        sourceMapFilename: 'bundle.map'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        port: port,
        host: host,
        hot: true,
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath,
        open: false,
        watchContentBase: false,
        contentBase: contentBase
    }
};