/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2018/12/8
 * Description: 文件描述
 */
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
  routeNmae: {
    home: '主页',
    article: '文章管理',
    publishArticle: '发表文章',
    publishArticleEditor: '发表文章-富文本',
    articleList: '文章列表',
    commentList: '评论列表',
    userManage: '用户管理',
    addUser: '添加账号',
    editUser: '修改资料',
    userList: '用户列表',
    editPassworld: '修改密码',

    editor: '编辑器',
    markdown: 'markdown',
    wangeditor: 'wangeditor',
    systemSettings: '系统设置',
    navMenu : '导航菜单',
    systemManage: "系统管理",
    organizeManage: "组织权限管理",
    unitManage: "单位管理",
    personnelManage: "部门人员管理",
    roleManage: "角色管理",
    systemSetting :"系统配置项",
  },
  rightMenu: {
    close: '关闭',
    closeOther: '关闭其他',
    closeAll: '全部关闭'
  },
  role: {
    superAdmin: '超级管理员',
    admin: '管理员',
    ordinary: '普通用户'
  },
  userDropdownMenu: {
    basicInfor: '基本资料',
    changePassword: '修改密码',
    logout: '退出'
  },

  ...zhLocale   //  合并element-ui内置翻译
}

export default cn
