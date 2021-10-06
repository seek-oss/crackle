"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var componentsPrivate_hideFocusRings_hideFocusRingsDataAttribute_cjs_js = require("./hideFocusRingsDataAttribute.cjs.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/private/hideFocusRings/hideFocusRings.css.ts", "braid-monorepo");
const hideFocusRingsClassName = css.style({
  selectors: {
    [`[${componentsPrivate_hideFocusRings_hideFocusRingsDataAttribute_cjs_js.hideFocusRingsDataAttribute}] &`]: {
      opacity: "0 !important"
    }
  }
}, "hideFocusRingsClassName");
__vanilla_filescope____namespace.endFileScope();
exports.hideFocusRingsClassName = hideFocusRingsClassName;
