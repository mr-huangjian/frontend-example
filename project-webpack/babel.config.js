
/**
 * 声明 babel 可用的插件
 * webpack 在调用 babel-loader 时，会先加载 plugins 来使用
 */
module.exports = {
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
}
