// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUI)

const store = new Vuex.Store({
  // store仓库下的store状态值
  state:{
    a:6,
    b:78,
    ajax:[
      {name:'小明',age:'17'},
      {name:'小红',age:'20'},
      {name:'豹子东',age:'25'},
      {name:'小刚',age:'55'}
    ]
  },
  mutations:{
    increment(state,value){
      state.a++
    }
  },
  getters:{
    newa:state => state.a * 10,
    newb:state=>state.a*2
  },
  // 接收dispatch传过来的方法和参数
  // 用来解决异步流程来改变state数据。
  actions:{
    getParamSync(context,Object){
setTimeout(()=>{
  context.commit('getParam',Object)
},2000)
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
