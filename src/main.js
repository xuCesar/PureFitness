// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import 'lib-flexible/flexible'
import * as utils from '@/scripts/utils'
import Wechat from '@/scripts/wechat'

Vue.config.productionTip = false

Object.defineProperty(Vue.prototype, 'utils', {
  value: utils
})

Object.defineProperty(Vue.prototype, '$_wechat', {
  value: Wechat
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
