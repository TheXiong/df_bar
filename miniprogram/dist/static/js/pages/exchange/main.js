global.webpackJsonp([11],{

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
    usingComponents: {
      'i-panel': '../../static/dist/panel/index'
    }
  }
});

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_04d3a428_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(213);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(212)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-04d3a428"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_04d3a428_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\exchange\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04d3a428", Component.options)
  } else {
    hotAPI.reload("data-v-04d3a428", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(6);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tip: "1.\u4F1A\u5458\u79EF\u5206\u4EC5\u53EF\u5151\u6362\u62B5\u7528\u91D1,\u4E0D\u80FD\u5151\u6362\u73B0\u91D1!\r\n2.\u62B5\u7528\u91D1\u4EC5\u9650\u5F53\u5929\u5728\u7F51\u5496\u6D88\u8D39\u6216\u5145\u7F51\u8D39,\u8FC7\u671F\u5373\u4F5C\u5E9F!\r\n3.\u90E8\u5206\u5546\u54C1\u4E0E\u670D\u52A1\u4E0D\u53EF\u4F7F\u7528\u62B5\u7528\u91D1\u6D88\u8D39,\u8BF7\u987B\u77E5!\r\n4.\u79EF\u5206\u4E00\u65E6\u5151\u6362,\u6982\u4E0D\u9000\u8FD8,\u8BF7\u987B\u77E5!\r\n5.\u5982\u6709\u7591\u95EE,\u8BF7\u5411\u7F51\u7BA1\u54A8\u8BE2!\n        ",
      integral: ""
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapState */])(["userInfo"])),
  methods: {
    exchange: function exchange() {
      var _this = this;

      if (!this.integral) {
        wx.showToast({
          title: "请输入积分",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (!/^\d+$/.test(this.integral)) {
        wx.showToast({
          title: "请输入正确的积分",
          icon: "none",
          duration: 2000
        });
        return;
      }
      this.$fly.post("/u/use_integral_exchange_goods", { integral: this.integral }).then(function (res) {
        wx.showToast({
          title: "兑换成功",
          icon: "success",
          duration: 2000
        });
        _this.integral = '';
      });
    }
  }
});

/***/ }),

/***/ 212:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('i-panel', {
    attrs: {
      "title": "注: 以下内容请须知:",
      "mpcomid": '0'
    }
  }, [_c('view', {
    staticStyle: {
      "padding": "0 15px"
    }
  }, [_c('div', {
    staticClass: "tip",
    domProps: {
      "innerHTML": _vm._s(_vm.tip)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "integral"
  }, [_vm._v("我的积分: " + _vm._s(_vm.userInfo.integral) + " 分")])])]), _vm._v(" "), _c('div', {
    staticClass: "divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "exchange"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.integral),
      expression: "integral"
    }],
    staticClass: "input",
    attrs: {
      "type": "number",
      "auto-focus": "",
      "placeholder": "积分",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.integral)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.integral = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "type": "primary",
      "size": "mini",
      "eventid": '1'
    },
    on: {
      "click": _vm.exchange
    }
  }, [_vm._v("确认兑换")])], 1), _vm._v(" "), _c('i-panel', {
    attrs: {
      "title": "兑换记录",
      "mpcomid": '1'
    }
  }, [_c('view', {
    staticStyle: {
      "padding": "15px"
    }
  }, [_c('view', {
    staticClass: "table"
  }, [_c('view', {
    staticClass: "tr bg-w"
  }, [_c('view', {
    staticClass: "th"
  }, [_vm._v("兑换时间")]), _vm._v(" "), _c('view', {
    staticClass: "th"
  }, [_vm._v("积分")]), _vm._v(" "), _c('view', {
    staticClass: "th"
  }, [_vm._v("核销码")]), _vm._v(" "), _c('view', {
    staticClass: "th"
  }, [_vm._v("状态")])]), _vm._v(" "), _vm._l((_vm.listData), function(item, index) {
    return _c('block', {
      key: index
    }, [(index % 2 == 0) ? _c('view', {
      staticClass: "tr bg-g"
    }, [_c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.code))]), _vm._v(" "), _c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.text))]), _vm._v(" "), _c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.type))])]) : _vm._e(), _vm._v(" "), _c('view', {
      staticClass: "tr",
      attrs: {
        "wx:else": ""
      }
    }, [_c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.code))]), _vm._v(" "), _c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.text))]), _vm._v(" "), _c('view', {
      staticClass: "td"
    }, [_vm._v(_vm._s(item.type))])])])
  })], 2)])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-04d3a428", esExports)
  }
}

/***/ })

},[134]);
//# sourceMappingURL=main.js.map