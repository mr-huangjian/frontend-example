import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// eslint-disable-next-line
Vue.config.productionTip = false

// 以下两种配置都不推荐，因为 Vue 与 Network 有耦合！
// 全局配置 axios
// axios.defaults.baseURL = 'http://httpbin.org'

// Vue.prototype.$http = axios
Vue.prototype.$http = axios.create({
  baseURL: 'http://httpbin.org'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
