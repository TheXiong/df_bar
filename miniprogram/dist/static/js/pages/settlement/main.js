global.webpackJsonp([1],{

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(164);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-cell-group': '../../static/dist/cell-group/index',
      'i-cell': '../../static/dist/cell/index',
      "i-input": "../../static/dist/input/index"
    }
  }
});

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_141d941c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(171);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(165)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-141d941c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_141d941c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\settlement\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-141d941c", Component.options)
  } else {
    hotAPI.reload("data-v-141d941c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 165:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_pay__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(4);



var _components$data$comp;

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




/* harmony default export */ __webpack_exports__["a"] = (_components$data$comp = {
  components: {
    pay: __WEBPACK_IMPORTED_MODULE_3__components_pay__["a" /* default */]
  },
  data: function data() {
    return {
      address: ''
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapState */])(["commdityShoppingName", "commdityShopping", "commdityOrder", "userOrderAddres"]), {
    // 实际价格
    commditySumPrice: function commditySumPrice() {
      var commditySumPrice = 0;
      __WEBPACK_IMPORTED_MODULE_2_lodash___default.a.forEach(this.commdityShopping, function (value, key) {
        commditySumPrice += value.integral * value.num;
      });

      // if (commditySumPrice < 10) {
      //   commditySumPrice += 1
      // }
      return commditySumPrice;
    }
  })
}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components$data$comp, "data", function data() {
  return {
    randomSum: 0,
    payShow: false,
    commdityOrders: {
      commdityOrderName: "",
      commdityOrderShopping: [],
      commdityOrderOffer: 0,
      commdityOrderActual: this.commditySumPrice,
      commdityOrderSumPrice: 0,
      commdityOrderUserAddress: {}
    }
  };
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_components$data$comp, "methods", {
  payClickTest: function payClickTest() {
    var _this = this;
    // if (this.userAddres.length === 0) {
    //   this.tipsMessage.status = true
    //   setTimeout(function () {
    //     _this.tipsMessage.status = false
    //   }, 500)
    //   return false
    // }
    this.commdityOrders.commdityOrderName = this.commdityShoppingName;
    this.commdityOrders.commdityOrderShopping = this.commdityShopping;
    this.commdityOrders.commdityOrderOffer = this.randomSum;
    this.commdityOrders.commdityOrderActual = this.commditySumPrice;
    this.commdityOrders.commdityOrderSumPrice = this.commditySumPriceYH;
    this.commdityOrders.commdityOrderUserAddress = this.setUserOrderAddres;
    this.$store.dispatch("setCommdityOrder", this.commdityOrders);
    // this.commdityOrders.commdityOrderName = ''
    // this.commdityOrders.commdityOrderShopping = []
    this.payShow = true;
    // console.log(this.commdityOrder)
  },
  closePayFull: function closePayFull(status) {
    this.payShow = status;
  }
}), _components$data$comp);

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_pay_vue__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2b37686c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_pay_vue__ = __webpack_require__(170);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(168)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2b37686c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_pay_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2b37686c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_pay_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\pay.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] pay.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b37686c", Component.options)
  } else {
    hotAPI.reload("data-v-2b37686c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 168:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);

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
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapState */])(['commdityShopping'])),
  methods: {
    blackIndex: function blackIndex() {
      // console.log('blackindex')
      this.closePayFull();
      wx.switchTab({
        url: '../index/main'
      });
    },
    checkOrder: function checkOrder() {
      // console.log('checkOrder')
      this.closePayFull();
      wx.switchTab({
        url: '../order/main'
      });
    },
    closePayFull: function closePayFull() {
      this.$emit('closePayFull', false);
      this.$store.dispatch('setCommdityShoppingClear');
    }
  }
});

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "payContainer"
  }, [_c('div', {
    staticClass: "payFull"
  }, [_c('div', {
    staticClass: "payContent"
  }, [_c('div', {
    staticClass: "payContentTitle"
  }, [_vm._v("\n        支付成功\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "payContentButton"
  }, [_c('div', {
    staticClass: "payContentButtonL",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.blackIndex
    }
  }, [_vm._v("返回首页")]), _vm._v(" "), _c('div', {
    staticClass: "payContentButtonR",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.checkOrder
    }
  }, [_vm._v("查看订单")])])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b37686c", esExports)
  }
}

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "settlementContainer"
  }, [_c('div', {
    staticClass: "settlementMain"
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_c('i-cell', {
    attrs: {
      "title": _vm.commdityShoppingName,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _vm._l((_vm.commdityShopping), function(item, index) {
    return _c('i-cell', {
      key: index,
      attrs: {
        "title": item.name,
        "value": (item.integral) * (item.num),
        "mpcomid": '1-' + index
      }
    })
  })], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "settlementFooter"
  }, [_c('div', {
    staticClass: "settlementFooterL"
  }, [_c('p', {
    staticClass: "settlementFooterLM"
  }, [_c('span', {
    staticClass: "settlementFooterLMSum"
  }, [_vm._v(_vm._s(_vm.commditySumPrice) + "元")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "settlementFooterR",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.payClickTest
    }
  }, [_vm._v("去支付")])]), _vm._v(" "), (_vm.payShow) ? _c('pay', {
    attrs: {
      "eventid": '1',
      "mpcomid": '3'
    },
    on: {
      "closePayFull": _vm.closePayFull
    }
  }) : _vm._e(), _vm._v(" "), (_vm.tipsMessage.status) ? _c('div', {
    staticClass: "tipsMessage"
  }, [_vm._v(_vm._s(_vm.tipsMessage.message))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "height": "100rpx"
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-141d941c", esExports)
  }
}

/***/ })

},[163]);
//# sourceMappingURL=main.js.map