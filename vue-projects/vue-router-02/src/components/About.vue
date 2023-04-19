<template>
  <div class="about-container">
    <h3>About 组件</h3>

    <!-- 子级路由链接 -->
    <span>嵌套路由演示</span>&nbsp;&nbsp;

    <router-link to="/about/tab1">tab1</router-link>
    <router-link to="/about/tab2">tab2</router-link>

    <hr />

    <!-- 子级路由占位符 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'AboutComponent'
}
</script>

<style lang="less" scoped>
.about-container {
  min-height: 200px;
  background-color: skyblue;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
