<template>
  <div id="app">
    <router-view></router-view>

    <!-- https://vant-contrib.gitee.io/vant/#/zh-CN/tabbar#lu-you-mo-shi -->

    <van-tabbar route fixed>
      <van-tabbar-item to="/" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  // 占满屏幕
  // width: 100%;
  // height: 100%;
  // position: absolute;
  background-color: #efffff;
}
</style>
