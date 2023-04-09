import Vue from 'vue'
import App from './App.vue'

import GlobalHeader from '@/components/GlobalHeader.vue'
Vue.component('GlobalHeader', GlobalHeader)

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
})

// 两种挂载方法都可以，将App组件替换掉#app元素
// new Vue({
//     render: h => h(App),
// }).$mount('#app')
