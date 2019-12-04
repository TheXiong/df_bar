global.webpackJsonp([11],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(161);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      "i-input": "../../static/dist/input/index",
      "i-panel": "../../static/dist/panel/index"
    }
  }
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_552ba328_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(164);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(162)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_552ba328_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\register\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-552ba328", Component.options)
  } else {
    hotAPI.reload("data-v-552ba328", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(8);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      codeText: "发送验证码",
      isSending: false,
      form: {
        mobile: "",
        mobile_verify_code: "",
        password: "",
        repassword: ""
      }
    };
  },

  methods: {
    goLogin: function goLogin() {
      wx.navigateTo({
        url: "../login/main"
      });
    },
    login: function login() {
      //验证phone
      if (!(this.form.mobile && Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["b" /* validatePhone */])(this.form.mobile))) {
        wx.showToast({
          title: "电话号码有误,请重填",
          icon: "none",
          duration: 2000
        });
        return;
      }
      //验证mobile_verify_code
      if (!(this.form.mobile_verify_code && /^\d+$/.test(this.form.mobile_verify_code) && this.form.mobile_verify_code.length >= 4)) {
        wx.showToast({
          title: "验证码有误,请重填",
          icon: "none",
          duration: 2000
        });
        return;
      }
      //验证密码
      if (!this.form.password) {
        wx.showToast({
          title: "请输入密码",
          icon: "none",
          duration: 2000
        });
        return;
      }
      //验证密码
      if (!this.form.repassword) {
        wx.showToast({
          title: "请输入确认密码",
          icon: "none",
          duration: 2000
        });
        return;
      }
      //验证两次密码是否相等
      if (this.form.password != this.form.repassword) {
        wx.showToast({
          title: "两次密码输入不一致",
          icon: "none",
          duration: 2000
        });
        return;
      }
      this.$fly.post("/c/register", this.form).then(function (res) {
        wx.showToast({
          title: "注册成功",
          icon: "success",
          duration: 2000
        });
        wx.setStorageSync("token", res.headers.token);
        wx.navigateTo({ url: "../login/main" });
      });
    },
    getCode: function getCode() {
      var _this = this;

      //是否在读秒
      if (this.isSending) {
        return;
      }
      //验证phone
      if (this.form.mobile && !Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["b" /* validatePhone */])(this.form.mobile)) {
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
          _this.codeText = times + "s\u540E\u91CD\u53D1";
          if (times == 0) {
            _this.isSending = false;
            _this.codeText = "发送验证码";
          } else {
            times--;
          }
        }, 1000);
      }).catch(function (err) {
        _this.isSending = false;
      });
    }
  },
  created: function created() {
    var logs = wx.getStorageSync("logs") || [];
    this.logs = logs.map(function (log) {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* formatTime */])(new Date(log));
    });
  }
});

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login"
  }, [_c('p', {
    staticClass: "login-title"
  }, [_vm._v("会员注册")]), _vm._v(" "), _c('view', {
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
  })]), _vm._v(" "), _c('view', {
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
  }, [_vm._v(_vm._s(_vm.codeText))])], 1), _vm._v(" "), _c('view', {
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
  })]), _vm._v(" "), _c('view', {
    staticClass: "section"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.repassword),
      expression: "form.repassword"
    }],
    attrs: {
      "placeholder-class": "input-holder",
      "password": _vm.isPassword,
      "placeholder": "请再输入一次您的密码",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.form.repassword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.form.repassword = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.login
    }
  }, [_vm._v("注册")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "login-text",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.goLogin
    }
  }, [_vm._v("已有账号？立即登陆")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-552ba328", esExports)
  }
}

/***/ })

},[160]);
//# sourceMappingURL=main.js.map