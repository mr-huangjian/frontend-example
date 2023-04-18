import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// eslint-disable-next-line
Vue.config.productionTip = false

// 全局配置 axios
// axios.defaults.baseURL = 'http://httpbin.org'

// Vue.prototype.$http = axios
Vue.prototype.$http = axios.create({
  baseURL: 'http://httpbin.org'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
