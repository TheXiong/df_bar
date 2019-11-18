<template>
  <div>
    <i-panel title="注: 以下内容请须知:">
      <view style="padding: 0 15px;">
        <div class="tip" v-html="tip"></div>
        <div class="integral">我的积分: {{userInfo.integral}} 分</div>
      </view>
    </i-panel>

    <div class="divider"></div>

    <div class="exchange">
      <input class="input" v-model="integral" type="number" auto-focus placeholder="积分" />
      <button class="btn" type="primary" size="mini" @click="exchange">确认兑换</button>
    </div>

    <i-panel title="兑换记录">
      <view style="padding: 15px;">
        <view class="table">
          <view class="tr bg-w">
            <view class="th">兑换时间</view>
            <view class="th">积分</view>
            <view class="th">核销码</view>
            <view class="th">状态</view>
          </view>
          <block v-for="(item,index) in listData" :key="index">
            <view class="tr bg-g" v-if="index % 2 == 0">
              <view class="td">{{item.code}}</view>
              <view class="td">{{item.text}}</view>
              <view class="td">{{item.type}}</view>
            </view>
            <view class="tr" wx:else>
              <view class="td">{{item.code}}</view>
              <view class="td">{{item.text}}</view>
              <view class="td">{{item.type}}</view>
            </view>
          </block>
        </view>
      </view>
    </i-panel>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      tip: `1.会员积分仅可兑换抵用金,不能兑换现金!\r\n2.抵用金仅限当天在网咖消费或充网费,过期即作废!\r\n3.部分商品与服务不可使用抵用金消费,请须知!\r\n4.积分一旦兑换,概不退还,请须知!\r\n5.如有疑问,请向网管咨询!
        `,
      integral: ""
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    exchange() {
      if (!this.integral) {
        wx.showToast({
          title: "请输入积分",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (!/^\d+$/.test(this.integral)) {
        wx.showToast({
          title: "请输入正确的积分",
          icon: "none",
          duration: 2000
        });
        return;
      }
      this.$fly
        .post("/u/use_integral_exchange_goods", { integral: this.integral })
        .then(res => {
          wx.showToast({
            title: "兑换成功",
            icon: "success",
            duration: 2000
          });
          this.integral = ''
        });
    }
  }
};
</script>

<style lang="less" scoped>
.table {
  border: 0px solid darkgray;
}
.tr {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 3rem;
  align-items: center;
}
.td {
  width: 40%;
  justify-content: center;
  text-align: center;
}
.bg-w {
  background: snow;
}
.bg-g {
  background: #e6f3f9;
}
.th {
  width: 40%;
  justify-content: center;
  background: #3366ff;
  color: #fff;
  display: flex;
  height: 3rem;
  align-items: center;
}
.tip {
  white-space: pre-wrap;
  font-size: 16px;
}
.integral {
  font-size: 16px;
  text-align: center;
}
.divider {
  border-bottom: 1px solid #ccc;
  margin-top: 10px;
}
.exchange {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
  padding: 0 100rpx;
  .input {
    width: 300rpx;
    height: 90rpx;
    padding-left: 20rpx;
    border: 1px solid #000;
    border-radius: 10rpx;
  }
  .btn {
    height: 90rpx;
    line-height: 90rpx;
  }
}
</style>