// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './api/index'
import utils from './utils/index'

// 配置百度富文本编辑器ueditor
import '../static/ueditor1.4.3.3-utf8-php/ueditor.config.js'
import '../static/ueditor1.4.3.3-utf8-php/ueditor.all.js'
import '../static/ueditor1.4.3.3-utf8-php/ueditor.parse.min.js'
import '../static/ueditor1.4.3.3-utf8-php/lang/zh-cn/zh-cn.js'

// 将API方法绑定到全局
Vue.prototype.$api = api
Vue.prototype.$utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
