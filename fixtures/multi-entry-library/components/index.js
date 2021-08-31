import { Card, Stack, Columns, Column, Badge, Heading, Inline, Text, Rating, IconBookmark, IconLocation, IconTag, IconMoney } from "braid-design-system";
import React from "react";
import { l as logger, a as logThePhrase, c as calcAndLog } from "../dist/index.chunk.js";
const multiply = (a, b) => a * b;
const JobSummary = ({ title, isNew }) => {
  logger();
  logThePhrase("Job Summary component");
  calcAndLog(3, 9, multiply);
  return /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(Stack, {
    space: "gutter"
  }, /* @__PURE__ */ React.createElement(Columns, {
    space: "gutter"
  }, /* @__PURE__ */ React.createElement(Column, null, /* @__PURE__ */ React.createElement(Stack, {
    space: "small"
  }, isNew && /* @__PURE__ */ React.createElement(Badge, {
    tone: "positive"
  }, "New"), /* @__PURE__ */ React.createElement(Heading, {
    level: "3"
  }, title), /* @__PURE__ */ React.createElement(Inline, {
    space: "small"
  }, /* @__PURE__ */ React.createElement(Text, {
    tone: "secondary"
  }, "Braid Design Pty Ltd"), /* @__PURE__ */ React.createElement(Rating, {
    rating: 4.5
  })))), /* @__PURE__ */ React.createElement(Column, {
    width: "content"
  }, /* @__PURE__ */ React.createElement(IconBookmark, null))), /* @__PURE__ */ React.createElement(Stack, {
    space: "small"
  }, /* @__PURE__ */ React.createElement(Text, {
    size: "small",
    tone: "secondary"
  }, /* @__PURE__ */ React.createElement(IconLocation, null), " Melbourne"), /* @__PURE__ */ React.createElement(Text, {
    size: "small",
    tone: "secondary"
  }, /* @__PURE__ */ React.createElement(IconTag, null), " Information Technology"), /* @__PURE__ */ React.createElement(Text, {
    size: "small",
    tone: "secondary"
  }, /* @__PURE__ */ React.createElement(IconMoney, null), " 150k+")), /* @__PURE__ */ React.createElement(Text, null, "Long description of card details providing more information."), /* @__PURE__ */ React.createElement(Text, {
    size: "xsmall",
    tone: "secondary"
  }, "2d ago")));
};
export { JobSummary };
