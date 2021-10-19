"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/Rating/Rating.css.ts?used", "braid-monorepo");
const starColor = css.style({
  color: themesVars_cjs_css_js.vars.foregroundColor.rating
}, "starColor");
const starSpacing = css.style({
  paddingRight: "1px"
}, "starSpacing");
const textSpacing = css.style({
  paddingLeft: "0.4em"
}, "textSpacing");
__vanilla_filescope____namespace.endFileScope();
exports.starColor = starColor;
exports.starSpacing = starSpacing;
exports.textSpacing = textSpacing;
