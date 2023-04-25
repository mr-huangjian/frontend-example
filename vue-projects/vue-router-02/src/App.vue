<template>
  <div class="app-container">
    <h2>App 组件</h2>

    <!-- <a href="#/home">首页</a>
    <a href="#/movie">电影</a>
    <a href="#/about">关于</a> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>
    <router-link to="/movie/1">电影/雷神</router-link>
    <router-link to="/movie/2">电影/复联</router-link>
    <router-link to="/about">关于</router-link>

    <hr>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  created () {
    console.log('App created!')

    // location.href

    // window.open
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Window/open
    // https://www.runoob.com/jsref/met-win-open.html
  }
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
