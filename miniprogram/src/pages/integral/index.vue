<template>
  <div class="exchange-container">
    <!-- <i-panel title="兑换记录" class="table-wraper"> -->
    <view class="table-inner-wraper" style="padding: 15px;">
      <view class="table">
        <view class="tr bg-w">
          <view class="th">时间</view>
          <view class="th">名称</view>
          <view class="th">消耗积分</view>
          <view class="th">剩余积分</view>
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
              <view class="td">{{item.note}}</view>
              <view class="td">{{item.change}}</view>
              <view class="td">{{item.result}}</view>
            </view>
            <view class="tr" wx:else>
              <view class="td">{{item.join_time}}</view>
              <view class="td">{{item.note}}</view>
              <view class="td">{{item.change}}</view>
              <view class="td">{{item.result}}</view>
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
      listData: [],
      scrollTop: 0,
      hasMore: true,
      loading: false
    };
  },
  mounted() {
    this.hasMore = true;
    this.getIntegralLog();
  },
  onPullDownRefresh() {
    this.hasMore = true;
    this.getIntegralLog();
    wx.showNavigationBarLoading();
  },
  methods: {
    getIntegralLog() {
      this.$fly.post("/u/integral_log", {}).then(res => {
        if (res.data.data) {
          this.listData = this.transformData(res.data.data);
          if (res.data.data.length < 10) {
            this.hasMore = false;
          }
        } else {
          this.hasMore = false;
        }
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
        .post("/u/integral_log", {
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
  height: 10%;
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
  background: #99CC33;
  color: #fff;
  display: flex;
  height: 120rpx;
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
.exchange-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .table-inner-wraper {
    height: 100%;
    box-sizing: border-box;
    .table {
      height: 100%;
      .scroll-container {
        height: calc(100% - 120rpx);
      }
    }
  }
}
</style>