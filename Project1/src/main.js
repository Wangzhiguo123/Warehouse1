// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import api from './index'
// 配置请求信息
var $axios = axios.create({
  baseURL: 'https://easy-mock.com/mock/5caff09431c675529c365621/example',
  timeout: '3000',  //请求超时时间
  headers: {'X-Custom-Header': 'foobar'}     //header传值，例如：Authorization
})
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
// Vue.use(api)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // axios,
  // api,
  components: { App },
  template: '<App/>'
})
