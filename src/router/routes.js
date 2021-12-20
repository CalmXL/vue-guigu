/* 
  存储 router数组的模块
*/
import Profile from '@/pages/Profile/Profile'
import MSite from '@/pages/MSite/MSite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'

export default [
  {
    path:'/profile',
    component: Profile
  },
  {
    path:'/msite',
    component: MSite
  },
  {
    path:'/search',
    component: Search
  },
  {
    path:'/order',
    component: Order
  },
  {
    path:'/',
    component: MSite
  },
]