
在父组件文件中，修改子组件的样式，使用 `/deep/` 渗透修改子组件的样式
```html
<style lang="less" scoped>

/deep/ h1 {
    color: red;
}
</style>
```

执行字符串包裹的表达式、语句 
[eval](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval)

[Vue生命周期](https://v2.cn.vuejs.org/v2/guide/instance.html#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%9B%BE%E7%A4%BA)

vue2.x中兄弟组件通过EventBus进行数据共享

# 组件通信

父组件与子组件
- 属性传值 `<Component :prop="statement" />`, `props: ['prop']`
- 事件回调 `<Component @event="callback(arg)" />`, `this.$emit('event', arg)`

兄弟组件
- EventBus `export default new Vue()`, `bus.$emit`, `created() { bus.$on }`

---

<!-- TODO -->
[Vue项目中支持可选链（链判断运算符）操作](https://blog.csdn.net/qq_39490750/article/details/129836098)
