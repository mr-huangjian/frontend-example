<template>
 <div class="home-container">
  <van-nav-bar title="黑马头条" fixed />
  <!-- ul>li{$}*100 -->

  <ArticleInfo
    v-for="item in list"
    :key="item.art_id"
    :title="item.title"
    :author="item.aut_name"
    :cmtCount="item.comm_count"
    :time="item.pubdate"
    :cover="item.cover"
    @click="showInfo(item.art_id)"
  ></ArticleInfo>

 </div>
</template>

<script>
import { getArticleListAPI } from '@/api/articleAPI'
import ArticleInfo from '@/components/Article/ArticleInfo.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      page: 1,
      limit: 10,
      list: []
    }
  },
  components: {
    ArticleInfo
  },
  created () {
    this.getlist()
  },
  methods: {
    async getlist () {
      const { data } = await getArticleListAPI(this.page, this.limit)
      this.list = data
    },
    showInfo (aid) {
      console.log(aid)
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
  .van-nav-bar {
    background-color: #007bff;
  }
  /deep/ .van-nav-bar__title {
    color: white
  }
}
</style>
