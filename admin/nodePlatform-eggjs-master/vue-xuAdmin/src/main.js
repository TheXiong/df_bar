// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from './btnPermission'
import ElementUI from 'element-ui'
import axios from './axios/index'
Vue.prototype.$axios=axios

import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/iconfont.css'
import 'font-awesome/css/font-awesome.css'

import App from './App.vue'
import router from './router'
import store from './vuex'
import i18n from './i18n/i18n'

Vue.config.productionTip = false
Vue.use(ElementUI)

//  获取角色信息，根据用户权限动态加载路由
router.beforeEach((to, from, next) => {
  console.log(store.getters.token)
  // debugger

  if (store.getters.token && store.getters.token !== "undefined") {
    // store.dispatch('setToken', store.getters.token)
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (!store.getters.info) {

        !async function getAddRouters () {

          // await store.dispatch('getInfo', store.getters.token)
          // await store.dispatch('newRoutes', store.getters.token)
          // // await store.dispatch('newRoutes', permission)
          // console.log(store.getters.addRouters)
          // await router.addRoutes(store.getters.addRouters)
          // next({path: '/index'})

          axios.get('/user/getUserInfor').then(async function (response) {
            await store.dispatch('getInfo', response.data)
            await store.dispatch('newRoutes', store.getters.info.authorityRouter)
            // await store.dispatch('newRoutes', role)
            console.log(store.getters.addRouters)
            await router.addRoutes(store.getters.addRouters)
            next({path: '/index'})
          }).catch(function (error) {
            console.log(error);
          });
        }()
      } else {
        let is404 = to.matched.some(record => {
          console.log(record);
          if(record.meta.role){
            return store.getters.info.authorityRouter === -1
          }
        })
        if(is404){
          next({path: '/404'})
          return false
        }
        next()
      }
    }
  } else {
    if (to.path === '/login') {
      next()
    }
    next({path: '/login'})

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
  components: {App},
  template: '<App/>'
})
