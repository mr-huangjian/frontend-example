const path = require('path')

/**
 * html-webpack-plugin 配置
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
})


module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },

    /**
     * mode: 'development' 打包更快，开发时使用本模式
     * mode: 'production' 打包更慢，因为会进行压缩代码等操作
     */
    mode: 'development',

    /**
     * webpack-dev-server 配置
     * https://blog.csdn.net/feiying0canglang/article/details/126560143
     */
    devServer: {
        port: 2020,
    },

    /**
     * 加载三方插件
     */
    plugins: [ htmlWebpackPlugin ]
}
