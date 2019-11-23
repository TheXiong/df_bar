<template>
  <!--<div class="container" @click="clickHandle('test click', $event)">-->
  <div class="userContainer">
    <div class="user">
      <div class="userImg">
        <!--<img src="/static/img/tx.png" alt="tx">-->
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <div class="userD">
        <p class="userName">
          <open-data type="userNickName"></open-data>
          <!--<open-data type="userGender" lang="zh_CN"></open-data>-->
          {{userInfo?'(ID:'+userInfo.id+')':''}}
        </p>
        <p class="userPhone">
          <!-- <open-data type="userCountry"></open-data>
          <open-data type="userProvince"></open-data>
          <open-data type="userCity"></open-data>-->
          积分:{{userInfo?userInfo.integral:''}}
          <!-- <i-button size="small" :inline="true" @click="toExchange">兑换</i-button> -->
          <button type="primary" class="exchange" @click="toExchange">兑换</button>
        </p>
      </div>
    </div>

    <div class="usermenu">
      <i-cell-group>
        <i-cell title="积分记录" is-link="true" url="/pages/integral/main">
          <i-icon slot="icon" type="document_fill" color="#0097ff" size="18" />
        </i-cell>
        <i-cell title="会员信息" is-link="true" url="/pages/addressAdd/main">
          <i-icon slot="icon" type="coordinates_fill" color="#0097ff" size="18" />
        </i-cell>
        <i-cell title="联系客服" is-link="true" url="/pages/contactus/main">
          <i-icon slot="icon" type="group_fill" color="#0097ff" size="18" />
        </i-cell>
        <i-cell title="意见反馈" is-link="true" url="/pages/feedback/main">
          <i-icon slot="icon" type="like_fill" color="#0097ff" size="18" />
        </i-cell>
      </i-cell-group>
    </div>

    <div class="userLogIn" @click="logout">
      <a>退出登陆</a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    toOrderPages() {},
    toExchange() {
      wx.navigateTo({ url: "../exchange/main" });
    },
    logout() {
      wx.removeStorageSync("token");
      wx.navigateTo({
        url: "../login/main"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.userContainer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #eee;
}

.user {
  width: 100%;
  height: 200rpx;
  background: #0097ff;
  .userImg {
    width: 120rpx;
    height: 120rpx;
    background: #e9e9e9;
    border-radius: 50%;
    margin: 40rpx 0 0 40rpx;
    float: left;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .userD {
    float: left;
    margin: 30rpx 0 0 50rpx;
    .userName {
      color: #fff;
      font-size: 20px;
      line-height: 90rpx;
    }
    .userPhone {
      color: #fff;
      font-size: 16px;
      line-height: 40rpx;
      .exchange {
        display: inline;
        font-size: 16px;
      }
    }
  }
}

.usermenu {
  width: 100%;
  background: #fff;
}

.userLogIn {
  width: 100%;
  margin-top: 20rpx;
  margin-bottom: 20rpx;
  a {
    display: block;
    width: 100%;
    height: 80rpx;
    background: #fff;
    text-align: center;
    line-height: 80rpx;
    font-size: 16px;
    color: #f23030;
  }
}
</style>
