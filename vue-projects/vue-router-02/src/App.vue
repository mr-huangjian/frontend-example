<template>
  <div class="app-container">
    <h2>App 组件</h2>

    <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a>

    <hr>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
}
</style>
