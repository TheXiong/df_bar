global.webpackJsonp([8],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(103);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-icon': '../../static/dist/icon/index',
      'i-cell-group': '../../static/dist/cell-group/index',
      'i-cell': '../../static/dist/cell/index',
      'i-input': '../../static/dist/input/index',
      'i-load-more': '../../static/dist/load-more/index'
    }
  }
});

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9ef0214c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(111);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(104)
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9ef0214c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9ef0214c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\commodity\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ef0214c", Component.options)
  } else {
    hotAPI.reload("data-v-9ef0214c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 104:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(5);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      commodityIndexs: 0,
      commodityToggleShow: false,
      commodityName: "九三鸭霸王外卖店",
      productTypes: [], //小吃类型
      productTypesId: 0, //当前所选类型
      productList: [],
      hasMore: true,
      scrollTop: 0,
      hasMounted: false,
      loading: false
    };
  },
  onShow: function onShow() {
    if (this.hasMounted) {
      this.getList();
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.getList();
    wx.showNavigationBarLoading();
  },

  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapState */])(["commdityShopping", "userInfo"]), {
    commodityPrice: function commodityPrice() {
      var sumPrice = 0;
      __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.forEach(this.commdityShopping, function (value, key) {
        sumPrice += value.integral * value.num;
      });
      // if (sumPrice < 10) {
      //   sumPrice += 1;
      // }

      return sumPrice;
    },
    commoditySumShopp: function commoditySumShopp() {
      var Sum = 0;
      __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.forEach(this.commdityShopping, function (value, key) {
        Sum += value.num;
      });
      return Sum;
    }
  }),
  watch: {
    commdityShopping: {
      handler: function handler() {
        this.mapCartToProductList();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    this.hasMore = true;
    this.hasMounted = true;
    this.getList();
  },

  methods: {
    getList: function getList() {
      var _this = this;

      this.$fly.post("/u/goods_group_list", {}).then(function (res) {
        _this.productTypes = res.data.data;
        _this.productTypesId = _this.productTypes[0].id || 0;
        _this.getProductList();
      });
    },

    // 切换列表
    toggleList: function toggleList(id) {
      this.productTypesId = id;
      this.hasMore = true;
      this.scrollTop = 0;
      this.getProductList();
    },
    mapCartToProductList: function mapCartToProductList() {
      var cartList = this.commdityShopping;
      var productList = this.productList;
      this.productList = productList.map(function (product) {
        var commodityFindIndex = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(cartList, function (o) {
          return o.id === product.id;
        });
        if (commodityFindIndex !== -1) {
          product.num = cartList[commodityFindIndex].num;
        } else {
          product.num = 0;
        }
        return product;
      });
    },
    getProductList: function getProductList() {
      var _this2 = this;

      this.$fly.post("/u/goods_list", { group: this.productTypesId }).then(function (res) {
        if (res.data.data) {
          _this2.productList = res.data.data.map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, item, {
              num: 0
            });
          });
          if (res.data.data.length < 10) {
            _this2.hasMore = false;
          }
        } else {
          _this2.productList = [];
          _this2.hasMore = false;
        }
        try {
          wx.hideNavigationBarLoading();
          wx.stopPullDownRefresh();
        } catch (error) {}
      });
    },

    // 遮罩层切换
    commodityToggleShowList: function commodityToggleShowList() {
      if (this.commdityShopping.length === 0) {
        return false;
      }
      this.commodityToggleShow = !this.commodityToggleShow;
    },

    // 添加商品
    addCommodity: function addCommodity(product) {
      var commodityFindIndex = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(this.commdityShopping, function (o) {
        return o.id === product.id;
      });
      // 拷贝对象
      var productCopy = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.clone(product);
      if (commodityFindIndex !== -1) {
        this.commodityShoppListSwitchAdd(commodityFindIndex);
      } else {
        this.$store.dispatch("setCommdityShopping", productCopy);
      }
    },
    minusCommodity: function minusCommodity(product) {
      if (product.num < 1) {
        return;
      }
      var commodityFindIndex = __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.findIndex(this.commdityShopping, function (o) {
        return o.id === product.id;
      });
      // 拷贝对象
      if (commodityFindIndex !== -1) {
        this.$store.dispatch("setCommdityShoppingLess", commodityFindIndex);
      }
    },

    // 数量减
    commodityShoppListSwitchLess: function commodityShoppListSwitchLess(index) {
      this.$store.dispatch("setCommdityShoppingLess", index);
      if (this.commdityShopping.length === 0) {
        this.commodityToggleShow = false;
      }
    },

    // 数量加
    commodityShoppListSwitchAdd: function commodityShoppListSwitchAdd(index) {
      this.$store.dispatch("setCommdityShoppingAdd", index);
    },

    // 设置商家名
    setCommdityShoppName: function setCommdityShoppName() {
      this.$store.dispatch("setCommdityShoppingName", this.commodityName);
    },
    settlement: function settlement() {
      if (this.commoditySumShopp) {
        this.commodityToggleShow = false;
        wx.navigateTo({
          url: "/pages/settlement/main"
        });
      } else {
        return false;
      }
    },
    getTheBigId: function getTheBigId(arr) {
      return arr.reduce(function (prev, current) {
        if (prev) {
          //不为null
          prev = prev > current.id ? prev : current.id;
        } else {
          prev = current.id;
        }
        return prev;
      }, null);
    },
    lower: function lower(e) {
      var _this3 = this;

      if (!this.hasMore) {
        return;
      }
      this.loading = true;
      this.$fly.post("/u/goods_list", {
        group: this.productTypesId,
        id: this.getTheBigId(this.productList)
      }).then(function (res) {
        if (res.data.data) {
          var list = res.data.data.map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, item, {
              num: 0
            });
          });
          _this3.productList = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this3.productList), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(list));
          _this3.scrollTop = e.target.scrollTop;
          if (res.data.data.length < 10) {
            _this3.hasMore = false;
          }
        } else {
          _this3.hasMore = false;
        }
        _this3.loading = false;
      });
    }
  }
});

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "commodityContainer"
  }, [_c('div', {
    staticClass: "commodityList"
  }, [_vm._v("点餐")]), _vm._v(" "), _c('div', {
    staticClass: "commodityListShopp"
  }, [_c('div', {
    staticClass: "commodityListShoppMenu"
  }, [_c('ul', _vm._l((_vm.productTypes), function(item, index) {
    return _c('li', {
      key: item.id,
      class: {
        active: item.id === _vm.productTypesId
      },
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.toggleList(item.id)
        }
      }
    }, [_vm._v(_vm._s(item.name))])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "commodityListShoppContent"
  }, [_c('scroll-view', {
    staticClass: "commodityToggleList commodityToggle",
    attrs: {
      "scroll-y": "true",
      "scroll-top": _vm.scrollTop,
      "eventid": '3'
    },
    on: {
      "scrolltolower": _vm.lower
    }
  }, [_vm._l((_vm.productList), function(product, index) {
    return _c('div', {
      key: index,
      staticClass: "commodityListShoppContentD",
      attrs: {
        "id": 'product' + product.id
      }
    }, [_c('div', {
      staticClass: "commodityListShoppContentDImg"
    }, [_c('img', {
      attrs: {
        "src": product.img,
        "alt": product.alt
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "commodityListShoppContentDD"
    }, [_c('p', {
      staticClass: "commodityListShoppContentDDT"
    }, [_vm._v(_vm._s(product.name))]), _vm._v(" "), _c('p', {
      staticClass: "commodityListShoppContentDDM"
    }, [_vm._v(_vm._s(product.integral) + "积分")]), _vm._v(" "), _c('div', {
      staticClass: "commodityShoppListSwitch addAndMinus"
    }, [_c('div', {
      staticClass: "commodityShoppListSwitchLess",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.minusCommodity(product)
        }
      }
    }, [_vm._v("－")]), _vm._v(" "), _c('div', {
      staticClass: "commodityShoppListSwitchSum"
    }, [_vm._v(_vm._s(product.num))]), _vm._v(" "), _c('div', {
      staticClass: "commodityShoppListSwitchAdd",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.addCommodity(product)
        }
      }
    }, [_vm._v("＋")])])], 1)])
  }), _vm._v(" "), _c('i-load-more', {
    attrs: {
      "tip": _vm.hasMore ? '加载数据中' : '暂无数据',
      "loading": _vm.loading,
      "mpcomid": '0'
    }
  })], 2)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "commodityShoppList",
    class: {
      commodityShoppListToggle: _vm.commodityToggleShow
    }
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, _vm._l((_vm.commdityShopping), function(item, index) {
    return _c('i-cell', {
      key: index,
      attrs: {
        "title": item.name,
        "mpcomid": '1-' + index
      }
    }, [_c('div', {
      slot: "footer"
    }, [_c('div', {
      staticClass: "commodityShoppListM"
    }, [_vm._v(_vm._s(item.integral * item.num) + "积分")]), _vm._v(" "), _c('div', {
      staticClass: "commodityShoppListSwitch"
    }, [_c('div', {
      staticClass: "commodityShoppListSwitchLess",
      attrs: {
        "eventid": '4-' + index
      },
      on: {
        "click": function($event) {
          _vm.commodityShoppListSwitchLess(index)
        }
      }
    }, [_vm._v("－")]), _vm._v(" "), _c('div', {
      staticClass: "commodityShoppListSwitchSum"
    }, [_vm._v(_vm._s(item.num))]), _vm._v(" "), _c('div', {
      staticClass: "commodityShoppListSwitchAdd",
      attrs: {
        "eventid": '5-' + index
      },
      on: {
        "click": function($event) {
          _vm.commodityShoppListSwitchAdd(index)
        }
      }
    }, [_vm._v("＋")])])])])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "commoditySum",
    class: {
      commoditySumStatus: _vm.commoditySumShopp
    },
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.commodityToggleShowList
    }
  }, [_c('div', {
    staticClass: "commodityG",
    class: {
      commodityGStatus: _vm.commoditySumShopp
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "publishgoods_fill",
      "size": "40",
      "color": _vm.commoditySumShopp === 0 ? '#5f5f63' : '#ffffff',
      "mpcomid": '3'
    }
  }), _vm._v(" "), (_vm.commoditySumShopp) ? _c('div', {
    staticClass: "commodityGsum"
  }, [_vm._v(_vm._s(_vm.commoditySumShopp))]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "commodityD"
  }, [_c('p', {
    staticClass: "commodityDM",
    class: {
      commodityDMStatus: _vm.commoditySumShopp
    }
  }, [_vm._v(_vm._s(_vm.commoditySumShopp === 0 ? '未选购商品' : _vm.commodityPrice + '积分'))]), _vm._v(" "), _c('p', {
    staticClass: "commodityDD"
  }, [_vm._v("您的积分：" + _vm._s(_vm.userInfo ? _vm.userInfo.integral : ''))])], 1), _vm._v(" "), _c('div', {
    staticClass: "commodityM",
    class: {
      commodityMStatus: _vm.commoditySumShopp
    },
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.settlement($event)
      }
    }
  }, [_vm._v(_vm._s(_vm.commoditySumShopp === 0 ? '' : '去下单'))])]), _vm._v(" "), _c('div', {
    staticClass: "commodityFull",
    class: {
      commodityFullToggle: _vm.commodityToggleShow
    },
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": _vm.commodityToggleShowList
    }
  })])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9ef0214c", esExports)
  }
}

/***/ })

},[102]);
//# sourceMappingURL=main.js.map