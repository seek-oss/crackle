"use strict";
var __vanilla_filescope__ = require("@vanilla-extract/css/fileScope");
var sprinkles$1 = require("@vanilla-extract/sprinkles");
var cssBreakpoints_cjs_js = require("../css-breakpoints.cjs.js");
var cssAtoms_atomicProperties_cjs_js = require("./atomicProperties.cjs.js");
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
__vanilla_filescope____namespace.setFileScope("packages/braid-design-system/src/css/atoms/sprinkles.css.ts", "braid-monorepo");
const unresponsiveAtomicStyles = sprinkles$1.createAtomicStyles({
  properties: cssAtoms_atomicProperties_cjs_js.unresponsiveProperties
});
const pseudoAtomicStyles = sprinkles$1.createAtomicStyles({
  defaultCondition: false,
  conditions: {
    active: {
      selector: "&:active"
    }
  },
  properties: cssAtoms_atomicProperties_cjs_js.pseudoProperties
});
const responsiveAtomicStyles = sprinkles$1.createAtomicStyles({
  defaultCondition: "mobile",
  conditions: {
    mobile: {},
    tablet: {
      "@media": `screen and (min-width: ${cssBreakpoints_cjs_js.breakpoints.tablet}px)`
    },
    desktop: {
      "@media": `screen and (min-width: ${cssBreakpoints_cjs_js.breakpoints.desktop}px)`
    },
    wide: {
      "@media": `screen and (min-width: ${cssBreakpoints_cjs_js.breakpoints.wide}px)`
    }
  },
  responsiveArray: cssBreakpoints_cjs_js.breakpointNames,
  properties: cssAtoms_atomicProperties_cjs_js.responsiveProperties,
  shorthands: {
    padding: ["paddingBottom", "paddingTop", "paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    paddingX: ["paddingLeft", "paddingRight"],
    margin: ["marginBottom", "marginTop", "marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    marginX: ["marginLeft", "marginRight"]
  }
});
const sprinkles = sprinkles$1.createAtomsFn(unresponsiveAtomicStyles, responsiveAtomicStyles, pseudoAtomicStyles);
const normalizeResponsiveValue = sprinkles$1.createNormalizeValueFn(responsiveAtomicStyles);
const mapResponsiveValue = sprinkles$1.createMapValueFn(responsiveAtomicStyles);
__vanilla_filescope____namespace.endFileScope();
exports.mapResponsiveValue = mapResponsiveValue;
exports.normalizeResponsiveValue = normalizeResponsiveValue;
exports.sprinkles = sprinkles;
