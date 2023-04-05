const path = require('path')
const fs = require('fs')

// https://blog.csdn.net/xinbaiyu/article/details/128814980

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    }
}
