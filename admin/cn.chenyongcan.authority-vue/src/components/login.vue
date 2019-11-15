<template>
  <div class="login-wrap">
    <div class="ms-login">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>后台登录</span>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="username">
              <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
              <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
            </el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
  import qs from 'qs';
  export default {
    data: function() {
      return {
        ruleForm: {
          username: 'administrator',
          password: 'qweasd'
        },
        rules: {
          username: [{
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      submitForm(formName) {
        let self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            self.$axios.post("/Login", qs.stringify(self.ruleForm)).then((res) => {
              if (res.status == 200 && res.data.code == 200) {
                localStorage.setItem('token', JSON.stringify(res.data.data));
                self.$router.push('/');
              } else {
                self.$message.error(res.data.msg);
              }
            }).catch(function(error) {
              self.$message.error('数据加载失败!');
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>


<style scoped>
  .login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: 100%;
  }

  .ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
  }

  .ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
  }

  .ms-content {
    padding: 30px 30px;
  }

  .login-btn {
    text-align: center;
  }

  .login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
  }

  .login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
  }
</style>
