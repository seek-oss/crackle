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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/Autosuggest/Autosuggest.css.ts", "braid-monorepo");
const backdrop = css.style({
  width: "100vw",
  height: "100vh",
  background: "black"
}, "backdrop");
const backdropVisible = css.style({
  opacity: 0.4
}, "backdropVisible");
const calcMenuHeight = (numSuggestions) => cssUtils.calc(themesVars_cjs_css_js.vars.touchableSize).multiply(numSuggestions).add(themesVars_cjs_css_js.vars.space.xxsmall).toString();
const menu = css.style(cssResponsiveStyle_cjs_js.responsiveStyle({
  mobile: {
    maxHeight: calcMenuHeight(6),
    overflowY: "auto"
  },
  tablet: {
    maxHeight: calcMenuHeight(8)
  }
}), "menu");
const groupHeading = css.style({
  textTransform: "uppercase"
}, "groupHeading");
__vanilla_filescope____namespace.endFileScope();
exports.backdrop = backdrop;
exports.backdropVisible = backdropVisible;
exports.groupHeading = groupHeading;
exports.menu = menu;
