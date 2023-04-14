
> 本模板项目，默认支持可选链语法！不用在按下面的步骤操作了！


# JS optional-chaining 可选链

1. 安装 `@babel/plugin-proposal-optional-chaining` 插件
```bash
npm i @babel/plugin-proposal-optional-chaining -D
```

2. 在 `babel.config.js` 文件添加插件配置
```js
plugins: [
    '@babel/plugin-proposal-optional-chaining'
]
```

3. 在代码中使用 **`?.`** [可选链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining) 

以下为正确用法 ✅
```js
const value = obj.val?.prop
const value = obj.val?.[expr]
const value = obj.func?.(args)
```

以下为错误用法
```js
❌ obj.val?
❌ obj.val?.
❌ obj.val?.prop = value
❌ obj.val?.[expr] = value
❌ obj.func?(args)
```

4. JS 与 Swift 的可选链用法区别，以下是 Swift 可选链使用方法

```swift
const value = self.dict?.key
self.dict?.key = value
self.method?()
```

5. 还有一个是空值合并 **`??`**，当左侧值为 null 或 undefined 时，返回 ?? 符号右边的值

```bash
npm i @babel/plugin-proposal-nullish-coalescing-operator -D
```

```js
'hello world' ?? 'hi'   // 'hello world'
'' ?? 'hi'              // ''
false ?? 'hi'           // false
null ?? 'hi'            // 'hi'
undefined ?? 'hi'       // 'hi'
```
