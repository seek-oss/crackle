import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style, styleVariants } from "@vanilla-extract/css";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Column/Column.css.ts", "braid-monorepo");
const column = style({}, "column");
const columnContent = style({
  selectors: {
    [`${column}:first-child > &`]: {
      paddingTop: 0
    }
  }
}, "columnContent");
const getSizeStyle = (scale) => ({
  flex: `0 0 ${scale * 100}%`
});
const width = styleVariants({
  "1/2": getSizeStyle(1 / 2),
  "1/3": getSizeStyle(1 / 3),
  "2/3": getSizeStyle(2 / 3),
  "1/4": getSizeStyle(1 / 4),
  "3/4": getSizeStyle(3 / 4),
  "1/5": getSizeStyle(1 / 5),
  "2/5": getSizeStyle(2 / 5),
  "3/5": getSizeStyle(3 / 5),
  "4/5": getSizeStyle(4 / 5)
}, "width");
__vanilla_filescope__.endFileScope();
export { columnContent as a, column as c, width as w };
