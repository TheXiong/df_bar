<template>
  <div class="login">
    <p class="login-title">会员登录</p>
    <view class="section">
      <input
        v-model="form.mobile"
        type="number"
        maxlength="11"
        placeholder-class="input-holder"
        placeholder="请输入您的手机号"
      />
    </view>
    <view v-if="loginType=='mobile_verify_code'" class="section">
      <input
        class="code-input"
        v-model="form.mobile_verify_code"
        placeholder-class="input-holder"
        placeholder="请输入验证码"
        type="number"
        maxlength="6"
      />
      <button class="code" size="mini" @click="getCode">{{codeText}}</button>
    </view>
    <view v-if="loginType=='password'" class="section">
      <input
        v-model="form.password"
        placeholder-class="input-holder"
        :password="isPassword"
        placeholder="请输入您的密码"
      />
    </view>
    <button
      size="mini"
      v-if="loginType=='mobile_verify_code'"
      @click="loginType='password';resetForm()"
    >密码登录</button>
    <button size="mini" v-else @click="loginType='mobile_verify_code';resetForm()">验证码登录</button>
    <button class="btn" @click="login">登录</button>
    <br />
    <br />
    <p class="login-text" @click="goRegister">没有账号？立即注册</p>
    <!-- <p></p> -->
  </div>
</template>

<script>
import { formatTime, validatePhone } from "@/utils/index";
export default {
  data() {
    return {
      isPassword: true,
      logs: [],
      loginType: "mobile_verify_code",
      form: {
        mobile: "",
        password: "",
        mobile_verify_code: ""
      },
      codeText: "发送验证码",
      isSending: false
    };
  },
  methods: {
    goRegister() {
      wx.navigateTo({
        url: "../register/main"
      });
    },
    login() {
      //验证phone
      if (!(this.form.mobile && validatePhone(this.form.mobile))) {
        wx.showToast({
          title: "电话号码有误,请重填",
          icon: "none",
          duration: 2000
        });
        return;
      }

      if (this.loginType == "mobile_verify_code") {
        //验证mobile_verify_code
        if (
          !(
            this.form.mobile_verify_code &&
            /^\d+$/.test(this.form.mobile_verify_code) &&
            this.form.mobile_verify_code.length >= 4
          )
        ) {
          wx.showToast({
            title: "验证码有误,请重填",
            icon: "none",
            duration: 2000
          });
          return;
        }
        this.$fly.post("/c/login", { ...this.form, type: "" }).then(res => {
          wx.setStorageSync("token", res.headers.token);
          this.getUserInfo();
        });
      } else {
        //验证密码
        if (!this.form.password) {
          wx.showToast({
            title: "请输入密码",
            icon: "none",
            duration: 2000
          });
          return;
        }
        this.$fly
          .post("/c/login", { ...this.form, type: "password" })
          .then(res => {
            wx.setStorageSync("token", res.headers.token);
            this.getUserInfo();
          });
      }
    },
    getCode() {
      //是否在读秒
      if (this.isSending) {
        return;
      }
      //验证phone
      if (!(this.form.mobile && validatePhone(this.form.mobile))) {
        wx.showToast({
          title: "电话号码有误,请重填",
          icon: "none",
          duration: 2000
        });
        return;
      }

      this.isSending = true;
      this.$fly
        .post("/c/send_mobile_verify_code", { mobile: this.form.mobile })
        .then(res => {
          wx.showToast({
            title: "发送成功",
            icon: "success",
            duration: 2000
          });
          let times = 60;
          setInterval(() => {
            this.codeText = `${times}s后重发`;
            if (times == 0) {
              this.isSending = false;
              this.codeText = "发送验证码";
            } else {
              times--;
            }
          }, 1000);
        })
        .catch(err => {
          this.isSending = false;
        });
    },
    resetForm() {
      this.form = {
        mobile: "",
        password: "",
        mobile_verify_code: ""
      };
    },
    getUserInfo() {
      this.$fly
        .post("/u/information", {})
        .then(res => {
          wx.setStorageSync("userInfo", JSON.stringify(res.data.data));
          wx.reLaunch({
            url: "../commodity/main"
          });
        })
        .catch(err => {
          try {
            wx.removeStorageSync("token");
          } catch (e) {
            // Do something when catch error
            wx.showToast({
              title: "获取用户信息失败，请重新登录",
              icon: "none",
              duration: 2000
            });
          }
        });
    }
  },
  created() {
    const logs = wx.getStorageSync("logs") || [];
    this.logs = logs.map(log => formatTime(new Date(log)));
    
    wx.setStorageSync("token","uZvAdoXqPr41AvVzscbFrg==");

    const token = wx.getStorageSync("token");
    if (token) {
      this.getUserInfo();
    }
  }
};
</script>

<style lang="less">
.login {
  position: relative;
  top: 0;
  left: 0;
  padding: 0 45px;
  p {
    text-align: center;
  }
  &-title {
    color: #111111;
    font-size: 20px;
    padding: 40px 0 30px;
  }
  .section {
    position: relative;
    input {
      width: 100%;
      height: auto;
      font-size: 14px;
      border-bottom: 1px solid #666;
      margin-bottom: 30px;
    }
    .input-holder {
      color: #777777;
      font-size: 14px;
    }
    .code-input {
      width: 55%;
    }
    .code {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .btn {
    color: #fff;
    background: #373737;
    margin: 10px 0 20px;
  }
  .login-text {
    line-height: 2;
    font-size: 12px;
    color: #777777;
    text-decoration: none;
    text-align: center;
  }
}
</style>