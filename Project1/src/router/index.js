import Vue from 'vue'
import Router from 'vue-router'
import Parents from '@/components/parents'
import Son from '@/components/son'
import Test1 from '@/components/test1'

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
