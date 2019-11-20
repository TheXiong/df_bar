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
    r_id: 100026,
    r_name: roleNmae.userManage,
    path: '/',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'userManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    children: [
      {
        r_id: 100029,
        r_name: roleNmae.userList,
        path: '/userList',
        iconCls: 'el-icon-edit-outline', // 图标样式class
        name: 'userList',
        component: () => import('@/views/user/userList'),
        meta: { role: ['superAdmin', 'admin'] },
        children: []
      },
      {
        r_id: 100030,
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
    r_id: 100026,
    r_name: roleNmae.shopManage,
    path: '/',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'shopManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    children: [
      {
        r_id: 100027,
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
    r_id: 100026,
    r_name: roleNmae.orderManage,
    path: '/',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'orderManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    children: [
      {
        r_id: 100027,
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
    r_id: 100026,
    r_name: roleNmae.serviceManage,
    path: '/',
    iconCls: 'el-icon-tickets', // 图标样式class
    name: 'serviceManage',
    component: () => import('@/views/layout/layout'),
    meta: { role: ['superAdmin', 'admin'] },
    children: [
      {
        r_id: 100027,
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
