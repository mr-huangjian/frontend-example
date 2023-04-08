const path = require("path");

module.exports = {
    mode: "development", //防止代码被压缩
    entry: "./src/index.js", //入口文件
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js", // "[name].js" 是什么意思？原文件名输出吗？
    },
    devtool: "source-map", //防止干扰源文件
};