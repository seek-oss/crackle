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
var cssResponsiveStyle_cjs_js = require("../css-responsiveStyle.cjs.js");
var themesVars_cjs_css_js = require("../themes-vars.cjs.css.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/css/negativeMargin/negativeMarginTop.css.ts", "braid-monorepo");
const negativeMarginTop = (spaceValue) => ({
  ":before": {
    marginBottom: spaceValue ? cssUtils.calc.negate(spaceValue) : 0
  }
});
const base = css.style({
  ":before": {
    content: '""',
    display: "table"
  }
}, "base");
const mobile = css.styleVariants(__spreadValues({
  none: 0
}, themesVars_cjs_css_js.vars.space), (value) => negativeMarginTop(value), "mobile");
const tablet = css.styleVariants(__spreadValues({
  none: 0
}, themesVars_cjs_css_js.vars.space), (value) => cssResponsiveStyle_cjs_js.responsiveStyle({
  tablet: negativeMarginTop(value)
}), "tablet");
const desktop = css.styleVariants(__spreadValues({
  none: 0
}, themesVars_cjs_css_js.vars.space), (value) => cssResponsiveStyle_cjs_js.responsiveStyle({
  desktop: negativeMarginTop(value)
}), "desktop");
const wide = css.styleVariants(__spreadValues({
  none: 0
}, themesVars_cjs_css_js.vars.space), (value) => cssResponsiveStyle_cjs_js.responsiveStyle({
  wide: negativeMarginTop(value)
}), "wide");
__vanilla_filescope____namespace.endFileScope();
exports.base = base;
exports.desktop = desktop;
exports.mobile = mobile;
exports.tablet = tablet;
exports.wide = wide;
