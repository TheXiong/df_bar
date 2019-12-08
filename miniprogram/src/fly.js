let Fly = require("flyio/dist/npm/wx");
let fly = new Fly();
//定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
//设置超时
// fly.config.timeout=10000;
//设置请求基地址
fly.config.baseURL = "https://xiaoqusd.com/api/v1/"
//设置公共的Get参数
// fly.config.params={"token":"testtoken"};
fly.interceptors.request.use(request => {
    request.headers = {
        "Content-Type": "application/json"
    };
    if (wx.getStorageSync('token')) {
        request.headers['token'] = wx.getStorageSync('token')
    }
});


fly.interceptors.response.use(
    (response) => {
        if (response.data.code == 0 ||  response.data.openid) {
            return response
        } else {
            wx.showToast({
                title: response.data.msg,
                icon: "none",
                duration: 2000
            });
            return Promise.reject(response.data.msg)
        }
    },
    (err) => {
        return Promise.reject("ssss")
    }
)
export default fly