global.webpackJsonp([6],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(106);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-cell-group': '../../static/dist/cell-group/index',
      'i-cell': '../../static/dist/cell/index',
      'i-icon': '../../static/dist/icon/index'
    }
  }
});

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7f30398a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(109);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(107)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7f30398a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_7f30398a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\order\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f30398a", Component.options)
  } else {
    hotAPI.reload("data-v-7f30398a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 107:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(2);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      orderTipsMessage: false,
      commdityShoppingIndex: 0
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapState */])(['commdityOrder'])),
  methods: {
    orderCloseDel: function orderCloseDel() {
      this.orderToggleFull(false);
      return false;
    },
    orderSaveUpdate: function orderSaveUpdate() {
      this.$store.dispatch('delCommdityOrder', this.commdityShoppingIndex);
      this.orderToggleFull(false);
    },

    // 切换显示弹出层
    orderToggleFull: function orderToggleFull(status) {
      this.orderTipsMessage = status;
    },
    DeltoggleFull: function DeltoggleFull(index) {
      this.orderToggleFull(true);
      this.commdityShoppingIndex = index;
    }
  }
});

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ordercontainer"
  }, [(!_vm.commdityOrder.length) ? _c('div', {
    staticClass: "orderNoList"
  }, [_vm._m(0), _vm._v(" "), _c('p', {
    staticClass: "orderTitle"
  }, [_vm._v("当前没有订单！")])], 1) : _c('div', {
    staticClass: "orderList"
  }, _vm._l((_vm.commdityOrder), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "orderListBlock"
    }, [_c('i-cell-group', {
      attrs: {
        "mpcomid": '8-' + index
      }
    }, [_c('i-cell', {
      attrs: {
        "title": item.commdityOrderName,
        "mpcomid": '1-' + index
      }
    }, [_c('i-icon', {
      attrs: {
        "type": "delete_fill",
        "color": "#d9644c",
        "size": "18",
        "eventid": '0-' + index,
        "mpcomid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.DeltoggleFull(index)
        }
      },
      slot: "footer"
    })], 1), _vm._v(" "), _vm._l((item.commdityOrderShopping), function(itemChild, indexChild) {
      return _c('i-cell', {
        key: indexChild,
        attrs: {
          "title": itemChild.commodityName,
          "value": (itemChild.commodityMoney) + ' * ' + (itemChild.commoditySum) + ' = ' + (itemChild.commodityMoney * itemChild.commoditySum),
          "mpcomid": '2-' + index + '-' + indexChild
        }
      })
    }), _vm._v(" "), _c('i-cell', {
      attrs: {
        "title": "配送费",
        "value": item.commdityOrderActual < 10 ? 1 : 0,
        "mpcomid": '3-' + index
      }
    }), _vm._v(" "), _c('i-cell', {
      attrs: {
        "title": "优惠金额",
        "value": item.commdityOrderOffer,
        "mpcomid": '4-' + index
      }
    }), _vm._v(" "), _c('i-cell', {
      attrs: {
        "title": "需要支付",
        "value": item.commdityOrderActual,
        "mpcomid": '5-' + index
      }
    }), _vm._v(" "), _c('i-cell', {
      attrs: {
        "title": "实际支付",
        "value": item.commdityOrderSumPrice,
        "mpcomid": '6-' + index
      }
    }), _vm._v(" "), _c('i-cell', {
      attrs: {
        "title": "配送地址",
        "value": item.commdityOrderUserAddress.phone,
        "label": item.commdityOrderUserAddress.name + ',' + item.commdityOrderUserAddress.address,
        "mpcomid": '7-' + index
      }
    })], 2)], 1)
  })), _vm._v(" "), (_vm.orderTipsMessage) ? _c('div', {
    staticClass: "delOrderContainer"
  }, [_c('div', {
    staticClass: "delFull"
  }, [_c('div', {
    staticClass: "delContent"
  }, [_c('div', {
    staticClass: "delContentTitle"
  }, [_vm._v("\n          确定删除该订单吗？\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "delContentButton"
  }, [_c('div', {
    staticClass: "delContentButtonL",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.orderCloseDel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('div', {
    staticClass: "delContentButtonR",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.orderSaveUpdate
    }
  }, [_vm._v("确定")])])])])]) : _vm._e()])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "orderImg"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/order.png",
      "alt": "ndd"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7f30398a", esExports)
  }
}

/***/ })

},[105]);
//# sourceMappingURL=main.js.map