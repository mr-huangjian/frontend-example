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
        open: true,
        host: 'localhost',
        port: 8090,
    },

    /**
     * 加载三方插件
     */
    plugins: [ htmlWebpackPlugin ],

    /**
     * 加载 loader
     */
    module: {
        rules: [
            /**
             * 先交给 css-loader 加载器处理，然后将处理结果
             * 交给 style-loader 加载器处理，然后将处理结果
             * 交给 webpack 合并到 bunlde.js。
             */
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
        ],
    }
}
