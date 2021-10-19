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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/MenuItemCheckbox/MenuItemCheckbox.css.ts", "braid-monorepo");
const checkboxPadding = css.style({
  padding: 2
}, "checkboxPadding");
const standardText = themesVars_cjs_css_js.vars.textSize.standard;
const calculateSize = (capHeight) => cssUtils.calc.multiply(capHeight, 1.8);
const mobileSize = calculateSize(standardText.mobile.capHeight);
const tabletSize = calculateSize(standardText.tablet.capHeight);
const checkboxBorder = css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
  mobile: {
    width: mobileSize,
    height: mobileSize
  },
  tablet: {
    width: tabletSize,
    height: tabletSize
  }
}), "checkboxBorder");
__vanilla_filescope____namespace.endFileScope();
exports.checkboxBorder = checkboxBorder;
exports.checkboxPadding = checkboxPadding;
