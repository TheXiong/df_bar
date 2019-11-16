global.webpackJsonp([12],{

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(65);



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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_240a3d0a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(68);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(66)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-240a3d0a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_240a3d0a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\addressUpdate\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-240a3d0a", Component.options)
  } else {
    hotAPI.reload("data-v-240a3d0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 66:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 67:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapState */])(['userAddres'])),
  components: {},
  data: function data() {
    return {
      addressUser: {
        index: 0,
        addressName: '',
        addressPhone: '',
        addressDetail: ''
      },

      messageStatus: false,
      tipsMessageDel: false
    };
  },
  onLoad: function onLoad(option) {
    this.addressClear();
    // console.log(option.index)
    this.addressUser.index = option.index;
    this.getAddress();
  },

  methods: {
    // 单击保存
    addressAddButtonSave: function addressAddButtonSave() {
      this.$store.dispatch('updateUserAddress', this.addressUser);
      this.addressClear();
      this.addressToPage();
    },

    // 删除地址
    addressAddButtonLess: function addressAddButtonLess() {
      this.toggleFull(true);
    },

    // 清除内容
    addressClear: function addressClear() {
      this.addressUser.index = 0;
      this.addressUser.addressName = '';
      this.addressUser.addressPhone = '';
      this.addressUser.addressDetail = '';
    },


    // 获取地址信息
    getAddress: function getAddress() {
      console.log(this.userAddres);
      this.addressUser.addressName = this.userAddres[this.addressUser.index].addressName;
      this.addressUser.addressPhone = this.userAddres[this.addressUser.index].addressPhone;
      this.addressUser.addressDetail = this.userAddres[this.addressUser.index].addressDetail;
    },

    // 页面跳转
    addressToPage: function addressToPage() {
      var url = '/pages/address/main';
      wx.redirectTo({
        url: url,
        success: function success() {},
        fail: function fail() {}
      });
    },

    // 取消删除
    closeDel: function closeDel() {
      this.toggleFull(false);
      return false;
    },

    // 确定删除
    saveUpdate: function saveUpdate() {
      this.toggleFull(false);
      this.$store.dispatch('delUserAddress', this.addressUser.index);
      this.addressClear();
      this.addressToPage();
    },

    // 切换显示弹出层
    toggleFull: function toggleFull(status) {
      this.tipsMessageDel = status;
    }
  }
});

/***/ }),

/***/ 68:
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
  }, [_vm._v("联系人")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addressUser.addressName),
      expression: "addressUser.addressName"
    }],
    staticClass: "addressAddContentListInput",
    attrs: {
      "type": "text",
      "autofocus": "",
      "placeholder": "名字",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.addressUser.addressName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.addressUser.addressName = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "addressAddContentList"
  }, [_c('div', {
    staticClass: "addressAddContentListTitle"
  }, [_vm._v("联系电话")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addressUser.addressPhone),
      expression: "addressUser.addressPhone"
    }],
    staticClass: "addressAddContentListInput",
    attrs: {
      "type": "number",
      "placeholder": "请输入手机号",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.addressUser.addressPhone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.addressUser.addressPhone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "addressAddContentList"
  }, [_c('div', {
    staticClass: "addressAddContentListTitle"
  }, [_vm._v("详细地址")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.addressUser.addressDetail),
      expression: "addressUser.addressDetail"
    }],
    staticClass: "addressAddContentListInput",
    attrs: {
      "maxlength": "30",
      "placeholder": "请输入详细地址(最多50字)",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.addressUser.addressDetail)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.addressUser.addressDetail = $event.target.value
      }
    }
  })])]), _vm._v(" "), (_vm.messageStatus) ? _c('p', {
    staticClass: "message"
  }, [_vm._v("您还没有填完信息哦~")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "operatorButton"
  }, [_c('div', {
    staticClass: "addressAddButton del",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.addressAddButtonLess
    }
  }, [_vm._v("删除")]), _vm._v(" "), _c('div', {
    staticClass: "addressAddButton save",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.addressAddButtonSave
    }
  }, [_vm._v("修改")])]), _vm._v(" "), (_vm.tipsMessageDel) ? _c('div', {
    staticClass: "delContainer"
  }, [_c('div', {
    staticClass: "delFull"
  }, [_c('div', {
    staticClass: "delContent"
  }, [_c('div', {
    staticClass: "delContentTitle"
  }, [_vm._v("\n          确定删除该收货地址吗？\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "delContentButton"
  }, [_c('div', {
    staticClass: "delContentButtonL",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.closeDel
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('div', {
    staticClass: "delContentButtonR",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.saveUpdate
    }
  }, [_vm._v("确定")])])])])]) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-240a3d0a", esExports)
  }
}

/***/ })

},[64]);
//# sourceMappingURL=main.js.map