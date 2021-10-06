import { m as makeTokens } from "../themes-jobStreetClassic/tokens.esm.js";
const brand = "#1c3f94";
var tokens = makeTokens({
  name: "jobStreet",
  displayName: "JobStreet",
  bodyBackground: "#e5e5e5",
  brand,
  brandAccent: "#fff200",
  formAccent: brand
});
export { tokens as t };
