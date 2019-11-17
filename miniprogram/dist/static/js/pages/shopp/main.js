global.webpackJsonp([6],{

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(173);



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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_80b4adb2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(176);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(174)
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

/***/ 174:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var Fly = __webpack_require__(45);
var fly = new Fly();
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      loadingShow: true,
      newShopp: []
    };
  },
  created: function created() {
    this.getShopping();
  },

  methods: {
    getShopping: function getShopping() {
      var _this = this;
      // fly.get('https://easy-mock.com/mock/5b69315d99b4c7086b576bf0/shopping')
      //   .then(function (response) {
      //     if (response.status === 200) {
      //       let shopping = response.data
      //       _this.loadingShow = false
      //       _this.newShopp = shopping.data
      //     }
      //   })
      //   .catch(function (err) {
      //     _this.loadingShow = true
      //     console.log(err)
      //   })
    }
  }
});

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "shoppcontainer"
  }, [_c('div', {
    staticClass: "shoppHeader"
  }, [_c('div', {
    staticClass: "shoppTitle"
  }, [_c('p', {
    staticClass: "shoppTitleL"
  }, [_vm._v("美食推荐")])], 1)]), _vm._v(" "), _vm._l((_vm.newShopp), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "shoppList"
    }, [_c('div', {
      staticClass: "shoppListTitle"
    }, [_c('div', {
      staticClass: "shoppListTitleIcon"
    }, [_vm._v("店铺")]), _vm._v("\n      " + _vm._s(item.name) + "\n    ")]), _vm._v(" "), _vm._l((item.shoppingList), function(itemList, indexList) {
      return _c('div', {
        key: indexList,
        staticClass: "shoppListDetail"
      }, [_c('div', {
        staticClass: "shoppListDetailImg"
      }, [_c('img', {
        attrs: {
          "src": itemList.shoppingImg,
          "alt": itemList.shoppingImgAlt
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "shoppListDetailD"
      }, [_c('p', {
        staticClass: "shoppListDetailDT"
      }, [_vm._v(_vm._s(itemList.shoppListDetailDT))]), _vm._v(" "), _c('p', {
        staticClass: "shoppListDetailDP"
      }, [_vm._v(_vm._s(itemList.shoppListDetailDP))]), _vm._v(" "), _c('p', {
        staticClass: "shoppListDetailDM"
      }, [_vm._v(_vm._s(itemList.shoppListDetailDM))])], 1)])
    })], 2)
  }), _vm._v(" "), _c('div', {
    class: {
      shoppLoading: _vm.loadingShow
    }
  }, [_c('i-load-more', {
    attrs: {
      "tip": "暂无数据",
      "loading": _vm.loadingShow,
      "mpcomid": '0'
    }
  })], 1)], 2)
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

},[172]);
//# sourceMappingURL=main.js.map