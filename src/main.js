import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/cssreset.css' //样式重置
import filters from '@/common/filter.js' //全局filter
import './common/directive.js' //自定义指令
import util from '@/common/util.js' //公共方法
import * as https from '@/common/http.js'
import renderTree from './common/render'
import store from './store/index.js' //vuex全局store
import Global from './common/component'

Vue.use(Global)
Vue.use(ElementUI)
Vue.use(filters)
Vue.config.productionTip = false
window.eventBus = new Vue()
window.myGet = Vue.prototype.myGet = https.myGet
window.myPost = Vue.prototype.myPost = https.myPost
window.myPut = Vue.prototype.myPut = https.myPut
window.myDelete = Vue.prototype.myDelete = https.myDelete
Vue.prototype.util = util
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
