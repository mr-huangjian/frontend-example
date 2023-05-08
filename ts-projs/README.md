# TS 的优势

1. TS 是 JS 的超集，包含了 JS 的所有特性
2. TS 支持类型系统，可以在编译阶段就发现大部分错误
3. TS 支持最新的 JS 语法特性，如 ES6、ES7、ES8、ES9、ES10
4. TS 支持代码静态检查

---

5. TS 支持非常完善的编辑器智能提示，如 VSCode
6. TS 支持声明文件，兼容第三方库
7. TS 支持代码跳转

# 通过 node 直接运行 ts 文件

```
npm i -g ts-node
```

```
ts-node index.ts
```

# 数组

```ts
let numbers: number[] = [1, 2, 3, 4, 5]
let strings: Array<string> = ['a', 'b', 'c']
let arr: (number | string)[] = [1, 'a', 2, 'b'] // 联合类型，数组中的元素可以是 number 或 string
```

```ts
let arr1: number | string[] = 1
let arr2: number | string[] = ['a', 'b', 'c'] // 联合类型，即可以是字符串数组，也可以是 number
```

# 函数

```ts
function add(a: number, b: number): number {} // 必传参数
function add(a: number, b?: number): number {} // 可选参数，必选参数不能位于可选参数后！
function add(a: number, b: number = 10): number {} // 参数默认值
```

```ts
function test(arg: number) {} // 返回值类型可以省略，TS 会自动推断
function test(arg: number | string): void {}
```

```ts
(method) Console.log(...data: any[]): void //可变参数
```

# 对象

```ts
let data1: Object = {}
let data2: object = {}
let data3: {} = {}
let data4: { [key: string]: any } = {} // 好像没啥用
```

```ts
let person: { name: string; age: number; say(): void; run: () => void } = {
  name: 'Jack',
  age: 18,
  say() {},
  run: () => {}
}
```

```ts
interface IPerson {
  name: string // `name: string;` 分号可以省略
  age: number
  say(): void
  run: () => void
}

let person: IPerson = {
  name: 'Jack',
  age: 18,
  say() {},
  run: () => {}
}
```

```ts
interface Point2D {
  x: number
  y: number
}

// 继承
interface Point3D extends Point2D {
  z: number
}
```

# 元组

元组是一种特殊的数组，它限定了数组元素的个数，以及每个元素的类型

```ts
// 经纬度
let position: [number, number] = [31.22, 121.48]
position[0]
position[1]
position.push(123) // 会报错
```

# tsconfig.json

```
tsc --init // 生成 tsconfig.json
```

# 类型推论

诸如以下两种情况：

1. 声明变量并初始化时，TS 会自动推断变量的类型（如果声明但没有初始化，自动推断为 any 类型）
2. 决定函数的返回值类型时，TS 会自动推断函数返回值的类型

TS 会自动推断变量的类型，这种机制称为类型推论，可以省略变量的类型声明

```ts
let age = 0 // 自动推断 age 为 number 类型
age = '18'
```

```ts
// 自动推断函数返回值为 number 类型
function add(a: number, b: number) {
  return a + b
}
```

# 类型断言，即类型转换 as

```ts
let aLink = document.getElementById('aLink')
aLink.href // 报错，因为 aLink 的类型是 HTMLElement
```

```ts
let aLink = document.getElementById('aLink') as HTMLAnchorElement
aLink.href = 'https://www.baidu.com'
```

```ts
let aLink = <HTMLAnchorElement>document.getElementById('aLink')
aLink.href = 'https://www.baidu.com'
```

- 如何知道 a 标签的类型是 HTMLAnchorElement？
- 打开 Chrome 开发者面板，先在 Elements 中选中一个 a 标签，然后切换到控制台输入 console.dir($0)，找到 `__proto__`，即可看到 a 标签的类型
- 或者在官方文档中找到 DOM 接口的定义，如 [a](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)

# 字面量类型

```ts
const a = 'Hi' // a 在 TS 中的类型为 'Hi'，而不是 string
```

```ts
function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
  console.log('direction', direction)
}
```

# 枚举

```ts
enum Direction {
  Up = 'up',
  Down = 'down'
}
```
