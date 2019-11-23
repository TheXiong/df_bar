global.webpackJsonp([3],{

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(175);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-load-more': '../../static/dist/load-more/index'
    }
  }
});

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_80b4adb2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(179);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(176)
  __webpack_require__(177)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-80b4adb2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_80b4adb2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\shopp\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-80b4adb2", Component.options)
  } else {
    hotAPI.reload("data-v-80b4adb2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 176:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(8);


//
//
//
//
//
//
//
//
//
//
//
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
      tip: '',
      listData: [],
      hasMore: true,
      scrollTop: 0,
      hasMounted: false,
      loading: true
    };
  },
  mounted: function mounted() {
    this.hasMore = true;
    this.hasMounted = true;
    this.getList();
    this.getTip();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.hasMore = true;
    this.hasMounted = true;
    this.getList();
    this.getTip();
    wx.showNavigationBarLoading();
  },
  onShow: function onShow() {
    if (this.hasMounted) {
      this.getList();
      this.getTip();
    }
  },

  methods: {
    getTip: function getTip() {
      var _this = this;

      this.$fly.post("/u/activity_describe", {}).then(function (res) {
        _this.tip = res.data.data.describe;
      });
    },
    getList: function getList() {
      var _this2 = this;

      this.$fly.post("/u/gift_record", {}).then(function (res) {
        if (res.data.data) {
          _this2.listData = _this2.transformData(res.data.data);
          if (res.data.data.length < 10) {
            _this2.hasMore = false;
          }
        } else {
          _this2.hasMore = false;
        }
        _this2.loading = false;
        try {
          wx.hideNavigationBarLoading();
          wx.stopPullDownRefresh();
        } catch (error) {}
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
    transformData: function transformData(arr) {
      return arr.map(function (item) {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, item, {
          join_time: Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["a" /* formatTime */])(new Date(item.join_time * 1000))
        });
      });
    },
    lower: function lower(e) {
      var _this3 = this;

      if (!this.hasMore) {
        return;
      }
      this.loading = true;
      this.$fly.post("/u/gift_record", {
        id: this.getTheSmallId(this.listData)
      }).then(function (res) {
        if (res.data.data) {
          _this3.listData = [].concat(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this3.listData), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default()(_this3.transformData(res.data.data)));
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

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "shoppcontainer"
  }, [_c('div', {
    staticClass: "tip",
    domProps: {
      "innerHTML": _vm._s(_vm.tip)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "gift-list-container"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("赠送记录")]), _vm._v(" "), _c('scroll-view', {
    staticClass: "list",
    attrs: {
      "scroll-y": "true",
      "scroll-top": _vm.scrollTop,
      "eventid": '0'
    },
    on: {
      "scrolltolower": _vm.lower
    }
  }, [_vm._l((_vm.listData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item",
      style: (index % 2 == 0 ? 'background:#e6f3f9' : '')
    }, [_c('div', {
      staticClass: "content"
    }, [_vm._v(_vm._s(item.serial))]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_vm._v("机号:" + _vm._s(item.note))]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_vm._v(_vm._s(item.join_time))])])
  }), _vm._v(" "), _c('i-load-more', {
    attrs: {
      "tip": _vm.hasMore ? '加载数据中' : '暂无数据',
      "loading": _vm.loading,
      "mpcomid": '0'
    }
  })], 2)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-80b4adb2", esExports)
  }
}

/***/ })

},[174]);
//# sourceMappingURL=main.js.map