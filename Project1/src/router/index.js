import Vue from 'vue'
import Router from 'vue-router'
import Parents from '@/components/parents'
import Son from '@/components/son'

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
    }
  ]
})
