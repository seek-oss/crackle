import { darken, lighten, tint } from "polished";
import { m as makeTokens } from "../themes-apac/tokens.esm.js";
const brandAccent = "#0d3880";
var tokens = makeTokens({
  name: "seekBusiness",
  displayName: "SEEK Business",
  brand: "#009fd4",
  brandAccent,
  brandAccentActive: darken(0.05, brandAccent),
  brandAccentHover: lighten(0.05, brandAccent),
  brandAccentSoft: tint(0.925, brandAccent),
  brandAccentSoftActive: tint(0.85, brandAccent),
  brandAccentSoftHover: tint(0.9, brandAccent)
});
export { tokens as t };
