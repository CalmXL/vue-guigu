/* 
  vuex 最核心的模块
*/
import Vue from 'vue';
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

// 声明使用 vuex 插件
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})