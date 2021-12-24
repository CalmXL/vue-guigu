/* 
  包含n个可以异步更新状态的模块
  可以包含异步操作,
  需要store.dispatch()调用
*/
import {
  reqAddress,
  reqCategory,
  reqShops,
} from '../api'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
} from './mutations-types'


export default {

  async getAddress({commit, state}) {
    const { longitude, latitude } = state
    const result = await reqAddress(longitude, latitude)
    if(result.code === 0 ){
      commit(RECEIVE_ADDRESS, result.data)
    }
  },
  async getCategory({commit}) {
    const result = await reqCategory()
    if(result.code === 0 ){
      commit(RECEIVE_CATEGORYS, result.data)
    }
  },
  async getShops({commit, state}) {
    const { longitude, latitude } = state
    const result = await reqShops(longitude, latitude)
    if(result.code === 0 ){
      commit(RECEIVE_SHOPS, result.data)
    }
  },

}