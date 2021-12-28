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
  /* 
    获取地址的异步action
  */
  async getAddress({commit, state}) {
    const { longitude, latitude } = state
    const result = await reqAddress(longitude, latitude)
    if(result.code === 0 ){
      commit(RECEIVE_ADDRESS, result.data)
    }
  },
   /* 
    获取商品分类数组异步action
  */
  async getCategorys({commit}) {
    console.log('执行actions')
    // 发送异步请求
    const result = await reqCategory()
    //  请求成功后,提交mutation,更新数据
    if(result.code === 0 ){
      commit(RECEIVE_CATEGORYS, result.data) // 内部同步调用mutation,更新状态
      // callback()
    }
  },
  /* 
    获取附近商家数组的异步action
  */
  async getShops({commit, state}) {
    const { longitude, latitude } = state
    const result = await reqShops({longitude, latitude})
    if(result.code === 0 ){
      commit(RECEIVE_SHOPS, result.data)
    }
  },

}