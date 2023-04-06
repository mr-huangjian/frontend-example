const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.js'
    },

    /**
     * mode: 'development' 打包更快，开发时使用本模式
     * mode: 'production' 打包更慢，因为会进行压缩代码等操作
     * 
     * 如果执行命令的参数包含 "--mode production"，则使用该配置，因为执行命令参数的优先级更高
     */
    mode: 'development',

    // TODO 如何定位前端网页的线上问题？
    /**
     * devtool: 'eval-source-map',
     * 加上可保证：运行时报错的行数与源代码的行数保持一致，运行的代码也是源代码
     * 
     * devtool: 'nosources-source-map', 
     * 只定位行数，不暴露源码，此时根本看不到源码
     * 
     * devtool: 'source-map',
     * 显示行号和源码，https://www.jianshu.com/p/2b1b1a48ff0a
     * 
     * 开发调试时推荐使用 devtool: 'eval-source-map'
     * 在生产环境推荐使用 devtool: 'nosources-source-map' 或 直接关闭 source-map，防止源码泄露
     */
    devtool: 'source-map',

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
     * 加载 HtmlWebpackPlugin 会在执行后将 index.html 导出到 dist 目录
     * 加载 CleanWebpackPlugin 会在执行前将 dist 目录删除
     */
    plugins: [ 
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new CleanWebpackPlugin(),
     ],

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
             * 只有≤limit大小的图片，才会被转为base64格式的图片数据，否则转为图片文件
             * 单个loader可以用字符串，多个loader用数组
             */
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=22229&outputPath=img' },

            /**
             * Babel 处理 JS 高级语法
             */
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ],
    },

    resolve: {
        alias: {
            '@': path.join(__dirname, './src/')
        }
    }
}
