<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);

    const token = wx.getStorageSync("token");
    if (token) {
      this.getUserInfo();
    } else {
      wx.login({
        success: res => {
          // let url = `https://api.weixin.qq.com/sns/jscode2session?appid=wxcdeee7ca5289e27b&secret=fdfae97f14114f48b48040ff86774897&js_code=${
          //   res.code
          // }&grant_type=authorization_code`;
          this.$fly.post("/c/get_wechat_openid_by_code",{code:res.code}).then(res => {
            this.$fly
              .post("/c/login_wechat", { openid: JSON.parse(res.data.data.data).openid })
              .then(res => {
                wx.setStorageSync("token", res.headers.token);
                this.getUserInfo();
              });
          });
        }
      });
    }
  },
  methods: {
    getUserInfo() {
      this.$store.dispatch("getNewUserInfo")
    }
  }
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: #f5f5f5;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
