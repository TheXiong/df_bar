import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-panel': '../../static/dist/panel/index',
      'i-divider': '../../static/dist/divider/index',
      'i-load-more': '../../static/dist/load-more/index'
    }
  }
}
