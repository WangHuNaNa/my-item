/*
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-07 16:55:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-11-11 18:02:35
 * @version: v1.0.0
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui'; 
// import 'element-ui/lib/theme-chalk/index.css'; 

// Vue.use(ElementUI);
import axios from 'axios'; /* 引入axios进行地址访问*/
　　Vue.prototype.$http = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
