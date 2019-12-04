<template>
  <div class="login">
    <p class="login-title">会员注册</p>
    <view class="section">
      <input
        v-model="form.mobile"
        type="number"
        maxlength="11"
        placeholder-class="input-holder"
        placeholder="请输入您的手机号"
      />
    </view>
    <view class="section">
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
    <view class="section">
      <input
        v-model="form.password"
        placeholder-class="input-holder"
        :password="isPassword"
        placeholder="请输入您的密码"
      />
    </view>
    <view class="section">
      <input
        v-model="form.repassword"
        placeholder-class="input-holder"
        :password="isPassword"
        placeholder="请再输入一次您的密码"
      />
    </view>
    <button class="btn" @click="login">注册</button>
    <!-- <p class="login-text">
      登陆/注册即视为同意
      <span style="color: #8ECEF4;">meEdu协议</span>
    </p> -->
    <br />
    <br />
    <br />
    <p class="login-text" @click="goLogin">已有账号？立即登陆</p>
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
      codeText: "发送验证码",
      isSending: false,
      form: {
        mobile: "",
        mobile_verify_code: "",
        password: "",
        repassword: ""
      }
    };
  },
  methods: {
    goLogin() {
      wx.navigateTo({
        url: "../login/main"
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
      //验证mobile_verify_code
      if (
        !(this.form.mobile_verify_code &&
        /^\d+$/.test(this.form.mobile_verify_code) &&
        this.form.mobile_verify_code.length >= 4)
      ) {
        wx.showToast({
          title: "验证码有误,请重填",
          icon: "none",
          duration: 2000
        });
        return;
      }
      //验证密码
      if (!this.form.password) {
        wx.showToast({
          title: "请输入密码",
          icon: "none",
          duration: 2000
        });
        return;
      }
      //验证密码
      if (!this.form.repassword) {
        wx.showToast({
          title: "请输入确认密码",
          icon: "none",
          duration: 2000
        });
        return;
      }
      //验证两次密码是否相等
      if (this.form.password != this.form.repassword) {
        wx.showToast({
          title: "两次密码输入不一致",
          icon: "none",
          duration: 2000
        });
        return;
      }
      this.$fly.post("/c/register", this.form).then(res => {
        wx.showToast({
          title: "注册成功",
          icon: "success",
          duration: 2000
        });
        wx.setStorageSync("token",res.headers.token);
        wx.navigateTo({ url: "../login/main" });
      });
    },
    getCode() {
      //是否在读秒
      if (this.isSending) {
        return;
      }
      //验证phone
      if (this.form.mobile && !validatePhone(this.form.mobile)) {
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
    }
  },
  created() {
    const logs = wx.getStorageSync("logs") || [];
    this.logs = logs.map(log => formatTime(new Date(log)));
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