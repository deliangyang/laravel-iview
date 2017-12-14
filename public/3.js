webpackJsonp([3],{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(34)
/* template */
var __vue_template__ = __webpack_require__(35)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\components\\TestComponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b0ceddb8", Component.options)
  } else {
    hotAPI.reload("data-v-b0ceddb8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("Button", [_vm._v("Default")]),
      _vm._v(" "),
      _c("Button", { attrs: { type: "primary" } }, [_vm._v("Primary")]),
      _vm._v(" "),
      _c("Button", { attrs: { type: "ghost" } }, [_vm._v("Ghost")]),
      _vm._v(" "),
      _c("Button", { attrs: { type: "dashed" } }, [_vm._v("Dashed")]),
      _vm._v(" "),
      _c("Button", { attrs: { type: "text" } }, [_vm._v("Text")]),
      _vm._v(" "),
      _c("br"),
      _c("br"),
      _vm._v(" "),
      _c("Button", { attrs: { type: "info" } }, [_vm._v("Info")]),
      _vm._v(" "),
      _c("Button", { attrs: { type: "success" } }, [_vm._v("Success")]),
      _vm._v(" "),
      _c("Button", { attrs: { type: "warning" } }, [_vm._v("Warning")]),
      _vm._v(" "),
      _c("Button", { attrs: { type: "error" } }, [_vm._v("Error")])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b0ceddb8", module.exports)
  }
}

/***/ })

});