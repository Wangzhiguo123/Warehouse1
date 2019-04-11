// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from '../node_modules/axios'
// import api from './index'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
// Vue.use(api)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  // api,
  components: { App },
  template: '<App/>'
})
