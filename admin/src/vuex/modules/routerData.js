import { defaultRouter, addRouter } from '@/router/index'
import store from '../index'

const routerData = {
  state: {
    routers: [],
    addRouters: []
  },
  mutations: {
    setRouters: (state, routers) => {
      state.addRouters = routers  // 保存动态路由用来addRouter
      state.routers = defaultRouter.concat(routers) // 所有有权限的路由表，用来生成菜单列表
    }
  },
  actions: {
    newRoutes({ commit }, userRole) {
      //  通过递归路由表，删除掉没有权限的路由
      function eachSelect(routers, userRole) {
        for (let j = 0; j < routers.length; j++) {
          if (routers[j].meta && routers[j].meta.role && routers[j].meta.role.indexOf(userRole) === -1) {
            routers.splice(j, 1)
            j = j - 1
          }
          if (routers[j] && routers[j].children && routers[j].children.length) {
            eachSelect(routers[j].children, userRole)
            if (!routers[j].children.length) { //上面删除过后，在判断length
              routers.splice(j, 1)
              j = j - 1
            }
          }
        }
      }

      eachSelect(addRouter, userRole)

      commit('setRouters', addRouter)
    }
  }
}

export default routerData
