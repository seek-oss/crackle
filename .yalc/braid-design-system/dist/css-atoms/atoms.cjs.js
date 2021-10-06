"use strict";
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var cssReset_reset_cjs_css_js = require("../css-reset/reset.cjs.css.js");
var cssAtoms_sprinkles_cjs_css_js = require("./sprinkles.cjs.css.js");
const atoms = (_a) => {
  var _b = _a, { reset } = _b, rest = __objRest(_b, ["reset"]);
  if (!reset) {
    return cssAtoms_sprinkles_cjs_css_js.sprinkles(rest);
  }
  const elementReset = cssReset_reset_cjs_css_js.element[reset];
  const sprinklesClasses = cssAtoms_sprinkles_cjs_css_js.sprinkles(rest);
  return `${cssReset_reset_cjs_css_js.base}${elementReset ? ` ${elementReset}` : ""}${sprinklesClasses ? ` ${sprinklesClasses}` : ""}`;
};
exports.atoms = atoms;
