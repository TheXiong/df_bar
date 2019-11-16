global.webpackJsonp([8],{

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(80);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-cell-group': '../../static/dist/cell-group/index',
      'i-cell': '../../static/dist/cell/index',
      'i-icon': '../../static/dist/icon/index'
    }
  }
});

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2a4801ab_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(83);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(81)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2a4801ab"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_2a4801ab_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\contactus\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a4801ab", Component.options)
  } else {
    hotAPI.reload("data-v-2a4801ab", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 81:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 82:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      contactUs: [{
        name: '客服小红',
        contact: 'Tel:15273656769'
      }, {
        name: '客服小怡',
        contact: 'Tel:15273656769'
      }, {
        name: '客服小情',
        contact: 'Tel:15273656769'
      }, {
        name: '客服小慧',
        contact: 'Tel:15273656769'
      }, {
        name: '客服小燕',
        contact: 'Tel:15273656769'
      }, {
        name: '客服小瑶',
        contact: 'Qq:15273656769'
      }, {
        name: '客服小红',
        contact: 'Qq:15273656769'
      }, {
        name: '客服小怡',
        contact: 'Qq:15273656769'
      }, {
        name: '客服小情',
        contact: 'Qq:15273656769'
      }, {
        name: '客服小慧',
        contact: 'Qq:15273656769'
      }, {
        name: '客服小燕',
        contact: 'Qq:15273656769'
      }, {
        name: '客服小瑶',
        contact: 'Qq:15273656769'
      }]
    };
  }
});

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "contactusContainer"
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, _vm._l((_vm.contactUs), function(item, index) {
    return _c('i-cell', {
      key: index,
      attrs: {
        "title": item.name,
        "value": item.contact,
        "mpcomid": '1-' + index
      }
    }, [_c('i-icon', {
      attrs: {
        "type": "group_fill",
        "color": "#0097ff",
        "size": "18",
        "mpcomid": '0-' + index
      },
      slot: "icon"
    })], 1)
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2a4801ab", esExports)
  }
}

/***/ })

},[79]);
//# sourceMappingURL=main.js.map