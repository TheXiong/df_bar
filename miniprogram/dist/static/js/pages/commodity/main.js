global.webpackJsonp([13],{

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(73);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    // 这儿添加要用的小程序组件
    usingComponents: {
      'i-icon': '../../static/dist/icon/index',
      'i-cell-group': '../../static/dist/cell-group/index',
      'i-cell': '../../static/dist/cell/index'
    }
  }
});

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9ef0214c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(76);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(74)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9ef0214c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_9ef0214c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\commodity\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9ef0214c", Component.options)
  } else {
    hotAPI.reload("data-v-9ef0214c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(2);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      commodityIndexs: 0,
      commodityToggleShow: false,
      commodityName: '九三鸭霸王外卖店',
      commodityList: [{
        commodityMenu: '炒菜',
        commodityData: [{
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡1',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 5,
          commoditySum: 1
        }, {
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡2',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 8,
          commoditySum: 1
        }]
      }, {
        commodityMenu: '炒菜',
        commodityData: [{
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡3',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 14,
          commoditySum: 1
        }, {
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡4',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 12,
          commoditySum: 1
        }, {
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡5',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 10,
          commoditySum: 1
        }]
      }, {
        commodityMenu: '炒菜',
        commodityData: [{
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡6',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 10,
          commoditySum: 1
        }, {
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡7',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 11,
          commoditySum: 1
        }, {
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡8',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 10,
          commoditySum: 1
        }, {
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡9',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 10,
          commoditySum: 1
        }]
      }, {
        commodityMenu: '炒菜',
        commodityData: [{
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡10',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 10,
          commoditySum: 1
        }, {
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡11',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 10,
          commoditySum: 1
        }, {
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡12',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 10,
          commoditySum: 1
        }, {
          commodityImg: '/static/img/xbk.png',
          commodityAlt: 'xbk',
          commodityName: '香辣鸡腿堡13',
          commodityDetail: '鸡肉、青椒、等等等等等等等等等等等等等等等等',
          commodityMoney: 10,
          commoditySum: 1
        }]
      }]
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_2_vuex__["b" /* mapState */])(['commdityShopping']), {
    commodityPrice: function commodityPrice() {
      var sumPrice = 0;
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(this.commdityShopping, function (value, key) {
        sumPrice += value.commodityMoney * value.commoditySum;
      });
      if (sumPrice < 10) {
        sumPrice += 1;
      }
      return sumPrice;
    },
    commoditySumShopp: function commoditySumShopp() {
      var Sum = 0;
      __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.forEach(this.commdityShopping, function (value, key) {
        Sum += value.commoditySum;
      });
      return Sum;
    }
  }),
  methods: {
    // 切换列表
    toggleList: function toggleList(index) {
      this.commodityIndexs = index;
    },

    // 遮罩层切换
    commodityToggleShowList: function commodityToggleShowList() {
      if (this.commdityShopping.length === 0) {
        return false;
      }
      this.commodityToggleShow = !this.commodityToggleShow;
    },

    // 添加商品
    addCommodity: function addCommodity(commodityItems, commodityName, commodityIndex, commodityIndexs) {
      var commodityFindIndex = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.findIndex(this.commdityShopping, function (o) {
        return o.commodityName === commodityName;
      });
      // 拷贝对象
      var commodityItem = __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.clone(commodityItems);
      if (commodityFindIndex !== -1) {
        this.commodityShoppListSwitchAdd(commodityFindIndex);
      } else {
        this.$store.dispatch('setCommdityShopping', commodityItem);
      }
    },

    // 数量减
    commodityShoppListSwitchLess: function commodityShoppListSwitchLess(index) {
      console.log(this.commdityShopping);
      this.$store.dispatch('setCommdityShoppingLess', index);
      if (this.commdityShopping.length === 0) {
        this.commodityToggleShow = false;
      }
    },

    // 数量加
    commodityShoppListSwitchAdd: function commodityShoppListSwitchAdd(index) {
      this.$store.dispatch('setCommdityShoppingAdd', index);
    },

    // 设置商家名
    setCommdityShoppName: function setCommdityShoppName() {
      this.$store.dispatch('setCommdityShoppingName', this.commodityName);
    },
    settlement: function settlement() {
      if (this.commoditySumShopp) {
        this.setCommdityShoppName();
        this.commodityToggleShow = false;
        wx.navigateTo({
          url: '/pages/settlement/main'
        });
      } else {
        return false;
      }
    }

    // commodityJsonInArray (data) {
    //   // console.log(data)
    //   let commodityJson = {}
    //   for (let key of Object.keys(data)) {
    //     // console.log(key, data[key])
    //     commodityJson[key] = data[key]
    //   }
    //   console.log(commodityJson)
    //   return commodityJson
    // }

  }
});

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "commodityContainer"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "commodityTitle"
  }, [_vm._v(_vm._s(_vm.commodityName))]), _vm._v(" "), _c('div', {
    staticClass: "commodityDetail"
  }, [_vm._v("10元起送|免费配送")]), _vm._v(" "), _c('div', {
    staticClass: "commodityList"
  }, [_vm._v("\r\n    点餐\r\n  ")]), _vm._v(" "), _c('div', {
    staticClass: "commodityListShopp"
  }, [_c('div', {
    staticClass: "commodityListShoppMenu"
  }, [_c('ul', _vm._l((_vm.commodityList), function(item, index) {
    return _c('li', {
      key: index,
      class: {
        active: index === _vm.commodityIndexs
      },
      attrs: {
        "eventid": '0-' + index
      },
      on: {
        "click": function($event) {
          _vm.toggleList(index)
        }
      }
    }, [_vm._v(_vm._s(item.commodityMenu))])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "commodityListShoppContent"
  }, _vm._l((_vm.commodityList), function(commodityItem, commodityIndex) {
    return _c('div', {
      key: commodityIndex,
      staticClass: "commodityToggleList",
      class: {
        commodityToggle: commodityIndex === _vm.commodityIndexs
      }
    }, _vm._l((commodityItem.commodityData), function(commodityItems, commodityIndexs) {
      return _c('div', {
        key: commodityIndexs,
        staticClass: "commodityListShoppContentD",
        attrs: {
          "eventid": '1-' + commodityIndex + '-' + commodityIndexs
        },
        on: {
          "click": function($event) {
            _vm.addCommodity(commodityItems, commodityItems.commodityName, commodityIndex, commodityIndexs)
          }
        }
      }, [_c('div', {
        staticClass: "commodityListShoppContentDImg"
      }, [_c('img', {
        attrs: {
          "src": commodityItems.commodityImg,
          "alt": commodityItems.commodityAlt
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "commodityListShoppContentDD"
      }, [_c('p', {
        staticClass: "commodityListShoppContentDDT"
      }, [_vm._v(_vm._s(commodityItems.commodityName))]), _vm._v(" "), _c('p', {
        staticClass: "commodityListShoppContentDDD"
      }, [_vm._v(_vm._s(commodityItems.commodityDetail))]), _vm._v(" "), _c('p', {
        staticClass: "commodityListShoppContentDDM"
      }, [_vm._v(_vm._s(commodityItems.commodityMoney) + "元")]), _vm._v(" "), _vm._m(1, true)], 1)])
    }))
  }))]), _vm._v(" "), _c('div', {
    staticClass: "commodityemtyp"
  }), _vm._v(" "), _c('div', {
    staticClass: "commodityShoppList",
    class: {
      commodityShoppListToggle: _vm.commodityToggleShow
    }
  }, [_c('i-cell-group', {
    attrs: {
      "mpcomid": '2'
    }
  }, [_vm._l((_vm.commdityShopping), function(item, index) {
    return _c('i-cell', {
      key: index,
      attrs: {
        "title": item.commodityName,
        "mpcomid": '0-' + index
      }
    }, [_c('div', {
      slot: "footer"
    }, [_c('div', {
      staticClass: "commodityShoppListM"
    }, [_vm._v(_vm._s(item.commodityMoney * item.commoditySum) + "元")]), _vm._v(" "), _c('div', {
      staticClass: "commodityShoppListSwitch"
    }, [_c('div', {
      staticClass: "commodityShoppListSwitchLess",
      attrs: {
        "eventid": '2-' + index
      },
      on: {
        "click": function($event) {
          _vm.commodityShoppListSwitchLess(index)
        }
      }
    }, [_vm._v("－")]), _vm._v(" "), _c('div', {
      staticClass: "commodityShoppListSwitchSum"
    }, [_vm._v(_vm._s(item.commoditySum))]), _vm._v(" "), _c('div', {
      staticClass: "commodityShoppListSwitchAdd",
      attrs: {
        "eventid": '3-' + index
      },
      on: {
        "click": function($event) {
          _vm.commodityShoppListSwitchAdd(index)
        }
      }
    }, [_vm._v("＋")])])])])
  }), _vm._v(" "), _c('i-cell', {
    attrs: {
      "title": "配送费",
      "mpcomid": '1'
    }
  }, [_c('div', {
    slot: "footer"
  }, [_vm._v("\r\n          " + _vm._s(_vm.commodityPrice >= 10 ? 0 : 1) + "元\r\n        ")])])], 2)], 1), _vm._v(" "), _c('div', {
    staticClass: "commoditySum",
    class: {
      commoditySumStatus: _vm.commoditySumShopp
    },
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.commodityToggleShowList
    }
  }, [_c('div', {
    staticClass: "commodityG",
    class: {
      commodityGStatus: _vm.commoditySumShopp
    }
  }, [_c('i-icon', {
    attrs: {
      "type": "publishgoods_fill",
      "size": "40",
      "color": _vm.commoditySumShopp === 0 ? '#5f5f63' : '#ffffff',
      "mpcomid": '3'
    }
  }), _vm._v(" "), (_vm.commoditySumShopp) ? _c('div', {
    staticClass: "commodityGsum"
  }, [_vm._v(_vm._s(_vm.commoditySumShopp))]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "commodityD"
  }, [_c('p', {
    staticClass: "commodityDM",
    class: {
      commodityDMStatus: _vm.commoditySumShopp
    }
  }, [_vm._v("\r\n        " + _vm._s(_vm.commoditySumShopp === 0 ? '未选购商品' : _vm.commodityPrice + '元') + "\r\n      ")]), _vm._v(" "), _c('p', {
    staticClass: "commodityDD"
  }, [_vm._v("\r\n        不足十元需要加一元配送费\r\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "commodityM",
    class: {
      commodityMStatus: _vm.commoditySumShopp
    },
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.settlement($event)
      }
    }
  }, [_vm._v("\r\n        " + _vm._s(_vm.commoditySumShopp === 0 ? '10元起送' : '去结算') + "\r\n    ")])]), _vm._v(" "), _c('div', {
    staticClass: "commodityFull",
    class: {
      commodityFullToggle: _vm.commodityToggleShow
    },
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.commodityToggleShowList
    }
  })])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "commodity"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/cb.png",
      "alt": "cb"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "commodityLogo"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/xbk.png",
      "alt": "xbk"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "commodityAdd"
  }, [_c('img', {
    attrs: {
      "src": "/static/img/add.png",
      "alt": "add"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9ef0214c", esExports)
  }
}

/***/ })

},[72]);
//# sourceMappingURL=main.js.map