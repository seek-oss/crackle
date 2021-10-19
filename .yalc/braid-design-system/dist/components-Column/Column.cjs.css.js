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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/Column/Column.css.ts?used", "braid-monorepo");
const column = css.style({}, "column");
const columnContent = css.style({
  selectors: {
    [`${column}:first-child > &`]: {
      paddingTop: 0
    }
  }
}, "columnContent");
const getSizeStyle = (scale) => ({
  flex: `0 0 ${scale * 100}%`
});
const width = css.styleVariants({
  "1/2": getSizeStyle(1 / 2),
  "1/3": getSizeStyle(1 / 3),
  "2/3": getSizeStyle(2 / 3),
  "1/4": getSizeStyle(1 / 4),
  "3/4": getSizeStyle(3 / 4),
  "1/5": getSizeStyle(1 / 5),
  "2/5": getSizeStyle(2 / 5),
  "3/5": getSizeStyle(3 / 5),
  "4/5": getSizeStyle(4 / 5)
}, "width");
__vanilla_filescope____namespace.endFileScope();
exports.column = column;
exports.columnContent = columnContent;
exports.width = width;
