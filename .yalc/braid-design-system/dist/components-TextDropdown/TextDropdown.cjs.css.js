"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var cssUtils = require("@vanilla-extract/css-utils");
var themesVars_cjs_css_js = require("../themes-vars.cjs.css.js");
var componentsPrivate_touchable_virtualTouchableRules_cjs_js = require("../components-private/touchable/virtualTouchableRules.cjs.js");
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var __vanilla_filescope____namespace = /* @__PURE__ */ _interopNamespace(__vanilla_filescope__);
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/TextDropdown/TextDropdown.css.ts?used", "braid-monorepo");
const select = css.style(__spreadValues({}, componentsPrivate_touchable_virtualTouchableRules_cjs_js.virtualTouchableRules), "select");
const focusOverlay = [css.style({
  selectors: {
    [`${select}:focus ~ &`]: {
      opacity: 1
    }
  }
}, "focusOverlay"), css.style({
  top: cssUtils.calc.negate(themesVars_cjs_css_js.vars.space.xxsmall),
  bottom: cssUtils.calc.negate(themesVars_cjs_css_js.vars.space.xxsmall),
  left: cssUtils.calc.negate(themesVars_cjs_css_js.vars.space.xxsmall),
  right: cssUtils.calc.negate(themesVars_cjs_css_js.vars.space.xxsmall)
}, "focusOverlay")];
__vanilla_filescope____namespace.endFileScope();
exports.focusOverlay = focusOverlay;
exports.select = select;
