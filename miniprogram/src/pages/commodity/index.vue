<template>
  <div class="commodityContainer">
    <!-- <div class="commodity">
    <img src="/static/img/cb.png" alt="cb">
    <div class="commodityLogo">
      <img src="/static/img/xbk.png" alt="xbk">
    </div>
    </div>-->

    <!-- <div class="commodityTitle">{{commodityName}}</div>
    <div class="commodityDetail">10元元起送|免费配送</div>-->

    <div class="commodityList">点餐</div>

    <div class="commodityListShopp">
      <div class="commodityListShoppMenu">
        <ul>
          <!--class="active"-->
          <!-- <li :class="{active: index === commodityIndexs}" @click="toggleList(index)" v-for="(item, index) in commodityList" :key="index">{{item.commodityMenu}}</li> -->
          <li
            :class="{active: item.id === productTypesId}"
            @click="toggleList(item.id)"
            v-for="(item, index) in productTypes"
            :key="item.id"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="commodityListShoppContent">
        <scroll-view
          scroll-y="true"
          @scrolltolower="lower"
          :scroll-top="scrollTop"
          class="commodityToggleList commodityToggle"
        >
          <div
            class="commodityListShoppContentD"
            v-for="(product, index) in productList"
            :key="index"
            :id="'product'+product.id"
          >
            <div class="commodityListShoppContentDImg">
              <img :src="product.img" :alt="product.alt" />
            </div>
            <div class="commodityListShoppContentDD">
              <p class="commodityListShoppContentDDT">{{product.name}}</p>
              <p class="commodityListShoppContentDDM">{{product.integral}}积分</p>
              <!-- <div class="commodityAdd">
                <img src="/static/img/add.png" alt="add" />
              </div>-->
              <div class="commodityShoppListSwitch addAndMinus">
                <div class="commodityShoppListSwitchLess" @click="minusCommodity(product)">－</div>
                <div class="commodityShoppListSwitchSum">{{product.num}}</div>
                <div class="commodityShoppListSwitchAdd" @click="addCommodity(product)">＋</div>
              </div>
            </div>
          </div>
        </scroll-view>
      </div>
    </div>

    <div :class="{commodityShoppListToggle: commodityToggleShow}" class="commodityShoppList">
      <i-cell-group>
        <i-cell :title="item.name" v-for="(item, index) in commdityShopping" :key="index">
          <div slot="footer">
            <div class="commodityShoppListM">{{item.integral * item.num}}积分</div>
            <div class="commodityShoppListSwitch">
              <div
                class="commodityShoppListSwitchLess"
                @click="commodityShoppListSwitchLess(index)"
              >－</div>
              <div class="commodityShoppListSwitchSum">{{item.num}}</div>
              <div class="commodityShoppListSwitchAdd" @click="commodityShoppListSwitchAdd(index)">＋</div>
            </div>
          </div>
        </i-cell>

        <!-- <i-cell title="配送费">
          <div slot="footer">{{commodityPrice >= 10 ? 0 : 1}}积分</div>
        </i-cell>-->
      </i-cell-group>
    </div>

    <div
      class="commoditySum"
      :class="{commoditySumStatus: commoditySumShopp}"
      @click="commodityToggleShowList"
    >
      <div class="commodityG" :class="{commodityGStatus: commoditySumShopp}">
        <i-icon
          type="publishgoods_fill"
          size="40"
          :color=" commoditySumShopp === 0 ?  '#5f5f63' : '#ffffff' "
        />
        <div v-if="commoditySumShopp" class="commodityGsum">{{commoditySumShopp}}</div>
      </div>
      <div class="commodityD">
        <p
          class="commodityDM"
          :class="{commodityDMStatus: commoditySumShopp }"
        >{{ commoditySumShopp === 0 ? '未选购商品' : commodityPrice + '积分' }}</p>
        <p class="commodityDD">您的积分：{{ userInfo?userInfo.integral:'' }}</p>
      </div>
      <div
        class="commodityM"
        :class="{commodityMStatus: commoditySumShopp}"
        @click.stop="settlement"
      >{{ commoditySumShopp === 0 ? '' : '去下单'}}</div>
    </div>

    <div
      :class="{commodityFullToggle:  commodityToggleShow }"
      @click="commodityToggleShowList"
      class="commodityFull"
    ></div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapState } from "vuex";
export default {
  data() {
    return {
      commodityIndexs: 0,
      commodityToggleShow: false,
      commodityName: "九三鸭霸王外卖店",
      productTypes: [], //小吃类型
      productTypesId: 0, //当前所选类型
      productList: [],
      hasMore: true,
      scrollTop: 0
    };
  },
  computed: {
    ...mapState(["commdityShopping", "userInfo"]),
    commodityPrice: function() {
      let sumPrice = 0;
      _.forEach(this.commdityShopping, function(value, key) {
        sumPrice += value.integral * value.num;
      });
      // if (sumPrice < 10) {
      //   sumPrice += 1;
      // }

      return sumPrice;
    },
    commoditySumShopp: function() {
      let Sum = 0;
      _.forEach(this.commdityShopping, function(value, key) {
        Sum += value.num;
      });
      return Sum;
    }
  },
  watch: {
    commdityShopping:{
      handler: function(){
        this.mapCartToProductList()
      },
      deep: true
    }
  },
  mounted() {
    this.hasMore = true;
    this.$fly.post("/u/goods_group_list", {}).then(res => {
      this.productTypes = res.data.data;
      this.productTypesId = this.productTypes[0].id || 0;
      this.getProductList();
    });
  },
  methods: {
    // 切换列表
    toggleList(id) {
      this.productTypesId = id;
      this.hasMore = true;
      this.scrollTop = 0;
      this.getProductList();
    },
    mapCartToProductList() {
      let cartList = this.commdityShopping;
      let productList = this.productList;
      this.productList = productList.map(product => {
        let commodityFindIndex = _.findIndex(cartList, function(o) {
          return o.id === product.id;
        });
        if (commodityFindIndex !== -1) {
          product.num = cartList[commodityFindIndex].num;
        }else{
          product.num = 0;
        }
        return product;
      });
    },
    getProductList() {
      this.$fly
        .post("/u/goods_list", { group: this.productTypesId })
        .then(res => {
          if (res.data.data) {
            this.productList = res.data.data.map(item => {
              return {
                ...item,
                num: 0
              };
            });
            if (res.data.data.length < 10) {
              this.hasMore = false;
            }
          } else {
            this.hasMore = false;
          }
        });
    },
    // 遮罩层切换
    commodityToggleShowList() {
      if (this.commdityShopping.length === 0) {
        return false;
      }
      this.commodityToggleShow = !this.commodityToggleShow;
    },
    // 添加商品
    addCommodity(product) {
      let commodityFindIndex = _.findIndex(this.commdityShopping, function(o) {
        return o.id === product.id;
      });
      // 拷贝对象
      let productCopy = _.clone(product);
      if (commodityFindIndex !== -1) {
        this.commodityShoppListSwitchAdd(commodityFindIndex);
      } else {
        this.$store.dispatch("setCommdityShopping", productCopy);
      }
    },
    minusCommodity(product) {
      if (product.num < 1) {
        return;
      }
      let commodityFindIndex = _.findIndex(this.commdityShopping, function(o) {
        return o.id === product.id;
      });
      // 拷贝对象
      if (commodityFindIndex !== -1) {
        this.$store.dispatch("setCommdityShoppingLess", commodityFindIndex);
      }
    },
    // 数量减
    commodityShoppListSwitchLess(index) {
      this.$store.dispatch("setCommdityShoppingLess", index);
      if (this.commdityShopping.length === 0) {
        this.commodityToggleShow = false;
      }
    },
    // 数量加
    commodityShoppListSwitchAdd(index) {
      this.$store.dispatch("setCommdityShoppingAdd", index);
    },
    // 设置商家名
    setCommdityShoppName() {
      this.$store.dispatch("setCommdityShoppingName", this.commodityName);
    },
    settlement() {
      if (this.commoditySumShopp) {
        this.commodityToggleShow = false;
        wx.navigateTo({
          url: "/pages/settlement/main"
        });
      } else {
        return false;
      }
    },
    getTheBigId(arr) {
      return arr.reduce((prev, current) => {
        if (prev) {
          //不为null
          prev = prev > current.id ? prev : current.id;
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
      this.$fly
        .post("/u/goods_list", {
          group: this.productTypesId,
          id: this.getTheBigId(this.productList)
        })
        .then(res => {
          if (res.data.data) {
            let list = res.data.data.map(item => {
              return {
                ...item,
                num: 0
              };
            });
            this.productList = [...this.productList, ...list];
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
.commodityContainer {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.commodity {
  width: 100%;
  height: 200rpx;
  position: relative;
  background: #eee;
  img {
    width: 100%;
    height: 100%;
  }
  .commodityLogo {
    position: absolute;
    width: 150rpx;
    height: 150rpx;
    top: 80rpx;
    left: 50%;
    margin: 0 0 0 -75rpx;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.commodityTitle {
  text-align: center;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  margin-top: 64rpx;
}
.commodityDetail {
  text-align: center;
  color: #666666;
  font-size: 14px;
  margin-top: 20rpx;
}

.commodityList {
  width: 100%;
  height: 80rpx;
  line-height: 80rpx;
  background: #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;

  margin-top: 20rpx;

  text-align: center;
  color: #333;
  font-size: 16px;
}

.commodityListShopp {
  width: 100%;
  height: 100%;
  padding-bottom: 100rpx;
  /*margin-bottom:100rpx;*/
  overflow: hidden;
  flex: 1;

  .commodityListShoppMenu {
    width: 154rpx;
    float: left;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        width: 154rpx;
        height: 100rpx;
        line-height: 100rpx;
        text-align: center;
        color: #666;
        background: #f8f8f8;
        font-size: 14px;
      }
      li.active {
        background: #fff;
        color: #333;
      }
    }
  }
}

.commodityListShoppContent {
  width: 570rpx;
  margin-left: 20rpx;
  height: 100%;
  float: left;

  .commodityToggle {
    display: block !important;
  }
  .commodityToggleList {
    display: none;
    height: 100%;
  }

  .commodityListShoppContentD {
    width: 100%;
    height: 190rpx;
    margin-top: 20rpx;
    margin-bottom: 40rpx;
    .commodityListShoppContentDImg {
      width: 190rpx;
      height: 190rpx;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .commodityListShoppContentDD {
      float: left;
      width: 330rpx;
      height: 100%;
      margin-left: 20rpx;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .commodityListShoppContentDDT {
        color: #333;
        font-size: 16px;
        font-weight: bold;
      }
      .commodityListShoppContentDDD {
        color: #999;
        font-size: 14px;
        overflow: hidden;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 40rpx;
      }
      .commodityListShoppContentDDM {
        color: #ff5339;
        font-size: 14px;
        line-height: 70rpx;
      }
      // .commodityAdd {
      //   width: 44rpx;
      //   height: 44rpx;
      //   overflow: hidden;
      //   position: absolute;
      //   right: 30rpx;
      //   bottom: 20rpx;
      //   img {
      //     width: 100%;
      //     height: 100%;
      //   }
      // }
      .addAndMinus {
        position: absolute;
        display: flex;
        flex-direction: row;
        right: 0;
        bottom: 22rpx;
      }
      .commodityShoppListSwitch {
        width: 180rpx;
        height: 70rpx;
        line-height: 70rpx;
        .commodityShoppListSwitchLess {
          width: 44rpx;
          height: 44rpx;
          line-height: 44rpx;
          text-align: center;
          color: #2396ff;
          font-size: 16px;
          font-weight: bold;
          border: 1px solid #2396ff;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;

          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;

          float: left;
          margin-top: 16rpx;
        }
        .commodityShoppListSwitchSum {
          width: 82rpx;
          height: 100%;
          text-align: center;
          line-height: 70rpx;
          float: left;
          color: #212121;
          font-size: 16px;
          overflow: hidden;
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .commodityShoppListSwitchAdd {
          width: 44rpx;
          height: 44rpx;
          line-height: 44rpx;
          text-align: center;
          color: #fff;
          font-size: 16px;
          font-weight: bold;
          background: #2396ff;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;

          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;

          float: left;
          margin-top: 16rpx;
        }
      }
    }
  }
}

.commodityemtyp {
  width: 100%;
  height: 96rpx;
  background: #fff;
}
.commoditySum {
  width: 100%;
  height: 96rpx;
  background: #505052;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  .commodityG {
    width: 100rpx;
    height: 100rpx;
    background: #363636;
    border: 10rpx solid #444444;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    position: absolute;
    left: 24rpx;
    bottom: 16rpx;
    text-align: center;
    line-height: 100rpx;
    .commodityGsum {
      width: 40rpx;
      height: 40rpx;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      position: absolute;
      top: 0rpx;
      right: -30rpx;
      background: #ff6917;
      color: #fff;
      font-size: 12px;
      line-height: 40rpx;
    }
  }

  .commodityD {
    position: absolute;
    left: 180rpx;
    width: auto;
    height: 96rpx;
    color: #fff;
    .commodityDM {
      font-size: 14px;
      color: #999;
      line-height: 60rpx;
    }
    .commodityDD {
      font-size: 10px;
      color: #999;
      line-height: 20rpx;
    }
  }

  .commodityM {
    width: 210rpx;
    height: 96rpx;
    background: #535356;
    float: right;
    color: #fff;
    font-size: 16px;
    text-align: center;
    line-height: 96rpx;
  }
}

.commodityShoppList {
  position: fixed;
  bottom: -100%;
  left: 0;
  right: 0;
  z-index: 99;
  padding-bottom: 30rpx;
  background: #fff;

  -webkit-transition: bottom 0.28s;
  -moz-transition: bottom 0.28s;
  -ms-transition: bottom 0.28s;
  -o-transition: bottom 0.28s;
  transition: bottom 0.28s;

  max-height: 700rpx;
  overflow: auto;

  .commodityShoppListM {
    width: 110rpx;
    height: 110rpx;
    float: left;
    line-height: 110rpx;
    text-align: center;
    color: #ff5339;
    font-size: 16px;
    font-weight: bold;
  }
  .commodityShoppListSwitch {
    width: 180rpx;
    height: 110rpx;
    line-height: 110rpx;
    float: left;
    .commodityShoppListSwitchLess {
      width: 44rpx;
      height: 44rpx;
      line-height: 44rpx;
      text-align: center;
      color: #2396ff;
      font-size: 16px;
      font-weight: bold;
      border: 1px solid #2396ff;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;

      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;

      float: left;

      margin-top: 33rpx;
    }
    .commodityShoppListSwitchSum {
      width: 82rpx;
      height: 100%;
      text-align: center;
      line-height: 110rpx;
      float: left;
      color: #212121;
      font-size: 16px;
      overflow: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .commodityShoppListSwitchAdd {
      width: 44rpx;
      height: 44rpx;
      line-height: 44rpx;
      text-align: center;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      background: #2396ff;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;

      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;

      float: left;

      margin-top: 33rpx;
    }
  }
}

.commodityShoppListToggle {
  bottom: 96rpx;
}

.commodityFull {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 9;

  opacity: 0;
  display: none;

  -webkit-transition: opacity 0.28s;
  -moz-transition: opacity 0.28s;
  -ms-transition: opacity 0.28s;
  -o-transition: opacity 0.28s;
  transition: opacity 0.28s;
}
.commodityFullToggle {
  opacity: 1;
  display: block;
}

.commoditySumStatus {
  background: #464648 !important;
}
.commodityGStatus {
  background: #3190e8 !important;
  color: #fff !important;
}
.commodityMStatus {
  background: #3190e8 !important;
}
.commodityDMStatus {
  color: #fff !important;
}
</style>
