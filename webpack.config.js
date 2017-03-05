module.exports = {
    context: __dirname + '/src/app',
    entry: './eggly-app.js',
    output: {
        path: __dirname + '/src',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/src'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: { presets: ['es2015'] }
            }
        ]
    }
}