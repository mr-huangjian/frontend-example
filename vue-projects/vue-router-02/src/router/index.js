import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/movie', component: Movie },
    { path: '/about', component: About }
  ]
})

export default router
