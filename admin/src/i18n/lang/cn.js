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
    userManage: '用户管理',
    addUser: '添加账号',
    editUser: '修改资料',
    userList: '用户列表',
    editPassworld: '修改密码',

    shopManage: '商品管理',
    shopList: '商品列表',

    orderManage: '订单管理',
    orderList: '订单列表',

    serviceManage: '客服管理',
    serviceEdit: '客服编辑',

    feedbackManage: '反馈管理',
    feedbackList: '反馈列表',

    integralManage: '积分管理',
    integralList: '积分日志',

    exchangeManage: '兑换管理',
    exchangeList: '兑换列表',

    giftManage:'赠送管理',
    giftList: '赠送列表'
  },
  rightMenu: {
    close: '关闭',
    closeOther: '关闭其他',
    closeAll: '全部关闭'
  },
  role: {
    superAdmin: '超级管理员',
    admin: '管理员',
    member: '普通用户'
  },
  userDropdownMenu: {
    basicInfor: '基本资料',
    changePassword: '修改密码',
    logout: '退出'
  },

  ...zhLocale   //  合并element-ui内置翻译
}

export default cn
