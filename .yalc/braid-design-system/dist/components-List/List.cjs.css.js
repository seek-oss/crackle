"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/List/List.css.ts", "braid-monorepo");
const currentColor = css.style({
  background: "currentColor"
}, "currentColor");
const large = css.style({
  width: 5,
  height: 5
}, "large");
const standard = css.style({
  width: 4,
  height: 4
}, "standard");
const xsmall = css.style({
  width: 3,
  height: 3
}, "xsmall");
const size = {
  large,
  standard,
  small: standard,
  xsmall
};
const dotWidth = 0.4;
const minCharacterWidth = [css.style({
  minWidth: `${1 + dotWidth}ch`
}, "minCharacterWidth"), css.style({
  minWidth: `${2 + dotWidth}ch`
}, "minCharacterWidth")];
const trimGutter = css.style({
  marginRight: `${-dotWidth}ch`
}, "trimGutter");
__vanilla_filescope____namespace.endFileScope();
exports.currentColor = currentColor;
exports.minCharacterWidth = minCharacterWidth;
exports.size = size;
exports.trimGutter = trimGutter;
