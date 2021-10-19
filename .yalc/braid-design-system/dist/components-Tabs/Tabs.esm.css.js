import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
import { v as vars } from "../themes-vars.esm.css.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Tabs/Tabs.css.ts?used", "braid-monorepo");
const tab = style({
  selectors: {
    "&::-moz-focus-inner": {
      border: 0
    }
  }
}, "tab");
const hairlineMarginLeft = style({
  marginLeft: 1
}, "hairlineMarginLeft");
const nowrap = style({
  whiteSpace: "nowrap"
}, "nowrap");
const scroll = style({
  WebkitOverflowScrolling: "touch",
  overflowX: "auto",
  overflowY: "hidden",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  selectors: {
    "&::-webkit-scrollbar": {
      width: 0,
      height: 0
    }
  }
}, "scroll");
const mask = style({
  maskImage: "linear-gradient(90deg, rgba(0,0,0,1) 0, rgba(0,0,0,1) calc(100% - 80px), rgba(0,0,0,0) 100%)"
}, "mask");
const marginAuto = style({
  marginLeft: "auto",
  marginRight: "auto"
}, "marginAuto");
const tabFocusRing = style({
  margin: vars.borderWidth.large,
  selectors: {
    [`${tab}:focus &`]: {
      opacity: 1
    }
  }
}, "tabFocusRing");
const tabUnderline = style({
  height: 2
}, "tabUnderline");
const tabUnderlineHover = style({
  selectors: {
    [`${tab}:hover &`]: {
      opacity: 1
    }
  }
}, "tabUnderlineHover");
const tabUnderlineAnimation = style({
  transform: "translateY(100%)"
}, "tabUnderlineAnimation");
const tabPanel = style({}, "tabPanel");
const tabPanelFocusRing = style({
  selectors: {
    [`${tabPanel}:focus > &`]: {
      opacity: 1
    }
  }
}, "tabPanelFocusRing");
const divider = style({
  background: vars.borderColor.standard,
  height: vars.borderWidth.standard
}, "divider");
__vanilla_filescope__.endFileScope();
export { tabUnderlineHover as a, tabUnderline as b, tabUnderlineAnimation as c, divider as d, tabFocusRing as e, marginAuto as f, tabPanel as g, hairlineMarginLeft as h, tabPanelFocusRing as i, mask as m, nowrap as n, scroll as s, tab as t };
