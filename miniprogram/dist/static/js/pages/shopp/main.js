global.webpackJsonp([9],{

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(174);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {}
  }
});

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_80b4adb2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(177);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(209)
  __webpack_require__(206)
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);


//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tip: "\u672C\u671F\u6D3B\u52A8:\r\n\u4E3A\u56DE\u9988\u5E7F\u5927\u7528\u6237\u5BF9\u672C\u7F51\u5496\u7684\u539A\u7231,\u7F51\u5496\u63A8\u51FA\u9001\u5956\u54C1\u6D3B\u52A8!\r\n\u8FBE\u5230\u4EE5\u4E0B\u6761\u4EF6\u5747\u53EF\u83B7\u8D60\u5956\u54C1\u4E00\u4EFD:\r\n1.\u82F1\u96C4\u8054\u76DF \u4EFB\u610F\u533A\u670D\u83B7\u5F975\u6740(\u4EBA\u673A\u9664\u5916)\r\n2.\u5927\u9003\u4EA1\u4EFB\u610F\u670D\u5403\u9E21(\u7B2C1\u540D)",
      listData: [],
      hasMore: true,
      scrollTop: 0
    };
  },
  mounted: function mounted() {
    this.hasMore = true;
    this.getList();
  },

  methods: {
    getList: function getList() {
      var _this = this;

      this.$fly.post("/u/gift_record", {}).then(function (res) {
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
          join_time: new Date(item.join_time * 1000).toLocaleString().replace(/:\d{1,2}$/, "").replace(/[\u4e00-\u9fa5]+/, "")
        });
      });
    },
    lower: function lower(e) {
      var _this2 = this;

      if (!this.hasMore) {
        return;
      }
      this.$fly.post("/u/gift_record", {
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

/***/ 177:
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
  }, _vm._l((_vm.listData), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item"
    }, [_c('div', {
      staticClass: "content"
    }, [_vm._v(_vm._s(item.join_time))]), _vm._v(" "), _c('div', {
      staticClass: "content"
    }, [_vm._v(_vm._s(item.note))])])
  }))], 1)])
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

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[173]);
//# sourceMappingURL=main.js.map