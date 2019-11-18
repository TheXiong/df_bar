global.webpackJsonp([14],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(114);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-icon': '../../static/dist/icon/index',
      'i-cell-group': '../../static/dist/cell-group/index',
      'i-cell': '../../static/dist/cell/index',
      'i-input': '../../static/dist/input/index'
    }
  }
});

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9ef0214c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(117);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(115)
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

/***/ 115:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(6);


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
      scrollTop: 0
    };
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
  mounted: function mounted() {
    var _this = this;

    this.$fly.post("/u/goods_group_list", {}).then(function (res) {
      _this.productTypes = res.data.data;
      _this.productTypesId = _this.productTypes[0].id || 0;
      _this.getProductList();
    });
  },

  methods: {
    // 切换列表
    toggleList: function toggleList(id) {
      this.productTypesId = id;
      this.hasMore = true;
      this.scrollTop = 0;
      this.getProductList();
    },
    getProductList: function getProductList() {
      var _this2 = this;

      this.$fly.post("/u/goods_list", { group: this.productTypesId }).then(function (res) {
        _this2.productList = res.data.data;
        if (res.data.data.length < 10) {
          _this2.hasMore = false;
        }
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

    // 数量减
    commodityShoppListSwitchLess: function commodityShoppListSwitchLess(index) {
      console.log(this.commdityShopping);
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
    lower: function lower(e) {
      var _this3 = this;

      if (!this.hasMore) {
        return;
      }
      this.$fly.post("/u/goods_list", {
        group: this.productTypesId,
        id: this.productList[this.productList.length - 1].id
      }).then(function (res) {
        if (res.data.data) {
          _this3.productList = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this3.productList), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(res.data.data));
          _this3.scrollTop = e.target.scrollTop;
          if (res.data.data.length < 10) {
            _this3.hasMore = false;
          }
        } else {
          _this3.hasMore = false;
        }
      });
    }
  }
});

/***/ }),

/***/ 117:
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
      "eventid": '2'
    },
    on: {
      "scrolltolower": _vm.lower,
      "scroll": _vm.scroll
    }
  }, _vm._l((_vm.productList), function(product, index) {
    return _c('div', {
      key: index,
      staticClass: "commodityListShoppContentD",
      attrs: {
        "id": 'product' + product.id,
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.addCommodity(product)
        }
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
      staticClass: "commodityListShoppContentDDD"
    }, [_vm._v(_vm._s(product.detail))]), _vm._v(" "), _c('p', {
      staticClass: "commodityListShoppContentDDM"
    }, [_vm._v(_vm._s(product.integral) + "元")]), _vm._v(" "), _c('div', {
      staticClass: "commodityAdd"
    }, [_c('img', {
      attrs: {
        "src": "/static/img/add.png",
        "alt": "add"
      }
    })])], 1)])
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "commodityemtyp"
  }), _vm._v(" "), _c('div', {
    staticClass: "commodityShoppList",
    class: {
      commodityShoppListToggle: _vm.commodityToggleShow
    }
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_vm._l((_vm.commdityShopping), function(item, index) {
    return _c('i-cell', {
      key: index,
      attrs: {
        "title": item.name,
        "mpcomid": '0-' + index
      }
    }, [_c('div', {
      slot: "footer"
    }, [_c('div', {
      staticClass: "commodityShoppListM"
    }, [_vm._v(_vm._s(item.integral * item.num) + "元")]), _vm._v(" "), _c('div', {
      staticClass: "commodityShoppListSwitch"
    }, [_c('div', {
      staticClass: "commodityShoppListSwitchLess",
      attrs: {
        "eventid": '3-' + index
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
        "eventid": '4-' + index
      },
      on: {
        "click": function($event) {
          _vm.commodityShoppListSwitchAdd(index)
        }
      }
    }, [_vm._v("＋")])])])])
  }), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "配送费",
      "mpcomid": '1'
    }
  }, [_c('div', {
    slot: "footer"
  }, [_vm._v(_vm._s(_vm.commodityPrice >= 10 ? 0 : 1) + "元")])])], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "commoditySum",
    class: {
      commoditySumStatus: _vm.commoditySumShopp
    },
    attrs: {
      "eventid": '6'
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
  }, [_vm._v(_vm._s(_vm.commoditySumShopp === 0 ? '未选购商品' : _vm.commodityPrice + '元'))]), _vm._v(" "), _c('p', {
    staticClass: "commodityDD"
  }, [_vm._v("您的积分：" + _vm._s(_vm.userInfo ? _vm.userInfo.integral : ''))])], 1), _vm._v(" "), _c('div', {
    staticClass: "commodityM",
    class: {
      commodityMStatus: _vm.commoditySumShopp
    },
    attrs: {
      "eventid": '5'
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
      "eventid": '7'
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

},[113]);
//# sourceMappingURL=main.js.map