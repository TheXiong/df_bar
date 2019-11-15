import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../components/login.vue'], resolve),
    },
    {
      path: '/admin',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: {
        title: '自述文件'
      },
      children: [
        {
            path: '/dashboard',
            name:'dashboard',
            component: resolve => require(['../components/dashboard.vue'], resolve),
            meta: {
              title: '系统首页',
              requreAuth:true,
            }
          },{
          path: '/user',
          component: resolve => require(['../components/user.vue'], resolve),
          meta: {
            title: '用户',
            requreAuth:true,
          }
        },
        {
          path: '/article',
          component: resolve => require(['../components/article.vue'], resolve),
          meta: {
            title: '内容',
            requreAuth:true,
          }
        },
        {
          path: '/businesscard',
          component: resolve => require(['../components/businesscard.vue'], resolve),
          meta: {
            title: '名片',
            requreAuth:true,
          }
        },
        {
          path: '/apisecurity',
          component: resolve => require(['../components/apisecurity.vue'], resolve),
          meta: {
            title: '接口密钥',
            requreAuth:true,
          }
        },
        {
          path: '/comment',
          component: resolve => require(['../components/comment.vue'], resolve),
          meta: {
            title: '评论管理',
            requreAuth:true,
          }
        },
        {
          path: '/dictionary',
          component: resolve => require(['../components/dictionary.vue'], resolve),
          meta: {
            title: '字典管理',
            requreAuth:true,
          }
        },
        {
          path: '/dictionarydetail',
          name:"dictionarydetail",
          component: resolve => require(['../components/dictionarydetail.vue'], resolve),
          meta: {
            title: '字典明细管理',
            requreAuth:true,
          }
        },
        {
          path: '/file',
          name:'file',
          component: resolve => require(['../components/file.vue'], resolve),
          meta: {
            title: '文件管理',
            requreAuth:true,
          }
        },
        {
          path: '/folder',
          component: resolve => require(['../components/folder.vue'], resolve),
          meta: {
            title: '我的文件夹',
            requreAuth:true,
          }
        },
        {
          path: '/loginlog',
          component: resolve => require(['../components/loginlog.vue'], resolve),
          meta: {
            title: '登录日志',
            requreAuth:true,
          }
        },
        {
          path: '/module',
          component: resolve => require(['../components/module.vue'], resolve),
          meta: {
            title: '菜单管理',
            requreAuth:true,
          }
        },
        {
          path: '/parameter',
          component: resolve => require(['../components/parameter.vue'], resolve),
          meta: {
            title: '参数设置',
            requreAuth:true,
          }
        },
        {
          path: '/role',
          component: resolve => require(['../components/role.vue'], resolve),
          meta: {
            title: '角色管理',
            requreAuth:true,
          }
        },
        {
          path: '/system',
          component: resolve => require(['../components/system.vue'], resolve),
          meta: {
            title: '子系统管理',
            requreAuth:true,
          }
        },
      ],
    }
  ]
})
