<template>
  <div class="feedbackContainer">
    <div class="feedback">
      <div class="feedbackTitle">反馈内容</div>
      <textarea class="feedbackInputTextarea" v-model="feedback" placeholder="请输入反馈内容"></textarea>
    </div>
    <div class="feedbackButton" @click="feedbackButton">提交意见</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedback: ""
    };
  },
  methods: {
    feedbackButton() {
      if (!this.feedback) {
        wx.showToast({
          title: "请填写反馈内容",
          icon: "none",
          duration: 2000
        });
        return;
      }

      this.$fly.post("/u/feedback", { feedback: this.feedback }).then(res => {
        wx.showToast({
          title: "提交反馈成功",
          icon: "success",
          duration: 2000
        });
        this.clearPageInput();
      });
    },
    clearPageInput() {
      this.feedback = "";
    }
  },
  onLoad() {
    this.clearPageInput();
  }
};
</script>

<style lang="less" scoped>
.feedback {
  display: flex;
  min-height: 80rpx;
  line-height: 80rpx;
  border-bottom: 1px solid #eee;
  .feedbackTitle {
    color: #495060;
    min-width: 130rpx;
    padding-right: 20rpx;
    font-size: 14px;
    padding-left: 20px;
  }
  .feedbackInput {
    flex: 1;
    line-height: 1.6;
    padding: 4px 0;
    min-height: 22px;
    height: auto;
    font-size: 14px;
    color: #495060;
    caret-color: #495060;
  }
  .feedbackInputTextarea {
    flex: 1;
    height: 200rpx;
    line-height: 1.6;
    padding: 4rpx 10rpx 0 0;
    font-size: 14px;
    color: #495060;
    caret-color: #495060;
    overflow: hidden;
  }
}
.feedbackButton {
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
