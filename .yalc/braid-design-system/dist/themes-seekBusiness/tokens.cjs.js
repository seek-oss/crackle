"use strict";
var polished = require("polished");
var themesApac_tokens_cjs_js = require("../themes-apac/tokens.cjs.js");
const brandAccent = "#0d3880";
var tokens = themesApac_tokens_cjs_js.makeTokens({
  name: "seekBusiness",
  displayName: "SEEK Business",
  brand: "#009fd4",
  brandAccent,
  brandAccentActive: polished.darken(0.05, brandAccent),
  brandAccentHover: polished.lighten(0.05, brandAccent),
  brandAccentSoft: polished.tint(0.925, brandAccent),
  brandAccentSoftActive: polished.tint(0.85, brandAccent),
  brandAccentSoftHover: polished.tint(0.9, brandAccent)
});
exports.tokens = tokens;
