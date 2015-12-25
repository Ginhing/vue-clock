var base = require('./webpack.base.config')

module.exports = Object.assign({}, base, {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'vue-clock.js',
        libraryTarget: 'commonjs2'
    }
})
