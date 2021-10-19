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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/Pagination/Pagination.css.ts?used", "braid-monorepo");
const hover = css.style({}, "hover");
const currentKeyline = css.style({
  opacity: 0.3
}, "currentKeyline");
const current = css.style({
  opacity: 0.075
}, "current");
const background = css.style({
  selectors: {
    [`${hover}:hover &:not(${current})`]: {
      opacity: 0.5
    }
  }
}, "background");
__vanilla_filescope____namespace.endFileScope();
exports.background = background;
exports.current = current;
exports.currentKeyline = currentKeyline;
exports.hover = hover;
