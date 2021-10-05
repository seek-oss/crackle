import { v as vars$1 } from "../dist/themes-vars.esm.css.js";
import { a as atoms$1 } from "../dist/css-atoms/atoms.esm.js";
export { r as responsiveStyle } from "../dist/css-responsiveStyle.esm.js";
export { k as globalHeadingStyle, j as globalTextStyle } from "../dist/index.chunk.esm.js";
export { b as breakpoints } from "../dist/css-breakpoints.esm.js";
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
} = vars$1;
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
  return atoms$1(props);
}
export { atoms, vars };
