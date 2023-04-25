# TypeScript

[TS 官网](https://www.typescriptlang.org/)
[TS 中文网 #](https://www.tslang.cn/index.html)
[TS 中文网 2](https://www.tsdev.cn/)
[TS Playground](https://www.tslang.cn/play/index.html)

# TypeScript 配置

```js
{
  "noEmitOnError": true, // 如果 tsc 编译报错，则不输出文件
  "noImplicitAny": false, // 如果没有指定任何类型，像纯JS一样，则报错。
}
```

# JavaScript 转化为 TypeScript 工具

# 其他

# var 与 let 的区别

https://www.tslang.cn/docs/handbook/variable-declarations.html
https://blog.csdn.net/weixin_43108539/article/details/108514200

```js
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i)
  }, 100 * i)
}
```

```js
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i)
  }, 100 * i)
}
```

# 抽象类与接口的区别

https://baijiahao.baidu.com/s?id=1675962405769465694

# 直接运行 TS 文件

```sh
npm i -g ts-node
ts-node demo.ts
```
