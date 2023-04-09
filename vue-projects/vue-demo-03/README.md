
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
