global.webpackJsonp([9],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(138);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {}
  }
});

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b80db4d4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(143);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b80db4d4_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\login\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b80db4d4", Component.options)
  } else {
    hotAPI.reload("data-v-b80db4d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 139:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(28);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isPassword: true,
      logs: [],
      loginType: "mobile_verify_code",
      form: {
        mobile: "",
        password: "",
        mobile_verify_code: ""
      },
      codeText: "发送验证码",
      isSending: false
    };
  },

  methods: {
    goRegister: function goRegister() {
      wx.navigateTo({
        url: "../register/main"
      });
    },
    login: function login() {
      var _this = this;

      //验证phone
      if (!(this.form.mobile && Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* validatePhone */])(this.form.mobile))) {
        wx.showToast({
          title: "电话号码有误,请重填",
          icon: "none",
          duration: 2000
        });
        return;
      }

      if (this.loginType == "mobile_verify_code") {
        //验证mobile_verify_code
        if (!(this.form.mobile_verify_code && /^\d+$/.test(this.form.mobile_verify_code) && this.form.mobile_verify_code.length >= 4)) {
          wx.showToast({
            title: "验证码有误,请重填",
            icon: "none",
            duration: 2000
          });
          return;
        }
        this.$fly.post("/c/login", __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.form, { type: "" })).then(function (res) {
          wx.setStorageSync("token", res.headers.token);
          _this.getUserInfo();
        });
      } else {
        //验证密码
        if (!this.form.password) {
          wx.showToast({
            title: "请输入密码",
            icon: "none",
            duration: 2000
          });
          return;
        }
        this.$fly.post("/c/login", __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, this.form, { type: "password" })).then(function (res) {
          wx.setStorageSync("token", res.headers.token);
          _this.getUserInfo();
        });
      }
    },
    getCode: function getCode() {
      var _this2 = this;

      //是否在读秒
      if (this.isSending) {
        return;
      }
      //验证phone
      if (!(this.form.mobile && Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["b" /* validatePhone */])(this.form.mobile))) {
        wx.showToast({
          title: "电话号码有误,请重填",
          icon: "none",
          duration: 2000
        });
        return;
      }

      this.isSending = true;
      this.$fly.post("/c/send_mobile_verify_code", { mobile: this.form.mobile }).then(function (res) {
        wx.showToast({
          title: "发送成功",
          icon: "success",
          duration: 2000
        });
        var times = 60;
        setInterval(function () {
          _this2.codeText = times + "s\u540E\u91CD\u53D1";
          if (times == 0) {
            _this2.isSending = false;
            _this2.codeText = "发送验证码";
          } else {
            times--;
          }
        }, 1000);
      }).catch(function (err) {
        _this2.isSending = false;
      });
    },
    resetForm: function resetForm() {
      this.form = {
        mobile: "",
        password: "",
        mobile_verify_code: ""
      };
    },
    getUserInfo: function getUserInfo() {
      this.$fly.post("/u/information", {}).then(function (res) {
        wx.setStorageSync("userInfo", __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res.data.data));
        wx.reLaunch({
          url: "../commodity/main"
        });
      }).catch(function (err) {
        try {
          wx.removeStorageSync("token");
        } catch (e) {
          // Do something when catch error
          wx.showToast({
            title: "获取用户信息失败，请重新登录",
            icon: "none",
            duration: 2000
          });
        }
      });
    }
  },
  created: function created() {
    var logs = wx.getStorageSync("logs") || [];
    this.logs = logs.map(function (log) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__utils_index__["a" /* formatTime */])(new Date(log));
    });

    wx.setStorageSync("token", "uZvAdoXqPr41AvVzscbFrg==");

    var token = wx.getStorageSync("token");
    if (token) {
      this.getUserInfo();
    }
  }
});

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('p', {
    staticClass: "login-title"
  }, [_vm._v("会员登录")]), _vm._v(" "), _c('view', {
    staticClass: "section"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.mobile),
      expression: "form.mobile"
    }],
    attrs: {
      "type": "number",
      "maxlength": "11",
      "placeholder-class": "input-holder",
      "placeholder": "请输入您的手机号",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.form.mobile)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.mobile = $event.target.value
      }
    }
  })]), _vm._v(" "), (_vm.loginType == 'mobile_verify_code') ? _c('view', {
    staticClass: "section"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.mobile_verify_code),
      expression: "form.mobile_verify_code"
    }],
    staticClass: "code-input",
    attrs: {
      "placeholder-class": "input-holder",
      "placeholder": "请输入验证码",
      "type": "number",
      "maxlength": "6",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.form.mobile_verify_code)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.mobile_verify_code = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "code",
    attrs: {
      "size": "mini",
      "eventid": '2'
    },
    on: {
      "click": _vm.getCode
    }
  }, [_vm._v(_vm._s(_vm.codeText))])], 1) : _vm._e(), _vm._v(" "), (_vm.loginType == 'password') ? _c('view', {
    staticClass: "section"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password),
      expression: "form.password"
    }],
    attrs: {
      "placeholder-class": "input-holder",
      "password": _vm.isPassword,
      "placeholder": "请输入您的密码",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.password = $event.target.value
      }
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.loginType == 'mobile_verify_code') ? _c('button', {
    attrs: {
      "size": "mini",
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.loginType = 'password';
        _vm.resetForm()
      }
    }
  }, [_vm._v("密码登录")]) : _c('button', {
    attrs: {
      "size": "mini",
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.loginType = 'mobile_verify_code';
        _vm.resetForm()
      }
    }
  }, [_vm._v("验证码登录")]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("登录")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "login-text",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.goRegister
    }
  }, [_vm._v("没有账号？立即注册")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b80db4d4", esExports)
  }
}

/***/ })

},[137]);
//# sourceMappingURL=main.js.map