global.webpackJsonp([17],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(104);



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
      'i-panel': '../../static/dist/panel/index'
    }
  }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4dfe6054_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(107);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4dfe6054"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_4dfe6054_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\addressAdd\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dfe6054", Component.options)
  } else {
    hotAPI.reload("data-v-4dfe6054", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 105:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 106:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  components: {},
  data: function data() {
    return {
      member_number: "",
      messageStatus: false
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapState */])(["userInfo"])),
  watch: {
    userInfo: function userInfo() {
      this.member_number = this.userInfo.member_number;
    }
  },
  created: function created() {
    // let userInfo = wx.getStorageSync("userInfo");
    console.log(this.userInfo);

    this.member_number = this.userInfo.member_number;
  },

  methods: {
    /**
     * 单击保存 保存信息到全局状态
     */
    addressAddButton: function addressAddButton() {
      var _this = this;

      if (!this.member_number) {
        return;
      }
      this.$fly.post("/u/add_user_member_number", {
        member_number: this.member_number
      }).then(function (res) {
        _this.$store.dispatch("getNewUserInfo");
      });
    }
  }
});

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "addressAddContainer"
  }, [_c('div', {
    staticClass: "addressAddContent"
  }, [_c('div', {
    staticClass: "addressAddContentList"
  }, [_c('div', {
    staticClass: "addressAddContentListTitle"
  }, [_vm._v("会员卡号")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.member_number),
      expression: "member_number"
    }],
    staticClass: "addressAddContentListInput",
    attrs: {
      "type": "text",
      "autofocus": "",
      "placeholder": "卡号",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.member_number)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.member_number = $event.target.value
      }
    }
  })])]), _vm._v(" "), (_vm.messageStatus) ? _c('p', {
    staticClass: "message"
  }, [_vm._v("您还没有填写卡号哦~")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "addressAddButton",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.addressAddButton
    }
  }, [_vm._v("保存卡号")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4dfe6054", esExports)
  }
}

/***/ })

},[103]);
//# sourceMappingURL=main.js.map