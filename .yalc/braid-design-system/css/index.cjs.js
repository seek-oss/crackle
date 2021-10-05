"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var themesVars_cjs_css_js = require("../dist/themes-vars.cjs.css.js");
var cssAtoms_atoms_cjs_js = require("../dist/css-atoms/atoms.cjs.js");
var cssResponsiveStyle_cjs_js = require("../dist/css-responsiveStyle.cjs.js");
var index = require("../dist/index.chunk.cjs.js");
var cssBreakpoints_cjs_js = require("../dist/css-breakpoints.cjs.js");
const {
  grid,
  space,
  touchableSize,
  backgroundColor,
  foregroundColor,
  textWeight,
  borderColor,
  borderRadius,
  borderWidth
} = themesVars_cjs_css_js.vars;
const vars = {
  grid,
  space,
  touchableSize,
  backgroundColor,
  foregroundColor,
  textWeight,
  borderColor,
  borderRadius,
  borderWidth
};
function atoms(props) {
  return cssAtoms_atoms_cjs_js.atoms(props);
}
exports.responsiveStyle = cssResponsiveStyle_cjs_js.responsiveStyle;
exports.globalHeadingStyle = index.globalHeadingStyle;
exports.globalTextStyle = index.globalTextStyle;
exports.breakpoints = cssBreakpoints_cjs_js.breakpoints;
exports.atoms = atoms;
exports.vars = vars;
