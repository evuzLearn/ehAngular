module.exports = {
    context: __dirname + '/src',
    entry: './app/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/dist'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: { presets: ['es2015'] },
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sass|scss)$/, //Check for sass or scss file names
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.css$/, 
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    }
}