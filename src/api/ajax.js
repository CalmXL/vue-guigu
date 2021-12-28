/* 
  重新封装axios: 一个能够发送 ajax 请求的模块
    1. 统一处理请求异常
    2. 异步请求成功的数据不是response, 而是response.data
    3. 对post请求参数进行ulencode处理, 而不使用默认的json方式(后台接口不支持)
    4. 配置请求超时的时间
    5. 通过请求头携带token数据
    6.使用 mint-ui 实现 加载效果
*/
import axios from 'axios'
import qs from 'qs'
import { Indicator } from 'mint-ui'
// 创建一个axios实例
const instance = axios.create({
  // baseURL:'http://localhost:4000', // 出跨域请求问题
  baseURL:'/4000',
  //  4. 配置请求超时的时间
  timeout: 4000
})

instance.interceptors.request.use((config)=>{
  // 6.打开加载效果
  Indicator.open();
  // 3. 对post请求参数进行ulencode处理, 而不使用默认的json方式(后台接口不支持)
  if(config instanceof Object){
    config.data = qs.stringify(config.data)
  }
  return config
})

instance.interceptors.response.use( 
  response =>{
    // 关闭加载效果
    Indicator.close();
    // 2. 异步请求成功的数据不是response, 而是response.data
    return response.data
  },error => {
    // 关闭加载效果
    Indicator.close();
    // 1. 统一处理请求异常
    alert(error.message)
    return new Promise(()=>{})
  })

export default instance