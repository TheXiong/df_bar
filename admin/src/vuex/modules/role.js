import store from '../index'
import router from '../../router/index'
export default {
  state: {
    info: '',  // 每次刷新都要通过token请求个人信息来筛选动态路由
    roleList: [
      {
        level: 1,
        level_name: 'superAdmin',
        level_cnname: '超级管理员'
      },
      {
        level: 2,
        level_name: 'admin',
        level_cnname: '普通管理员'
      },
      {
        level: 0,
        level_name: 'member',
        level_cnname: '普通用户'
      }
    ]
  },
  mutations: {
    getInfo(state, data) {
      if (data.authorityRouter && data.authorityRouter.indexOf(',') != -1) {
        data.authorityRouter = data.authorityRouter.split(",")
      } else if (data.authorityRouter == null) {
        data.authorityRouter = []
      }
      state.info = {
        role: data.role,
        name: data.name,
        mobile: data.mobile,
        integral: data.integral,
        authorityRouter: data.authorityRouter,
        avatar: data.avatar ? data.avatar : "/static/images/logo.png",
        uid: data.id
      }

      sessionStorage.setItem('info', JSON.stringify(store.getters.info))
    },
    // setRole (state, options) {  // 切换角色，测试权限管理
    //   state.info = {
    //     role: options.role,
    //     permissions: options.permissions
    //   }
    //   sessionStorage.setItem('info', JSON.stringify(store.getters.info));
    //   store.dispatch('newRoutes', options.role)
    //   router.addRoutes(store.getters.addRouters)
    //
    // }
  },

  actions: {
    getInfo({ commit }, data) {
      commit('getInfo', data)
    },
    // setRole ({commit}, options){
    //   // 权限测试
    //   commit('setRole', options)
    // }
  }
}
