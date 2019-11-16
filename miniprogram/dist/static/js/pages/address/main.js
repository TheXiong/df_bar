global.webpackJsonp([11],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(27);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-icon': '../../static/dist/icon/index',
      'i-cell-group': '../../static/dist/cell-group/index',
      'i-cell': '../../static/dist/cell/index',
      'i-radio': '../../static/dist/radio/index'
    }
  }
});

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_687a93e1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(58);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(28)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-687a93e1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_687a93e1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\address\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-687a93e1", Component.options)
  } else {
    hotAPI.reload("data-v-687a93e1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 29:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapState */])(['userAddres', 'userOrderAddres'])),
  data: function data() {
    return {};
  },

  methods: {
    addAddress: function addAddress() {
      var url = '/pages/addressAdd/main';
      wx.redirectTo({ url: url });
    },
    toggleRadio: function toggleRadio(index) {
      this.$store.dispatch('setUserOrderAddres', index);
      // console.log(index)
    },
    toAddressUpdate: function toAddressUpdate(index) {
      // console.log(index)
      var url = '../addressUpdate/main?index=' + index;
      wx.redirectTo({ url: url });
    }
  }
});

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "addressContainer"
  }, [(!_vm.userAddres.length) ? _c('div', {
    staticClass: "addressNoList"
  }, [_vm._m(0), _vm._v(" "), _c('p', {
    staticClass: "addressDetail"
  }, [_vm._v("\n      您还没有地址，可以点击底部按钮新建地址\n    ")])], 1) : _c('div', {
    staticClass: "addressList"
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '3'
    }
  }, _vm._l((_vm.userAddres), function(item, index) {
    return _c('i-cell', {
      key: index,
      attrs: {
        "title": (item.addressName) + '  ' + (item.addressPhone),
        "label": item.addressDetail,
        "mpcomid": '2-' + index
      }
    }, [_c('i-radio', {
      attrs: {
        "checked": _vm.userOrderAddres === index ? true : false,
        "eventid": '0-' + index,
        "mpcomid": '0-' + index
      },
      on: {
        "change": function($event) {
          _vm.toggleRadio(index)
        }
      },
      slot: "icon"
    }), _vm._v(" "), _c('i-icon', {
      attrs: {
        "size": "18",
        "type": "brush",
        "eventid": '1-' + index,
        "mpcomid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.toAddressUpdate(index)
        }
      },
      slot: "footer"
    })], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "addressListEmpty"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "addressAdd",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.addAddress
    }
  }, [_vm._m(1)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "addressImg"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/address.png",
      "alt": "address"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "addressAddContent"
  }, [_c('div', {
    staticClass: "addressAddContentIcon"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/addresadd.png",
      "alt": "addresadd"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "addressAddContentTitle"
  }, [_vm._v("新增地址")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-687a93e1", esExports)
  }
}

/***/ })

},[26]);
//# sourceMappingURL=main.js.map