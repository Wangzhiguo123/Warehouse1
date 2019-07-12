import Vue from 'vue'
import Router from 'vue-router'
import Parents from '@/components/parents'
import Son from '@/components/son'
import Test1 from '@/components/test1'
import Wzg1 from '@/page/Wzg1'
import Product1 from '@/components/Product1'
import Product2 from '@/components/Product2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'parents',
      component: Parents
    },
    {
      path:'/a',
      name:'son',
      component:Son
    },
    {
      path:'/test1',
      name:'test1',
      component:Test1
    },
    {
      path:'/Wzg1',
      name:'wzg1',
      component:Wzg1
    },
    {
      path:'/p1',
      name:'Product1',
      component:Product1
    },
    {
      path:'/p2',
      name:'Product2',
      component:Product2
    }
  ]
})
// 权限路由
// export const asyncRoutes = [
//   {
//     path:'home',
//     component:home,
//     redirect:'home/index',
//     meta:{role:['0','1'],nav:false//无权访问
//     },
// children:[
//   {
//     path:'/home/index',
//     name:'页面1',
//     component:componentIndex,
//     meta:{role:['1'],nav:true}//有权访问1级
//   },
//   {
//     path: '/home/index',
//     name: '页面2',
//     component: userIndex,
//     meta: { role: ['0'], nav: true }//有权0级
//   },
//   {
//     path:'/home/index2',
//     name:'页面2',
//     component: index2,
//     meta:{role:['1'],nav:true}//有权1级
//   }
//
// ]
// }
// ]
