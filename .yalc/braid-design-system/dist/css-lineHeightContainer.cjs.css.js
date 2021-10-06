"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var cssResponsiveStyle_cjs_js = require("./css-responsiveStyle.cjs.js");
var themesVars_cjs_css_js = require("./themes-vars.cjs.css.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/css/lineHeightContainer.css.ts", "braid-monorepo");
const lineHeightContainer = css.styleVariants(themesVars_cjs_css_js.vars.textSize, ({
  mobile,
  tablet
}) => cssResponsiveStyle_cjs_js.responsiveStyle({
  mobile: {
    height: mobile.lineHeight
  },
  tablet: {
    height: tablet.lineHeight
  }
}), "lineHeightContainer");
__vanilla_filescope____namespace.endFileScope();
exports.lineHeightContainer = lineHeightContainer;
