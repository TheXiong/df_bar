// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.prototype.$axios = axios.create({
  timeout: 1000 * 30,
})

Vue.prototype.$axios.defaults.withCredentials = true;

/**
 * 请求拦截
 */
Vue.prototype.$axios.interceptors.request.use((config) => {
  //config.headers['token'] = Vue.cookie.get('token');
  config.headers['X-Requested-With'] = 'XMLHttpRequest'
  return config
}, error => {
  return Promise.reject(error)
})

/**
 * 响应拦截
 */
Vue.prototype.$axios.interceptors.response.use((response) => {
  const data = response.data;
  if (data.code == "505") { // 401, token失效
    localStorage.removeItem('token')
    router.push({
      name: 'login'
    })
  }
  return response
}, error => {
  localStorage.removeItem('token')
  router.push({
    name: 'login'
  })
  return Promise.reject(error)
})

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('token');
  if (to.meta.requreAuth&&!role && to.path !== '/login') {
    next('/login');
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      });
    } else {
      next();
    }
  }
})


Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
