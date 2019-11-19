<template>
  <div class="shoppcontainer">
    <div class="tip" v-html="tip"></div>

    <div class="gift-list-container">
      <div class="title">赠送记录</div>
      <scroll-view class="list" scroll-y="true" @scrolltolower="lower" :scroll-top="scrollTop">
        <div class="item" v-for="(item, index) in listData" :key="index">
          <div class="content">{{index+1}}</div>
          <div class="content">{{item.name}}</div>
          <div class="content">{{item.note}}</div>
          <div class="content">{{item.join_time}}</div>
        </div>
      </scroll-view>
      <!-- <div class="list">
        <div class="item" v-for="(item, index) in listData" :key="index">
          <div class="content">{{item.join_time}}</div>
          <div class="content">{{item.note}}</div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tip: `本期活动:\r\n为回馈广大用户对本网咖的厚爱,网咖推出送奖品活动!\r\n达到以下条件均可获赠奖品一份:\r\n1.英雄联盟 任意区服获得5杀(人机除外)\r\n2.大逃亡任意服吃鸡(第1名)`,
      listData: [],
      hasMore: true,
      scrollTop: 0
    };
  },
  mounted() {
    this.hasMore = true;
    this.getList();
  },
  methods: {
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
          join_time: new Date(item.join_time * 1000)
            .toLocaleString()
            .replace(/:\d{1,2}$/, "")
            .replace(/[\u4e00-\u9fa5]+/, "")
        };
      });
    },
    lower(e) {
      if (!this.hasMore) {
        return;
      }
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
  }
  .gift-list-container {
    height: calc(100% - 300rpx);
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
          font-size: 16px;
        }
      }
    }
  }
}
</style>
