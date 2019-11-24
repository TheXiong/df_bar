<template>
  <div class="settlementContainer">
    <!-- <div class="settlementHeader">
      <div class="settlementHeaderAddress">
        <p class="settlementHeaderAddressD">会员卡号:</p>
        <p class="settlementHeaderAddressA">
          <span class="settlementHeaderAddressA number" v-if="member_number">{{member_number}}</span>
          <span
            class="settlementHeaderAddressA editAddress"
            @click="toEditCardNumber"
            v-if="member_number"
          >编辑会员卡号 ></span>
          <span class="settlementHeaderAddressA" @click="toEditCardNumber" v-else>录入会员卡号 ></span>
        </p>
      </div>
    </div>-->

    <div class="settlementMain">
      <i-cell-group>
        <i-cell
          v-for="(item, index) in commdityShopping"
          :key="index"
          :title="item.name"
          :value="item.integral+'*'+item.num+'='+(item.integral) * (item.num)"
        ></i-cell>

        <!-- <i-cell title="优惠金额 " :value="randomSum" ></i-cell> -->
      </i-cell-group>
    </div>

    <div class="settlementFooter">
      <div class="settlementFooterL">
        <p class="settlementFooterLM">
          <span class="settlementFooterLMSum">花费积分{{commditySumPrice}}</span>
          <span class="settlementFooterLMH">|</span>
          <span class="settlementFooterLMYH">您有积分{{integral}}</span>
        </p>
      </div>
      <div class="settlementFooterR" @click="payClickTest">立即下单</div>
    </div>
    <pay v-if="payShow" @closePayFull="closePayFull"></pay>

    <div class="tipsMessage" v-if="tipsMessage.status">{{tipsMessage.message}}</div>

    <div style="height: 100rpx"></div>
  </div>
</template>

<script>
import _ from "lodash";
import pay from "@/components/pay";
import { mapState } from "vuex";
export default {
  components: {
    pay
  },
  data() {
    return {
      integral: 0,
      payShow: false,
      member_number: "",
      tipsMessage: {
        message: "没有会员卡号",
        status: false
      }
    };
  },
  computed: {
    ...mapState(["commdityShopping", "userInfo"]),
    commditySumPrice() {
      let commditySumPrice = 0;
      _.forEach(this.commdityShopping, function(value, key) {
        commditySumPrice += value.integral * value.num;
      });

      // if (commditySumPrice < 10) {
      //   commditySumPrice += 1
      // }
      return commditySumPrice;
    }
  },
  watch: {
    userInfo() {
      this.member_number = this.userInfo.member_number;
      this.integral = this.userInfo.integral;
    }
  },
  created() {
    this.member_number = this.userInfo.member_number;
    this.integral = this.userInfo.integral;
  },
  methods: {
    payClickTest() {
      if (!this.userInfo.member_number) {
        wx.showToast({
          title: "请到我的会员信息完善资料",
          icon: "none",
          duration: 2000
        });
        return;
      }
      this.$fly
        .post("/u/build_order", { infos: this.commdityShopping })
        .then(res => {
          wx.showToast({
            title: "下单成功",
            icon: "success",
            duration: 2000
          });
          this.$fly.post("/u/order_list", {}).then(res => {
            this.$store.dispatch("setCommdityOrder", res.data.data);
          });
          this.$store.dispatch("getNewUserInfo").then(res => {
            this.payShow = true;
          });
        });
    },
    closePayFull(status) {
      this.payShow = status;
    },
    toEditCardNumber() {
      wx.navigateTo({
        url: "/pages/addressAdd/main"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.settlementContainer {
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #f4f4f4;
}
.settlementHeader {
  width: 100%;
  height: 200rpx;
  background: #0097ff;
  margin-bottom: -50rpx;
}
.settlementHeaderAddress {
  width: 726rpx;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  .settlementHeaderAddressD {
    line-height: 60rpx;
    font-size: 14px;
  }
  .settlementHeaderAddressA {
    line-height: 60rpx;
    font-size: 18px;
    font-weight: 500;
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    flex: row;
    justify-content: space-between;
    align-items: center;
  }
  .number {
    width: 400rpx;
  }
  .editAddress {
  }
}
.settlementMain {
  width: 726rpx;
  height: 100%;
  margin: auto;
  -webkit-border-radius: 3rpx;
  -moz-border-radius: 3rpx;
  border-radius: 3rpx;
  overflow: hidden;
  padding-bottom: 200rpx;
  background: #f4f4f4;
}

.settlementFooter {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 96rpx;
  background: #3c3c3c;
  .settlementFooterL {
    height: 100%;
    float: left;
    color: #999;
    .settlementFooterLMSum {
      color: #fff;
      line-height: 96rpx;
      font-size: 18px;
      margin-left: 22rpx;
    }
    .settlementFooterLMH {
      color: #999;
      font-size: 14px;
      line-height: 96rpx;
      margin: 0 10rpx 0 16rpx;
    }
    .settlementFooterLMYH {
      color: #999;
      font-size: 14px;
      line-height: 96rpx;
    }
  }
  .settlementFooterR {
    width: 210rpx;
    height: 100%;
    background: #3190e8;
    float: right;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 96rpx;
  }
}
.tipsMessage {
  position: absolute;
  top: 50%;
  left: 50%;
  background: rgba(0, 0, 0, 0.6);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  padding: 10rpx 16rpx;
  -webkit-border-radius: 6rpx;
  -moz-border-radius: 6rpx;
  border-radius: 6rpx;
  color: #fff;
  font-size: 14px;
}
</style>
