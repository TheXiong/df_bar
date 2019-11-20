<template>
  <div id="login">
    <div class="loginConbox">
      <div class="header">
        <!--<div class="logo">-->
        <!--<img src="../../assets/logo.png">-->
        <!--</div>-->
      </div>
      <div class="loginBox">
        <div class="loginCon">
          <p class="title">nodePlatform</p>
          <p class="title">前台: vue + element-ui</p>
          <p class="title">后台: egg.js</p>
          <el-card shadow="always" class="login-module" v-if="smdl">
            <div slot="header" class="clearfix formTitlt">
              <span>密码登录</span>
              <span class="titIconbox">
                <i class="iconfont xu-saomadenglu2 fa-lg iconcolor"></i>
                <i
                  class="iconfont xu-saomadenglu01 el-icon--right fa-lg pointer"
                  @click="smdl = !smdl"
                ></i>
              </span>
            </div>
            <el-form :model="loginForm" status-icon label-width="100px" class="demo-ruleForm">
              <el-form-item>
                <el-input
                  type="text"
                  v-model="loginForm.mobile"
                  auto-complete="off"
                  placeholder="请输入登录账号"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  type="password"
                  v-model="loginForm.password"
                  auto-complete="off"
                  placeholder="请输入登录密码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="subBtn" type="primary" @click="submitForm">登录</el-button>
              </el-form-item>
              <p class="smalltxt">
                <router-link class="a" to="#">忘记密码</router-link>
                <router-link class="a" to="#">忘记会员名</router-link>
                <router-link class="a" to="#">免费注册</router-link>
              </p>
            </el-form>
          </el-card>

          <el-card shadow="always" class="login-module" v-else>
            <div slot="header" class="clearfix formTitlt">
              <span>验证码登录</span>
              <span class="titIconbox">
                <i class="iconfont xu-mimadenglu1 fa-lg iconcolor"></i>
                <i
                  class="iconfont xu-imagevector el-icon--right fa-lg pointer"
                  @click="smdl = !smdl"
                ></i>
              </span>
            </div>
            <el-form :model="loginForm1" status-icon label-width="100px" class="demo-ruleForm">
              <el-form-item>
                <el-input
                  type="text"
                  v-model="loginForm1.mobile"
                  auto-complete="off"
                  placeholder="请输入登录账号"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-input
                  type="text"
                  v-model="loginForm1.mobile_verify_code"
                  auto-complete="off"
                  placeholder="请输入验证码"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button class="subBtn" type="primary" @click="submitForm">登录</el-button>
              </el-form-item>
              <p class="smalltxt">
                <router-link class="a" to="#">忘记密码</router-link>
                <router-link class="a" to="#">忘记会员名</router-link>
                <router-link class="a" to="#">免费注册</router-link>
              </p>
            </el-form>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      smdl: true,
      loginForm: {
        mobile: "18888888888",
        password: "123456",
        type: "password",
        admin: 1
      },
      loginForm1: {
        username: "",
        mobile_verify_code: "",
        type: "",
        admin: 1
      }
    };
  },
  methods: {
    submitForm() {
      let that = this;
      let form;
      if (this.smdl) {
        form = this.loginForm;
        if (form.mobile === "" || form.password === "") {
          this.$message({
            showClose: true,
            message: "账号或密码不能为空",
            type: "error"
          });
          return;
        }
      } else {
        form = this.loginForm1;
        if (form.mobile === "" || form.mobile_verify_code === "") {
          this.$message({
            showClose: true,
            message: "账号或验证码码不能为空",
            type: "error"
          });
          return;
        }
      }

      // let that = this;
      this.$axios
        .post("/c/login", form)
        .then(res => {
          console.log(res.data.data.Token);
          
          that.$store
            .dispatch("setToken", res.data.data.Token)
            .then(res => {
              that.$router.push({ path: "/" });
            })
            .catch(res => {
              that.$message({
                showClose: true,
                message: res.message,
                type: "error"
              });
            });
        })
        .catch(err => {
          that.$message({
            showClose: true,
            message: err,
            type: "error"
          });
        });
    }
  }
};
</script>
<style lang="scss">
#login {
  width: 100%;
  height: 100%;
  background-color: #2d3a4b;
  .loginConbox {
    background: #2d3a4b;
  }
  .header {
    height: 60px;
    position: relative;
    background: #2d3a4b;
    /*border-bottom: 1px solid rgba(255, 255, 255, 0.3);*/
    .logo {
      margin-left: 30px;
      width: 500px;
      float: left;
      height: 40px;
      padding-top: 10px;
      img {
        height: 100%;
      }
    }
  }

  .loginBox {
    .iconcolor {
      color: #409eff;
    }

    padding: 74px 0 118px;

    .loginCon {
      width: 990px;
      margin: auto;
      position: relative;
      height: 388px;

      .el-card__header {
        border-bottom: 0px;
      }
      .title {
        font-size: 36px;
        font-weight: 600;
        color: #ffffff;
        width: 500px;
        float: left;
        margin-top: 0px;
        &:first-child {
          font-size: 50px;
          margin-top: 50px;
          margin-bottom: 30px;
        }
      }
      .login-module {
        width: 380px;
        height: 325px;
        margin-top: 60px;
        border: none;
        position: absolute;
        right: 0;

        .formTitlt {
          font-size: 18px;
          font-weight: 400;

          .titIconbox {
            float: right;

            .pointer {
              cursor: pointer;
            }
          }
        }

        .smalltxt {
          text-align: right;

          .a {
            text-decoration: none;
            color: #999999;
            font-size: 12px;
            margin-left: 8px;
          }
        }
      }

      .el-form-item__content {
        margin-left: 0px !important;

        .subBtn {
          width: 100%;
        }
      }
    }

    .el-input__inner,
    .el-button,
    .el-card,
    .el-message {
      border-radius: 0px !important;
    }

    .el-form-item__content .ico {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 999;
      width: 40px;
      height: 39px;
      text-align: center;
      border-right: 1px solid #ccc;
    }

    .ewmbox {
      width: 100%;
      height: 240px;
      margin-top: -25px;

      .ewm {
        width: 140px;
        height: 140px;
        margin: 20px auto;

        p {
          font-size: 12px;
          padding-left: 40px;
          margin: 0;
        }
      }

      .ewmicon {
        width: 140px;
        margin: 20px auto 0;

        .iconfont {
          float: left;
        }

        p {
          font-size: 12px;
          padding-left: 40px;
          margin: 0;
        }
      }
    }
  }
}
</style>
