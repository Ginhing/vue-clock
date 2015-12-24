module.exports = {
    entry: {
        'example':'./src/example.js',
        'index':'./src/index.js'
    },
    output: {
        path: 'dist',
        publicPath: 'dist/',
        filename: '[name].js'
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
    },
    devtool: '#source-map'
}
