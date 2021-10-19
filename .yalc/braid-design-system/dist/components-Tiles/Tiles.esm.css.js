import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { styleVariants } from "@vanilla-extract/css";
import { r as responsiveStyle } from "../css-responsiveStyle.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/Tiles/Tiles.css.ts", "braid-monorepo");
const columnsWidths = {
  1: "100%",
  2: `${100 / 2}%`,
  3: `${100 / 3}%`,
  4: `${100 / 4}%`,
  5: `${100 / 5}%`,
  6: `${100 / 6}%`
};
const makeColumnsAtoms = (breakpoint) => styleVariants(columnsWidths, (width) => responsiveStyle({
  [breakpoint]: {
    flex: `0 0 ${width}`
  }
}), `columns_${breakpoint}`);
const columnsMobile = makeColumnsAtoms("mobile");
const columnsTablet = makeColumnsAtoms("tablet");
const columnsDesktop = makeColumnsAtoms("desktop");
const columnsWide = makeColumnsAtoms("wide");
__vanilla_filescope__.endFileScope();
export { columnsDesktop as a, columnsTablet as b, columnsWide as c, columnsMobile as d };
