/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2018/12/8
 * Description: 文件描述
 */

import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
  routeNmae: {
    home: 'home',
    addUser: 'addUser',
    editUser: 'editUser',
    userList: 'userList',
    commentList: 'commentList',
    userManage: 'userManage',
    editPassworld: 'editPassworld',

    shopManage:'shopManage',
    shopList:'shopList',

    orderManage:'orderManage',
    orderList: 'orderList',

    serviceManage: 'serviceManage',
    serviceEdit: 'serviceEdit'

  },
  rightMenu: {
    close: 'close',
    closeOther: 'closeOther',
    closeAll: 'closeAll'
  },
  role: {
    superAdmin: 'superAdmin',
    admin: 'admin',
    ordinary: 'ordinary'
  },
  userDropdownMenu: {
    basicInfor: 'basicInfor',
    changePassword: 'changePassword',
    logout: 'logout'
  },

  ...enLocale   //  合并element-ui内置翻译
}

export default en
