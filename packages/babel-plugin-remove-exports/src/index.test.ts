import pluginTester from 'babel-plugin-tester/pure';
import { describe, expect, it } from 'vitest';

import plugin from './';

// provide Vitest globals for `babel-plugin-tester`
const globalAny: any = global;
globalAny.describe = describe;
globalAny.it = it;
globalAny.expect = expect;

// used with eslint-plugin-format-js-tag to format TypeSscript code inside template literals
const ts = String.raw;

// remove quotes around the snapshot
expect.addSnapshotSerializer({
  test: (val) => typeof val === 'string',
  print: (val) => (val as string).trim(),
});

const tests = [
  {
    title: 'Used import',
    pluginOptions: {
      retainExports: ['routeData'],
    },
    code: ts/* ts */ `
            import { createRouteData } from "@crackle/router";
            import React from "react";

            import { routeSetterUpper, unusedFunctions } from "./internalRoutingLogic";

            import { Something } from "../Somewhere";

            export const routeData = createRouteData<BraidMetadata>(() => {
              const myRoute = "/details";
              return {
                route: myRoute,
                someDetail: routeSetterUpper(),
                globalMetadata: {
                  isDeprecated: true,
                  componentName: "Details",
                },
              };
            });

            export default function () {
              return <Something />;
            }
          `,
  },
  {
    title: 'Braid import',
    pluginOptions: {
      retainExports: ['routeData'],
    },
    code: ts/* ts */ `
            import { createRouteData } from "@crackle/router";
            import { Card, Stack } from "braid-design-system";
            import React from "react";

            import { routeSetterUpper, unusedFunctions } from "./internalRoutingLogic";

            import { Something } from "../Somewhere";

            export const routeData = createRouteData<BraidMetadata>(() => {
              const myRoute = "/details";
              return {
                route: myRoute,
                someDetail: routeSetterUpper(),
                globalMetadata: {
                  isDeprecated: true,
                  componentName: "Details",
                },
              };
            });

            export default function () {
              return (
                <Card>
                  <Stack space="medium">
                    <Something />
                    <Something />
                  </Stack>
                </Card>
              );
            }
          `,
  },
  {
    title: 'Used object',
    pluginOptions: {
      retainExports: ['routeData'],
    },
    code: ts/* ts */ `
            import { createRouteData } from "@crackle/router";
            import React from "react";

            const myMetadata = {
              isDeprecated: true,
              componentName: "Details",
            };

            export const routeData = createRouteData<BraidMetadata>(() => ({
              route: "/details",
              globalMetadata: myMetadata,
            }));

            const MyComponent = () => <div />;

            export default function () {
              return <MyComponent />;
            }
          `,
  },
  {
    title: 'Nested object',
    pluginOptions: {
      retainExports: ['routeData'],
    },
    code: ts/* ts */ `
            import { createRouteData } from "@crackle/router";
            import React from "react";

            const componentName = "Details";

            const myMetadata = {
              isDeprecated: true,
              componentName,
            };

            export const routeData = createRouteData<BraidMetadata>(() => ({
              route: "/details",
              globalMetadata: myMetadata,
            }));

            const MyComponent = () => <div />;

            export default function () {
              return <MyComponent />;
            }
          `,
  },
  {
    title: 'Super nested object',
    pluginOptions: {
      retainExports: ['routeData'],
    },
    code: ts/* ts */ `
            import { createRouteData } from "@crackle/router";
            import React from "react";

            const componentName = "Details";

            const myMetadata = {
              isDeprecated: true,
              componentName,
            };

            const routeDetails = {
              route: "/details",
              globalMetadata: myMetadata,
            };

            export const routeData = createRouteData<BraidMetadata>(() => routeDetails);

            const MyComponent = () => <div />;

            export default function () {
              return <MyComponent />;
            }
          `,
  },
  {
    title: 'Separated named export',
    pluginOptions: {
      retainExports: ['routeData'],
    },
    code: ts/* ts */ `
            import { createRouteData } from "@crackle/router";
            import React from "react";

            const routeData = createRouteData<BraidMetadata>(() => ({
              route: "/details",
              globalMetadata: {
                isDeprecated: true,
                componentName: "Details",
              },
            }));

            const MyComponent = () => <div />;

            export default function () {
              return <MyComponent />;
            }

            export { routeData };
          `,
  },
  {
    title: 'Renamed export',
    pluginOptions: {
      retainExports: ['routeData'],
    },
    code: ts/* ts */ `
            import { createRouteData } from "@crackle/router";
            import React from "react";

            const routes = createRouteData<BraidMetadata>(() => ({
              route: "/details",
              globalMetadata: {
                isDeprecated: true,
                componentName: "Details",
              },
            }));

            const MyComponent = () => <div />;

            export default function () {
              return <MyComponent />;
            }

            export { routes as routeData };
          `,
  },
  {
    title: 'Local variable used in an imported function',
    pluginOptions: {
      retainExports: ['routeData'],
    },
    code: ts/* ts */ `
            import { createRouteData } from "@crackle/router";
            import React from "react";

            import { routeSetupFunc } from "./settyThing";

            const componentDetails = "siteEn";

            const routeData = createRouteData<BraidMetadata>(() => ({
              route: "/details",
              globalMetadata: {
                detailsKey: routeSetupFunc(componentDetails),
                isDeprecated: true,
                componentName: "Details",
              },
            }));

            const MyComponent = () => <div />;

            export default function () {
              return <MyComponent />;
            }

            export { routeData };
          `,
  },
  {
    title: 'Keep default export, Local variable used in an imported function',
    pluginOptions: {
      retainExports: [],
      retainDefault: true,
      retainIdentifiers: ['React'],
    },
    code: ts/* ts */ `
            import { createRouteData } from "@crackle/router";
            import React from "react";

            import { routeSetupFunc } from "./settyThing";

            const componentDetails = "siteEn";

            const routeData = createRouteData<BraidMetadata>(() => ({
              route: "/details",
              globalMetadata: {
                detailsKey: routeSetupFunc(componentDetails),
                isDeprecated: true,
                componentName: "Details",
              },
            }));

            const MyComponent = () => <div />;

            export default function () {
              return <MyComponent />;
            }

            export { routeData };
          `,
  },
];

pluginTester({
  pluginName: 'babel-plugin-remove-exports',
  plugin,
  babelOptions: {
    filename: 'test-file.tsx',
    plugins: [
      '@babel/plugin-syntax-jsx',
      ['@babel/plugin-syntax-typescript', { isTSX: true }],
    ],
  },
  snapshot: true,
  tests,
});
