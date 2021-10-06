"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var css = require("@vanilla-extract/css");
var cssResponsiveStyle_cjs_js = require("../css-responsiveStyle.cjs.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/components/Tiles/Tiles.css.ts", "braid-monorepo");
const columnsWidths = {
  1: "100%",
  2: `${100 / 2}%`,
  3: `${100 / 3}%`,
  4: `${100 / 4}%`,
  5: `${100 / 5}%`,
  6: `${100 / 6}%`
};
const makeColumnsAtoms = (breakpoint) => css.styleVariants(columnsWidths, (width) => cssResponsiveStyle_cjs_js.responsiveStyle({
  [breakpoint]: {
    flex: `0 0 ${width}`
  }
}), `columns_${breakpoint}`);
const columnsMobile = makeColumnsAtoms("mobile");
const columnsTablet = makeColumnsAtoms("tablet");
const columnsDesktop = makeColumnsAtoms("desktop");
const columnsWide = makeColumnsAtoms("wide");
__vanilla_filescope____namespace.endFileScope();
exports.columnsDesktop = columnsDesktop;
exports.columnsMobile = columnsMobile;
exports.columnsTablet = columnsTablet;
exports.columnsWide = columnsWide;
