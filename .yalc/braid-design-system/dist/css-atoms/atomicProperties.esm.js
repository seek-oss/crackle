var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { v as vars } from "../themes-vars.esm.css.js";
const sizes = {
  full: "100%",
  touchable: vars.touchableSize
};
const space = __spreadProps(__spreadValues({}, vars.space), {
  none: 0
});
const boxShadow = __spreadProps(__spreadValues({}, vars.shadow), {
  outlineFocus: `0 0 0 ${vars.focusRingSize} ${vars.borderColor.focus}`,
  borderField: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.field}`,
  borderStandard: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.standard}`,
  borderStandardInverted: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.standardInverted}`,
  borderCritical: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.critical}`,
  borderCriticalLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.criticalLight}`,
  borderCriticalLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.critical}`,
  borderCaution: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.caution}`,
  borderCautionLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.cautionLight}`,
  borderPositive: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.positive}`,
  borderPositiveLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.positiveLight}`,
  borderInfo: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.info}`,
  borderInfoLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.infoLight}`,
  borderPromote: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.promote}`,
  borderPromoteLight: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.promoteLight}`,
  borderFormHover: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.formHover}`,
  borderFormAccent: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor.formAccent}`,
  borderFormAccentLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.formAccent}`,
  borderBrandAccentLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.brandAccent}`,
  borderStandardInvertedLarge: `inset 0 0 0 ${vars.borderWidth.large} ${vars.borderColor.standardInverted}`
});
const pseudoProperties = {
  transform: vars.transform
};
const unresponsiveProperties = {
  background: vars.backgroundColor,
  overflow: ["hidden", "scroll", "visible", "auto"],
  userSelect: ["none"],
  outline: ["none"],
  opacity: [0],
  zIndex: {
    0: 0,
    1: 1,
    2: 2,
    dropdownBackdrop: 90,
    dropdown: 100,
    sticky: 200,
    modalBackdrop: 290,
    modal: 300,
    notification: 400
  },
  boxShadow,
  cursor: ["default", "pointer"],
  pointerEvents: ["none"],
  top: [0],
  bottom: [0],
  left: [0],
  right: [0],
  height: sizes,
  width: sizes,
  minWidth: {
    0: "0%"
  },
  maxWidth: vars.contentWidth,
  transition: vars.transition
};
const responsiveProperties = {
  display: {
    none: "none",
    block: "block",
    inline: "inline",
    inlineBlock: "inline-block",
    flex: "flex"
  },
  position: ["relative", "absolute", "fixed"],
  borderRadius: __spreadValues({
    none: "0px",
    full: "9999px"
  }, vars.borderRadius),
  paddingTop: space,
  paddingBottom: space,
  paddingRight: space,
  paddingLeft: space,
  marginTop: space,
  marginBottom: space,
  marginRight: space,
  marginLeft: space,
  alignItems: {
    flexStart: "flex-start",
    center: "center",
    flexEnd: "flex-end"
  },
  justifyContent: {
    flexStart: "flex-start",
    center: "center",
    flexEnd: "flex-end",
    spaceBetween: "space-between"
  },
  flexDirection: {
    row: "row",
    rowReverse: "row-reverse",
    column: "column",
    columnReverse: "column-reverse"
  },
  flexWrap: {
    wrap: "wrap",
    nowrap: "nowrap"
  },
  flexShrink: [0],
  flexGrow: [0, 1],
  textAlign: ["left", "center", "right"]
};
export { pseudoProperties as p, responsiveProperties as r, unresponsiveProperties as u };
