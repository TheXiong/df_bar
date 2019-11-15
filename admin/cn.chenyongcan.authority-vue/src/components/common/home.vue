<template>
  <div class="wrapper">
    <v-sidebar></v-sidebar>
    <div class="content-box">
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown @command="handleCommand">
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command='dashboard'>后台首页</el-dropdown-item>
            <el-dropdown-item command='viewProfile'>查看</el-dropdown-item>
            <el-dropdown-item command='logout'>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{username}}</span>
      </el-header>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view :key="$route.fullPath"></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

  import vSidebar from './sidebar.vue';
  export default {
    data() {
      return {
        tagsList: [],
        username: '',
        collapse: false
      }
    },
    components: {
      vSidebar
    },
    created() {
      let data = JSON.parse(localStorage.getItem('token'));
      this.username = data.userName;
    },
    methods: {
      handleCommand(command) {
         let self = this;
        //this.$message('click on item ' + command);
        if (command == 'dashboard'){
            self.$router.push('/dashboard');
        }
        else if (command=='viewProfile'){
          
        }
        else if (command == 'logout') {
          self.$axios.post("/Logout").then((res) => {
            if (res.status == 200 && res.data.code == 200) {
              self.$message.success(res.data.msg);
              localStorage.removeItem('token');
              self.$router.push('/login');
            } else {
              self.$message.error(res.data.msg);
            }
          }).catch(function(error) {
            self.$message.error('数据加载失败!');
          });
        }
      }
    }
  }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
</style>
