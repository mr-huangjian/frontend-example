import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('bgc', function (el, binding) {
  el.style.backgroundColor = binding.value
})

new Vue({
  render: h => h(App),
}).$mount('#app')
