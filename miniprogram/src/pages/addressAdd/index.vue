<template>
  <div class="addressAddContainer">
    <div class="addressAddContent">
      <div class="addressAddContentList">
        <div class="addressAddContentListTitle">会员卡号</div>
        <input
          class="addressAddContentListInput"
          type="text"
          v-model="member_number"
          autofocus
          placeholder="请输入卡号"
        />
      </div>
    </div>
    <div class="addressAddContent">
      <div class="addressAddContentList">
        <div class="addressAddContentListTitle">网管ID</div>
        <input
          class="addressAddContentListInput"
          type="text"
          :disabled="userInfo.parent"
          v-model="net_manager"
          :style="userInfo.parent?'color:#ccc':''"
          placeholder="数字，只能填写一次，不可更改"
        />
      </div>
    </div>

    <p v-if="messageStatus" class="message">您还没有填写卡号哦~</p>

    <div class="addressAddButton" @click="addressAddButton">保存</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  components: {},
  data() {
    return {
      member_number: "",
      net_manager: "",
      messageStatus: false,
      hasMounted: false
    };
  },
  onShow() {
    if (this.hasMounted) {
      this.member_number = this.userInfo.member_number;
      this.net_manager = this.userInfo.parent ? this.userInfo.parent : "";
    }
  },
  computed: {
    ...mapState(["userInfo"])
  },
  watch: {
    userInfo() {
      this.member_number = this.userInfo.member_number;
      this.net_manager = this.userInfo.parent ? this.userInfo.parent : "";
    }
  },
  created() {
    // let userInfo = wx.getStorageSync("userInfo");
    this.member_number = this.userInfo.member_number;
  },
  mounted(){
    this.hasMounted = true
  },
  methods: {
    /**
     * 单击保存 保存信息到全局状态
     */
    addressAddButton() {
      if (!this.member_number) {
        wx.showToast({
          title: "请输入会员卡号",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (!this.net_manager) {
        wx.showToast({
          title: "请输入网管ID",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (!/^[1-9]\d*$/.test(this.net_manager)) {
        wx.showToast({
          title: "网管ID只能为正整数",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (
        this.userInfo.member_number == this.member_number &&
        this.userInfo.parent == this.net_manager
      ) {
        wx.showToast({
          title: "无更新",
          icon: "none",
          duration: 2000
        });
        return;
      }
      this.$fly
        .post("/u/add_user_member_number", {
          member_number: this.member_number,
          net_manager: this.net_manager
        })
        .then(res => {
          this.$store.dispatch("getNewUserInfo");
        });
    }
  }
};
</script>

<style lang="less" scoped>
.addressAddContainer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #f5f5f5;
}
.addressAddContent {
  background: #fff;
}
.addressAddContentList {
  display: flex;
  height: 80rpx;
  line-height: 80rpx;
  border-bottom: 1px solid #eee;
  .addressAddContentListTitle {
    color: #495060;
    min-width: 130rpx;
    padding-right: 20rpx;
    font-size: 14px;
    padding-left: 20px;
  }
  .addressAddContentListInput {
    flex: 1;
    line-height: 1.6;
    padding: 4px 0;
    min-height: 22px;
    height: auto;
    font-size: 14px;
    color: #495060;
    caret-color: #495060;
  }
}
.message {
  width: 100%;
  height: 60rpx;
  line-height: 60rpx;
  text-align: center;
  color: #0097ff;
  font-size: 14px;
}

.addressAddButton {
  width: 690rpx;
  height: 88rpx;
  text-align: center;
  background: #0097ff;
  color: #fff;
  line-height: 88rpx;
  font-size: 16px;
  font-weight: 500;
  border-radius: 3rpx;
  margin-top: 100rpx;
  margin-left: auto;
  margin-right: auto;
}
</style>
