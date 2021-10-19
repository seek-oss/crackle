"use strict";
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/Badge/Badge.css.ts?used", "braid-monorepo");
const constants = {
  textSize: "xsmall"
};
const stylesForBreakpoint = (breakpoint) => {
  const {
    lineHeight,
    capHeight
  } = themesVars_cjs_css_js.vars.textSize[constants.textSize][breakpoint];
  const padding = cssUtils.calc.subtract(lineHeight, capHeight);
  return {
    margin: `${cssUtils.calc(padding).divide(2).negate()} 0`
  };
};
const bleedY = css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
  mobile: stylesForBreakpoint("mobile"),
  tablet: stylesForBreakpoint("tablet")
}), "bleedY");
__vanilla_filescope____namespace.endFileScope();
exports.bleedY = bleedY;
exports.constants = constants;
