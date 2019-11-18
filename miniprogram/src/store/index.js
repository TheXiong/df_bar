import Vue from 'vue'
import Vuex from 'vuex'
import fly from '../fly.js'
// import vuetron from 'vuetron '
import createPersistedState from 'vuex-persistedstate'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    // 保持会话持久
    createPersistedState({
      storage: {
        getItem: key => wx.getStorageSync(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) => wx.getStorageSync(key, value),
        removeItem: key => wx.clearStorageSync(key)
      }
    })
  ],
  state: {
    /**
     * 商家名字
    commdityShoppingName: '',
    /**
     * 已经选购商品
     */
    commdityShopping: [],
    /**
     * 商家订单
     */
    commdityOrder: [],
    /**
     * 用户地址 后期使用数据库存储
     */
    userAddres: [],
    userOrderAddres: 0,
    // 意见反馈
    feedbackList: [],
    userInfo: {}
  },

  mutations: {
    /**
     * 设置商家名称
     * @param state
     * @param commdityShoppingName
     */
    setCommdityShoppingName (state, commdityShoppingName) {
      state.commdityShoppingName = commdityShoppingName
    },
    /**
     * 设置商家购物车商品
     * @param state
     * @param commdityShopping
     */
    setCommdityShopping (state, commdityShopping) {
      state.commdityShopping.push({...commdityShopping,num:1})
    },
    /**
     * 商家购物车商品添加
     * @param state
     * @param commdityShoppingIndex
     */
    setCommdityShoppingAdd (state, commdityShoppingIndex) {
      state.commdityShopping[commdityShoppingIndex].num++
    },
    /**
     * 商家购物车减少
     * @param state
     * @param commdityShoppingIndex
     */
    setCommdityShoppingLess (state, commdityShoppingIndex) {
      if (state.commdityShopping[commdityShoppingIndex].num >= 1) {
        state.commdityShopping[commdityShoppingIndex].num--
        if (state.commdityShopping[commdityShoppingIndex].num === 0) {
          _.pullAt(state.commdityShopping, commdityShoppingIndex)
        }
      }
    },
    /**
     * 清空商家购物车
     * @param state
     */
    setCommdityShoppingClear (state) {
      state.commdityShopping = []
    },
    /**
     * 将购物车的内容变成订单
     * @param state
     * @param commdityOrder
     */
    setCommdityOrder (state, commdityOrder) {
      commdityOrder.map(order => {
        order.total = order.order_goods.reduce((prev, current) => {
          prev += current.integral * current.number
          return prev
        }, 0)
        order.join_time = (new Date(order.join_time * 1000)).toLocaleString()
      })

      state.commdityOrder = commdityOrder
    },
    /**
     * 设置用户收货地址
     * @param state
     * @param userAddres
     */
    setUserAddres (state, userAddres) {
      let userAddresClone = _.clone(userAddres)
      state.userAddres.push(userAddresClone)
    },
    /**
     * 设置订单收货地址
     * @param state
     * @param userOrderAddres
     */
    setUserOrderAddres (state, userOrderAddres) {
      state.userOrderAddres = userOrderAddres
    },
    /**
     * 更新用户收货地址
     * @param state
     * @param userAddress
     */
    updateUserAddress (state, userAddress) {
      state.userAddres[userAddress.index].addressName = userAddress.addressName
      state.userAddres[userAddress.index].addressPhone = userAddress.addressPhone
      state.userAddres[userAddress.index].addressDetail = userAddress.addressDetail
    },
    /**
     * 删除用户收货地址
     * @param state
     * @param userAddressIndex
     */
    delUserAddress (state, userAddressIndex) {
      _.pullAt(state.userAddres, userAddressIndex)
    },
    /**
     * 删除用户订单
     * @param state
     * @param commdityOrderIndex
     */
    delCommdityOrder (state, commdityOrderIndex) {
      _.pullAt(state.commdityOrder, commdityOrderIndex)
    },
    /**
     * 增加意见反馈
     * @param state
     * @param feedbackList
     */
    addFeedbackList (state, feedbackList) {
      let feedbackListClone = _.clone(feedbackList)
      state.feedbackList.push(feedbackListClone)
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo
    }
  },
  /**
   * 下面调用上面的方法
   */
  actions: {
    setCommdityShoppingName ({ commit }, commdityShoppingName) {
      commit('setCommdityShoppingName', commdityShoppingName)
    },
    setCommdityShopping ({commit}, commdityShopping) {
      commit('setCommdityShopping', commdityShopping)
    },
    setCommdityShoppingAdd ({commit}, commdityShoppingIndex) {
      commit('setCommdityShoppingAdd', commdityShoppingIndex)
    },
    setCommdityShoppingLess ({commit}, commdityShoppingIndex) {
      commit('setCommdityShoppingLess', commdityShoppingIndex)
    },
    setCommdityShoppingClear ({commit}) {
      commit('setCommdityShoppingClear')
    },
    setCommdityOrder ({commit}, commdityOrder) {
      commit('setCommdityOrder', commdityOrder)
    },
    setUserAddres ({commit}, userAddres) {
      commit('setUserAddres', userAddres)
    },
    setUserOrderAddres ({commit}, userOrderAddres) {
      commit('setUserOrderAddres', userOrderAddres)
    },
    updateUserAddress ({commit}, userAddress) {
      commit('updateUserAddress', userAddress)
    },
    delUserAddress ({commit}, userAddressIndex) {
      commit('delUserAddress', userAddressIndex)
    },
    delCommdityOrder ({commit}, commdityOrderIndex) {
      commit('delCommdityOrder', commdityOrderIndex)
    },
    addFeedbackList ({commit}, addFeedbackList) {
      commit('addFeedbackList', addFeedbackList)
    },
    getNewUserInfo ({commit}) {
      return new Promise((resolve, reject) => {
        fly
          .post('/u/information', {})
          .then(res => {
            let userInfo = res.data.data
            wx.setStorageSync('userInfo', userInfo)
            commit('setUserInfo', userInfo)
            resolve()
          })
          .catch(() => {
            try {
              wx.showToast({
                title: '获取用户信息失败，请重新登录',
                icon: 'none',
                duration: 2000
              })
              wx.removeStorageSync('token')
              wx.navigateTo({
                url: '../login/main'
              })
            } catch (e) {}
          })
      })
    }
  }
})
