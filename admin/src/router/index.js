import en from '../i18n/lang/en'
import cn from '../i18n/lang/cn'
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Layout from '@/views/layout/layout'
import HomeMain from '@/views/index/mainIndex'

// 不是必须加载的组件使用懒加载
const NotFound = () => import('@/page404')

Vue.use(Router)
let routeNmae = en.routeNmae
let roleNmae = cn.routeNmae
let defaultRouter = [
  {
    path: '/',
    redirect: '/index',
    hidden: true,
    children: []
  },
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true,
    children: []
  },
  {
    path: '/index',
    iconCls: 'fa fa-dashboard', // 图标样式class
    name: routeNmae.home,
    component: Layout,
    alone: true,
    children: [
      {
        path: '/index',
        iconCls: 'fa fa-dashboard', // 图标样式class
        name: '主页',
        component: HomeMain,
        children: []
      }
    ]
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    hidden: true,
    children: []
  },
]

let addRouter = [
  {
    r_id: 100001,
    r_name: roleNmae.userManage,
    path: '/',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'userManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    children: [
      {
        r_id: 100002,
        r_name: roleNmae.userList,
        path: '/userList',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: 'userList',
        component: () => import('@/views/user/userList'),
        meta: { role: ['superAdmin', 'admin'] },
        children: []
      },
      {
        r_id: 100003,
        r_name: roleNmae.editPassworld,
        path: '/editPassworld',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: 'editPassworld',
        component: () => import('@/views/user/editPassworld'),
        meta: { role: ['superAdmin', 'admin'] },
        children: []
      },

    ]
  },
  {
    r_id: 100004,
    r_name: roleNmae.shopManage,
    path: '/shopList',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'shopManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    alone: true,
    children: [
      {
        r_id: 100005,
        r_name: roleNmae.shopList,
        path: '/shopList',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: 'shopList',
        component: () => import('@/views/shop/list'),
        meta: { role: ['superAdmin', 'admin'] },
        children: []
      }
    ]
  },
  {
    r_id: 100006,
    r_name: roleNmae.orderManage,
    path: '/orderList',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'orderManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    alone: true,
    children: [
      {
        r_id: 100007,
        r_name: roleNmae.orderList,
        path: '/orderList',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: 'orderList',
        component: () => import('@/views/order/list'),
        meta: { role: ['superAdmin', 'admin'] },
        children: []
      }
    ]
  },
  {
    r_id: 100008,
    r_name: roleNmae.exchangeManage,
    path: '/exchangeList',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'exchangeManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    alone: true,
    children: [
      {
        r_id: 100009,
        r_name: roleNmae.exchangeList,
        path: '/exchangeList',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: 'exchangeList',
        component: () => import('@/views/exchange/list'),
        meta: { role: ['superAdmin', 'admin'] },
        children: []
      }
    ]
  },
  {
    r_id: 100010,
    r_name: roleNmae.giftManage,
    path: '/giftList',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'giftManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    alone: true,
    children: [
      {
        r_id: 100011,
        r_name: roleNmae.giftList,
        path: '/giftList',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: 'giftList',
        component: () => import('@/views/gift/list'),
        meta: { role: ['superAdmin', 'admin'] },
        children: []
      }
    ]
  },
  {
    r_id: 100012,
    r_name: roleNmae.integralManage,
    path: '/integralList',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'integralManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    alone: true,
    children: [
      {
        r_id: 100013,
        r_name: roleNmae.integralList,
        path: '/integralList',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: 'integralList',
        component: () => import('@/views/integral/list'),
        meta: { role: ['superAdmin', 'admin'] },
        children: []
      }
    ]
  },
  {
    r_id: 100014,
    r_name: roleNmae.serviceManage,
    path: '/serviceEdit',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'serviceManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    alone: true,
    children: [
      {
        r_id: 100015,
        r_name: roleNmae.serviceEdit,
        path: '/serviceEdit',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: 'serviceEdit',
        component: () => import('@/views/service/edit'),
        meta: { role: ['superAdmin', 'admin'] },
        children: []
      }
    ]
  },
  {
    r_id: 100016,
    r_name: roleNmae.feedbackManage,
    path: '/feedbackList',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'feedbackManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    alone: true,
    children: [
      {
        r_id: 100017,
        r_name: roleNmae.feedbackList,
        path: '/feedbackList',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: 'feedbackList',
        component: () => import('@/views/feedback/list'),
        meta: { role: ['superAdmin', 'admin'] },
        children: []
      }
    ]
  },
  {
    r_id: 100018,
    r_name: roleNmae.activityManage,
    path: '/activityManage',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'activityManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    alone: true,
    children: [
      {
        r_id: 100019,
        r_name: roleNmae.activityContent,
        path: '/activityManage',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: 'activityContent',
        component: () => import('@/views/activity/index'),
        meta: { role: ['superAdmin', 'admin'] },
        children: []
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true,
    meta: { role: ['superAdmin', 'admin'] },
    children: []
  },
]

export default new Router({
  routes: defaultRouter
})
export { defaultRouter, addRouter }
