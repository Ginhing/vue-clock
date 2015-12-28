var base = require('./webpack.base.config')

module.exports = Object.assign({}, base, {
    entry: './src/vue-clock.vue',
    output: {
        path: './dist',
        filename: 'vue-clock.js',
        libraryTarget: 'commonjs'
    }
})
