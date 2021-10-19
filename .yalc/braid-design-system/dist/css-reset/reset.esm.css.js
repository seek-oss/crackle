import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style, composeStyles } from "@vanilla-extract/css";
import { h as hideFocusRingsDataAttribute } from "../components-private/hideFocusRings/hideFocusRingsDataAttribute.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/css/reset/reset.css.ts?used", "braid-monorepo");
const base = style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: "border-box",
  fontSize: "100%",
  font: "inherit",
  verticalAlign: "baseline",
  WebkitTapHighlightColor: "transparent",
  selectors: {
    [`[${hideFocusRingsDataAttribute}] &`]: {
      outline: "none"
    }
  }
}, "base");
const block = style({
  display: "block"
}, "block");
const body = style({
  lineHeight: 1
}, "body");
const list = style({
  listStyle: "none"
}, "list");
const quote = style({
  quotes: "none",
  selectors: {
    "&:before, &:after": {
      content: "''"
    }
  }
}, "quote");
const table = style({
  borderCollapse: "collapse",
  borderSpacing: 0
}, "table");
const appearance = style({
  appearance: "none"
}, "appearance");
const field = composeStyles(block, appearance);
const mark = style({
  backgroundColor: "transparent",
  color: "inherit"
}, "mark");
const select = composeStyles(field, style({
  selectors: {
    "&::-ms-expand": {
      display: "none"
    }
  }
}, "select"));
const input = composeStyles(field, style({
  selectors: {
    "&::-ms-clear": {
      display: "none"
    },
    "&::-webkit-search-cancel-button": {
      WebkitAppearance: "none"
    }
  }
}, "input"));
const button = style({
  background: "none"
}, "button");
const a = style({
  textDecoration: "none",
  color: "inherit"
}, "a");
const element = {
  article: block,
  aside: block,
  details: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  body,
  a,
  table,
  mark,
  select,
  button,
  textarea: field,
  input
};
__vanilla_filescope__.endFileScope();
export { base as b, element as e };
