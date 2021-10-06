import { h as hitArea } from "./hitArea.esm.js";
const virtualTouchableRules = {
  transform: "translateY(-50%)",
  minHeight: hitArea,
  minWidth: hitArea,
  height: "100%",
  top: "50%"
};
export { virtualTouchableRules as v };
