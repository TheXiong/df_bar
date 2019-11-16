global.webpackJsonp([10],{

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(94);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-input': '../../static/dist/input/index'
    }
  }
});

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_450eb8ce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(97);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(95)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-450eb8ce"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_450eb8ce_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\feedback\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-450eb8ce", Component.options)
  } else {
    hotAPI.reload("data-v-450eb8ce", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 96:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapState */])(['feedbackList'])),
  data: function data() {
    return {
      feedback: {
        name: '',
        phone: '',
        detail: ''
      },
      feedbackStatus: false
    };
  },

  methods: {
    feedbackButton: function feedbackButton() {
      var _this = this;

      this.$store.dispatch('addFeedbackList', this.feedback);

      this.feedbackStatus = true;

      this.clearPageInput();

      setTimeout(function () {
        _this.feedbackStatus = false;

        _this.toUserPages();
      }, 500);
    },
    clearPageInput: function clearPageInput() {
      this.feedback.name = '';
      this.feedback.phone = '';
      this.feedback.detail = '';
    },
    toUserPages: function toUserPages() {
      var url = '/pages/user/main';
      wx.switchTab({ url: url });
    }
  },
  onLoad: function onLoad() {
    this.clearPageInput();
    console.log(this.feedbackList);
  }
});

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "feedbackContainer"
  }, [_c('div', {
    staticClass: "feedback"
  }, [_c('div', {
    staticClass: "feedbackTitle"
  }, [_vm._v("联系人")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.feedback.name),
      expression: "feedback.name"
    }],
    staticClass: "feedbackInput",
    attrs: {
      "type": "text",
      "autofocus": "",
      "placeholder": "名字",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.feedback.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.feedback.name = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "feedback"
  }, [_c('div', {
    staticClass: "feedbackTitle"
  }, [_vm._v("联系电话")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.feedback.phone),
      expression: "feedback.phone"
    }],
    staticClass: "feedbackInput",
    attrs: {
      "type": "number",
      "placeholder": "请输入手机号",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.feedback.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.feedback.phone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "feedback"
  }, [_c('div', {
    staticClass: "feedbackTitle"
  }, [_vm._v("反馈内容")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.feedback.detail),
      expression: "feedback.detail"
    }],
    staticClass: "feedbackInputTextarea",
    attrs: {
      "placeholder": "请输入反馈内容",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.feedback.detail)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.feedback.detail = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "feedbackButton",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.feedbackButton
    }
  }, [_vm._v("提交意见")]), _vm._v(" "), (_vm.feedbackStatus) ? _c('div', {
    staticClass: "feedbackMessage"
  }, [_vm._v("反馈成功~")]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-450eb8ce", esExports)
  }
}

/***/ })

},[93]);
//# sourceMappingURL=main.js.map