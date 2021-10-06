import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { style } from "@vanilla-extract/css";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/components/MonthPicker/MonthPicker.css.ts", "braid-monorepo");
const nativeInput = style({
  selectors: {
    "&::-webkit-inner-spin-button, &::-webkit-calendar-picker-indicator, &::-webkit-clear-button": {
      display: "none",
      WebkitAppearance: "none"
    }
  }
}, "nativeInput");
__vanilla_filescope__.endFileScope();
export { nativeInput as n };
