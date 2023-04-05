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

            /**
             * limit 指定图片大小，单位字节byte
             * 只有≤limit大小的图片，才会被转为base64格式图片
             * 单个loader可以用字符串，多个loader用数组
             */
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229' },
        ],
    }
}
