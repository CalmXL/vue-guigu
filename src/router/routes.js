/* 
  存储 router数组的模块
*/
import Profile from '@/pages/Profile/Profile'
import MSite from '@/pages/MSite/MSite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Login from '@/pages/Login/Login'

export default [
  {
    path:'/profile',
    component: Profile,
    meta: { isShowFooter: true}
  },
  {
    path:'/msite',
    component: MSite,
    meta: { isShowFooter: true}
  },
  {
    path:'/search',
    component: Search,
    meta: { isShowFooter: true}
  },
  {
    path:'/order',
    component: Order,
    meta: { isShowFooter: true}
  },
  {
    path:'/login',
    component: Login
  },
  {
    path:'/',
    component: MSite,
    meta: {isShowFooter: true}
  },
]