import Vue from 'vue'
import 'lib-flexible'

import App from './App.vue'
import router from './router'
import store from '@/vuex/store'
import Header from './components/Header/Header'


// ?  全局注册组件 Header
Vue.component('Header', Header)

new Vue({
  render: h => h(App),
  router, // 每个组件中都可以访问 $route 和 $router 即 <route-view> 和
  store,  // 每个组件中都有 $store
}).$mount('#app')
