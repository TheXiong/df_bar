<template>
  <div class="shoppcontainer">
    <div class="tip" v-html="tip"></div>

    <div class="gift-list-container">
      <div class="title">赠送记录</div>
      <scroll-view class="list" scroll-y="true" @scrolltolower="lower" :scroll-top="scrollTop">
        <div class="item" v-for="(item, index) in listData" :key="index" :style="index%2==0?'background:#e6f3f9':''">
          <div class="content">{{item.serial}}</div>
          <!-- <div class="content">{{item.tag}}</div> -->
          <div class="content">{{item.name}}</div>
          <div class="content">机号:{{item.note}}</div>
          <div class="content">{{item.join_time}}</div>
        </div>
        <i-load-more :tip="hasMore?'加载数据中':'暂无数据'" :loading="loading" />
      </scroll-view>
    </div>
  </div>
</template>

<script>
import { formatTime } from "../../utils/index";
export default {
  data() {
    return {
      tip: '',
      listData: [],
      hasMore: true,
      scrollTop: 0,
      hasMounted: false,
      loading: true
    };
  },
  mounted() {
    this.hasMore = true;
    this.hasMounted = true
    this.getList();
    this.getTip();
  },
  onPullDownRefresh() {
    this.hasMore = true;
    this.hasMounted = true
    this.getList();
    this.getTip();
    wx.showNavigationBarLoading();
  },
	onShow(){
		if (this.hasMounted) {
      this.getList();
      this.getTip();
    }
	},
  methods: {
    getTip(){
      this.$fly.post("/u/activity_describe", {}).then(res=>{
        this.tip = res.data.data.describe
      })
    },
    getList() {
      this.$fly.post("/u/gift_record", {}).then(res => {
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
    transformData(arr) {
      return arr.map(item => {
        return {
          ...item,
          join_time: formatTime(new Date(item.join_time * 1000))
        };
      });
    },
    lower(e) {
      if (!this.hasMore) {
        return;
      }
      this.loading = true
      this.$fly
        .post("/u/gift_record", {
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
.shoppcontainer {
  height: 100%;
  .tip {
    white-space: pre-wrap;
    font-size: 14px;
    display: block;
    height: 300rpx;
    overflow: scroll;
    box-sizing: border-box;
    padding: 20rpx;
  }
  .gift-list-container {
    height: calc(100% - 310rpx);
    box-sizing: border-box;
    padding: 20rpx;
    .title {
      text-align: left;
      height: 100rpx;
    }
    .list {
      border-top: 1px solid #ccc;
      height: calc(100% - 100rpx);
      .item {
        border-bottom: 1px solid #ccc;
        height: 100rpx;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .content {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
