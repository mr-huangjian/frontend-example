import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },

    { path: '/movie', component: Movie },

    // 获取路径path参数 this.$route.params.mid
    // { path: '/movie/:mid', component: Movie },
    // 获取查询search参数 this.$route.query.name
    // { path: '/movie/:mid?name=hj', component: Movie },

    // 获取路径参数 this.$route.params.mid 或 this.mid
    { path: '/movie/:mid', component: Movie, props: true },

    {
      path: '/about',
      component: About,
      // redirect: '/about/tab1',
      children: [
        // { path: '', redirect: 'tab1' },
        // { path: '', component: Tab1 },
        { path: '/', redirect: 'tab1' },
        { path: 'tab1', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    },

    {
      path: '/main',
      component: Main
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

// 全局前置导航守卫
router.beforeEach((to, from, next) => {
  // https://www.runoob.com/w3cnote/javascript-console-object.html
  console.group('Navigate')
  console.log('from', from.fullPath)
  console.log('to', to.fullPath)
  console.groupEnd()

  // next() // 直接放行
  // next('/login') // 拦截并跳转
  // next(false) // 无法做其他操作

  if (to.path === '/main') {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next(`/login?dest=${to.fullPath}`)
    }
  } else {
    next()
  }
})

export default router
