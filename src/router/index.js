/*
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-07 16:55:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-08-27 08:46:44
 * @version: v1.0.0
 */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
