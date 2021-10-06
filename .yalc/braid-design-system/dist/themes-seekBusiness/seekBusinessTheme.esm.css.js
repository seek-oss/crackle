import * as __vanilla_filescope__ from "@vanilla-extract/css/fileScope";
import { createTheme } from "@vanilla-extract/css";
import { v as vars } from "../themes-vars.esm.css.js";
import { m as makeVanillaTheme } from "../themes-makeVanillaTheme.esm.js";
import { t as tokens } from "./tokens.esm.js";
__vanilla_filescope__.setFileScope("packages/braid-design-system/src/themes/seekBusiness/seekBusinessTheme.css.ts", "braid-monorepo");
const {
  resolvedTokens,
  runtimeTokens
} = makeVanillaTheme(tokens);
var vanillaTheme = createTheme(vars, resolvedTokens, "default");
__vanilla_filescope__.endFileScope();
export { runtimeTokens as r, vanillaTheme as v };
