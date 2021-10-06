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
import { b as base, e as element } from "../css-reset/reset.esm.css.js";
import { s as sprinkles } from "./sprinkles.esm.css.js";
const atoms = (_a) => {
  var _b = _a, { reset } = _b, rest = __objRest(_b, ["reset"]);
  if (!reset) {
    return sprinkles(rest);
  }
  const elementReset = element[reset];
  const sprinklesClasses = sprinkles(rest);
  return `${base}${elementReset ? ` ${elementReset}` : ""}${sprinklesClasses ? ` ${sprinklesClasses}` : ""}`;
};
export { atoms as a };
