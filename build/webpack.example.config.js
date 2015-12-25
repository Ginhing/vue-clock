var base = require('./webpack.base.config')

module.exports = Object.assign({}, base, {
    entry: './src/example.js',
    output: {
        path: './dist',
        publicPath: '/dist',
        filename: 'example.js'
    }
})
