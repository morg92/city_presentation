module.exports = [
    //JS - JSX
    {
        test: /\.(js|jsx?)$/,
        exclude: /(node_modules)/,
        use: [
            {
                loader: 'babel-loader'
            },
            {
                loader: 'eslint-loader'
            }
        ]
    },
    //CSS
    {
        test: /\.css$/,
        use: [
            { loader: 'style-loader' },
            {
                loader: 'css-loader'
            }
        ]
    },
    //IMG
    {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
            'file-loader',
            {
                loader: 'image-webpack-loader',
                query: {
                    // progressive: true,
                    // optimizationLevel: 7,
                    // interlaced: false,
                    // pngquant: {
                    //     quality: '65-90',
                    //     speed: 4
                    // }
                }
            }
        ]
    }

];