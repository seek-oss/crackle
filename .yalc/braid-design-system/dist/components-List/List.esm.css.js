import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/List/List.css.ts", "braid-monorepo");
const currentColor = style({
  background: "currentColor"
}, "currentColor");
const large = style({
  width: 5,
  height: 5
}, "large");
const standard = style({
  width: 4,
  height: 4
}, "standard");
const xsmall = style({
  width: 3,
  height: 3
}, "xsmall");
const size = {
  large,
  standard,
  small: standard,
  xsmall
};
const dotWidth = 0.4;
const minCharacterWidth = [style({
  minWidth: `${1 + dotWidth}ch`
}, "minCharacterWidth"), style({
  minWidth: `${2 + dotWidth}ch`
}, "minCharacterWidth")];
const trimGutter = style({
  marginRight: `${-dotWidth}ch`
}, "trimGutter");
__vanilla_filescope__.endFileScope();
export { currentColor as c, minCharacterWidth as m, size as s, trimGutter as t };
