global.webpackJsonp([3],{

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(135);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {}
  }
});

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_80a34396_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(139);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(136)
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-80a34396"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_80a34396_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\integral\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-80a34396", Component.options)
  } else {
    hotAPI.reload("data-v-80a34396", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 136:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(5);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      listData: [],
      scrollTop: 0,
      hasMore: true
    };
  },
  mounted: function mounted() {
    this.hasMore = true;
    this.getExchangeLog();
  },

  methods: {
    getExchangeLog: function getExchangeLog() {
      var _this = this;

      this.$fly.post("/u/integral_log", {}).then(function (res) {
        if (res.data.data) {
          _this.listData = _this.transformData(res.data.data);
          if (res.data.data.length < 10) {
            _this.hasMore = false;
          }
        } else {
          _this.hasMore = false;
        }
      });
    },
    transformData: function transformData(arr) {
      return arr.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, item, {
          join_time: new Date(item.join_time * 1000).toLocaleString().replace(/:\d{1,2}$/, '').replace(/[\u4e00-\u9fa5]+/, '')
        });
      });
    },
    getTheSmallId: function getTheSmallId(arr) {
      return arr.reduce(function (prev, current) {
        if (prev) {
          //不为null
          prev = prev < current.id ? prev : current.id;
        } else {
          prev = current.id;
        }
        return prev;
      }, null);
    },
    lower: function lower(e) {
      var _this2 = this;

      if (!this.hasMore) {
        return;
      }
      this.$fly.post("/u/integral_log", {
        id: this.getTheSmallId(this.listData)
      }).then(function (res) {
        if (res.data.data) {
          _this2.listData = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this2.listData), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this2.transformData(res.data.data)));
          _this2.scrollTop = e.target.scrollTop;
          if (res.data.data.length < 10) {
            _this2.hasMore = false;
          }
        } else {
          _this2.hasMore = false;
        }
      });
    }
  }
});

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "exchange-container"
  }, [_c('view', {
    staticClass: "table-inner-wraper",
    staticStyle: {
      "padding": "15px"
    }
  }, [_c('view', {
    staticClass: "table"
  }, [_vm._m(0), _vm._v(" "), _c('scroll-view', {
    staticClass: "scroll-container",
    attrs: {
      "scroll-y": "true",
      "scroll-top": _vm.scrollTop,
      "eventid": '0'
    },
    on: {
      "scrolltolower": _vm.lower
    }
  }, _vm._l((_vm.listData), function(item, index) {
    return _c('block', {
      key: index
    }, [(index % 2 == 0) ? _c('view', {
      staticClass: "tr bg-g"
    }, [_c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.join_time))]), _vm._v(" "), _c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.note))]), _vm._v(" "), _c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.change))]), _vm._v(" "), _c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.result))])]) : _vm._e(), _vm._v(" "), _c('view', {
      staticClass: "tr",
      attrs: {
        "wx:else": ""
      }
    }, [_c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.join_time))]), _vm._v(" "), _c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.note))]), _vm._v(" "), _c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.change))]), _vm._v(" "), _c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.result))])])])
  }))], 1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "tr bg-w"
  }, [_c('view', {
    staticClass: "th"
  }, [_vm._v("时间")]), _vm._v(" "), _c('view', {
    staticClass: "th"
  }, [_vm._v("名称")]), _vm._v(" "), _c('view', {
    staticClass: "th"
  }, [_vm._v("消耗积分")]), _vm._v(" "), _c('view', {
    staticClass: "th"
  }, [_vm._v("剩余积分")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-80a34396", esExports)
  }
}

/***/ })

},[134]);
//# sourceMappingURL=main.js.map