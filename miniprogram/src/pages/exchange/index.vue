<template>
  <div class="exchange-container">
    <div class="header">
      <div class="tip" v-html="tip"></div>
      <div class="integral">我的积分: {{userInfo.integral}} 分</div>
    </div>

    <div class="divider"></div>

    <div class="exchange">
      <input class="input" v-model="integral" type="number" auto-focus placeholder="积分" />
      <button class="btn" type="primary" size="mini" @click="exchange">确认兑换</button>
    </div>

    <!-- <i-panel title="兑换记录" class="table-wraper"> -->
    <view class="table-inner-wraper">
      <view class="table">
        <view class="tr bg-w">
          <view class="th">兑换时间</view>
          <view class="th">积分</view>
          <view class="th">核销码</view>
          <view class="th">状态</view>
        </view>
        <scroll-view
          class="scroll-container"
          scroll-y="true"
          @scrolltolower="lower"
          :scroll-top="scrollTop"
        >
          <block v-for="(item,index) in listData" :key="index">
            <view class="tr bg-g" v-if="index % 2 == 0">
              <view class="td">{{item.join_time}}</view>
              <view class="td">{{item.change}}</view>
              <view class="td">{{item.name}}</view>
              <view class="td">{{item.status==0?'未使用':'已使用'}}</view>
            </view>
            <view class="tr" wx:else>
              <view class="td">{{item.join_time}}</view>
              <view class="td">{{item.change}}</view>
              <view class="td">{{item.name}}</view>
              <view class="td">{{item.status==0?'未使用':'已使用'}}</view>
            </view>
          </block>
          <i-load-more :tip="hasMore?'加载数据中':'暂无数据'" :loading="loading" />
        </scroll-view>
      </view>
    </view>
    <!-- </i-panel> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import { formatTime } from "../../utils/index";
export default {
  data() {
    return {
      tip: `1.会员积分仅可兑换抵用金,不能兑换现金!\r\n2.抵用金仅限当天在网咖消费或充网费,过期即作废!\r\n3.部分商品与服务不可使用抵用金消费,请须知!\r\n4.积分一旦兑换,概不退还,请须知!\r\n5.如有疑问,请向网管咨询!
        `,
      integral: "",
      listData: [],
      scrollTop: 0,
      hasMore: true,
      loading: true
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  mounted() {
    this.hasMore = true;
    this.getExchangeLog();
  },
  onPullDownRefresh() {
    this.hasMore = true;
    this.getExchangeLog();
    wx.showNavigationBarLoading();
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
          this.integral = "";
          this.hasMore = true;
          this.$store.dispatch("getNewUserInfo");
          this.$store.commit("newExchangeLog");
          this.getExchangeLog();
        });
    },
    getExchangeLog() {
      this.$fly.post("/u/use_integral_exchange_goods_log", {}).then(res => {
        if (res.data.data) {
          this.listData = this.transformData(res.data.data);
          if (res.data.data.length < 10) {
            this.hasMore = false;
          }
        } else {
          this.hasMore = false;
        }
        this.loading = false
        try {
          wx.hideNavigationBarLoading();
          wx.stopPullDownRefresh();
        } catch (error) {}
      });
    },
    transformData(arr) {
      return arr.map(item => {
        return {
          ...item,
          join_time: formatTime(new Date(item.join_time * 1000))
        };
      });
    },
    getTheSmallId(arr) {
      return arr.reduce((prev, current) => {
        if (prev) {
          //不为null
          prev = prev < current.id ? prev : current.id;
        } else {
          prev = current.id;
        }
        return prev;
      }, null);
    },
    lower(e) {
      if (!this.hasMore) {
        return;
      }
      this.loading = true
      this.$fly
        .post("/u/use_integral_exchange_goods_log", {
          id: this.getTheSmallId(this.listData)
        })
        .then(res => {
          if (res.data.data) {
            this.listData = [
              ...this.listData,
              ...this.transformData(res.data.data)
            ];
            this.scrollTop = e.target.scrollTop;
            if (res.data.data.length < 10) {
              this.hasMore = false;
            }
          } else {
            this.hasMore = false;
          }
          this.loading = false
        });
    }
  }
};
</script>

<style lang="wxss">
page {
  height: 100% !important;
}
</style>

<style lang="less" scoped>
.table {
  border: 0px solid darkgray;
}
.tr {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100rpx;
  align-items: center;
}
.td {
  width: 40%;
  justify-content: center;
  text-align: center;
  font-size: 30rpx;
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
  background: #333;
  color: #fff;
  display: flex;
  height: 100rpx;
  align-items: center;
}
.tip {
  white-space: pre-wrap;
  font-size: 14px;
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
  padding: 20rpx 100rpx;
  height: 140rpx;
  box-sizing: border-box;
  .input {
    width: 300rpx;
    height: 90rpx;
    padding-left: 20rpx;
    border: 1px solid #0097ff;
    border-radius: 10rpx;
  }
  .btn {
    height: 90rpx;
    line-height: 90rpx;
  }
}
.exchange-container {
  height: 100%;
  .table-inner-wraper {
    height: calc(100% - 460rpx);
    box-sizing: border-box;
    padding: 20rpx;
    .table {
      height: 100%;
      .scroll-container {
        height: calc(100% - 100rpx);
      }
    }
  }
}
.header{
  height: 300rpx;
  padding: 20rpx;
  box-sizing: border-box;
  overflow: auto;
}
</style>