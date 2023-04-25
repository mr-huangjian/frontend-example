# 创建本项目

```sh
npm init vite-app vue3-proj # 创建项目
npm i less -D # 启用 less
```

[`CSS  :root`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)

# Vue 数据共享的方法

- 父传子组件共享数据：`v-bind:prop="data"` 即 `:prop="data"`
- 子传父组件共享数据：`v-on:event="method"` 即 `@event="method"`
- 父子组件双向共享数据：`v-model="data"`
- 后代向下组件共享数据：`provide` & `inject`
- 全局共享数据：`Event Bus` & `Vuex`

# 向下共享数据

使用 `provide` & `inject` 向下共享数据

`Top.vue`

```js
import { computed } from 'vue'
export default {
  data() {
    return {
      foo: 'bar'
    }
  },
  provide() {
    return {
      foo: computed(() => this.foo)
    }
  }
}
```

`Sub.vue`

```js
<template>
  <div>{{ foo }}</div>
</template>
<script>
export default {
  inject: ['foo']
}
</script>
```
