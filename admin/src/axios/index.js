/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2019-01-02
 * Description: 文件描述
 */
import axios from 'axios'
import Cookies from 'js-cookie'
import { Message } from "element-ui";
// axios默认配置
axios.defaults.timeout = 10000;   // 超时时间
axios.defaults.baseURL = process.env.API_HOST;
console.log(axios.defaults.baseURL);
// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  if (Cookies.get('access_token')) {
    config.headers.token = Cookies.get('access_token')
  }
  return config;
},
  error => {
    return Promise.reject(error.response);
  });

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return Promise.resolve(response);
    } else {
      Message({
        message: response.data.msg,
        type: 'warning'
      });
      return Promise.reject(response.data.msg)
    }
  },
  error => {
    Message({
      message: error,
      type: 'warning'
    });
    return Promise.reject(error)   // 返回接口返回的错误信息
  });
export default axios;
