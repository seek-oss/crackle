import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { createThemeContract } from "@vanilla-extract/css";
import { m as makeVanillaTheme } from "./themes-makeVanillaTheme.esm.js";
import { t as tokens } from "./themes-docs/tokens.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/themes/vars.css.ts", "braid-monorepo");
const {
  resolvedTokens
} = makeVanillaTheme(tokens);
const vars = createThemeContract(resolvedTokens);
__vanilla_filescope__.endFileScope();
export { vars as v };
