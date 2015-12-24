module.exports = {
    entry: './src/main.js',
    output: {
        path: 'dist',
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
    },
    vue: {
        loaders: {
            js: 'babel'
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
