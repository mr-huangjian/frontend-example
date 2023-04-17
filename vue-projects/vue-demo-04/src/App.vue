<template>
  <div id="app">
    <div id="container">
      <!-- include="Left" 表示仅缓存Left组件 -->
      <!-- include="Left,Right" 格式 -->
      <!-- include 和 exinclude 不能同时使用 -->
      <keep-alive include="MyLeft">
        <component :is="cmpt"></component>
      </keep-alive>
    </div>
    <button @click="showLeft">切换到Left组件</button>
    <button @click="showRight">切换到Right组件</button>

    <Content>
      <!-- v-slot:{name} 只能使用在 <template> 或 Vue 组件上 -->
      <template v-slot:defalut>
        <p>具体内容...</p>
        <p>hhhha</p>
      </template>

      <template #header="scope">
        <h1>这是头部</h1>
        <p>这是头部描述!</p>
        <p>{{ scope }}</p>
      </template>

      <!-- 
        解构
      <template #header="{ msg }">
        <h1>这是头部</h1>
        <p>这是头部描述!</p>
        <p>{{ msg }}</p>
      </template>
      -->


    </Content>

    <p v-color v-bgc="'yellow'">局部自定义指令，第一段</p>
    <p v-color="'blue'">局部自定义指令，第二段</p>

  </div>
</template>

<script>
import Left from "@/components/Left.vue"
import Right from "@/components/Right.vue"
import Content from "@/components/Content.vue"

export default {
  data() {
    return {
      cmpt: 'Left'
    }
  },
  components: {
    Left,
    Right,
    Content,
  },
  methods: {
    showLeft() {
      this.cmpt = 'Left'
    },
    showRight() {
      this.cmpt = 'Right'
    }
  },
  directives: {
    // color: {
    //   bind(el, binding) {
    //     el.style.color = binding.value || 'red'
    //   },
    //   update(el, binding) {
    //     el.style.color = binding.value
    //   },
    // },
    color(el, binding) {
      el.style.color = binding.value || 'red'
    }
  }
}
</script>

<style lang="less">
button {
  padding: 5px 10px;
  margin: 10px;
}
#container {
  display: flex;
  justify-content: space-between;
}
</style>
