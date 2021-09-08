import pluginTester from 'babel-plugin-tester/pure';

import plugin from './';

const tests = [
  `
import { createRouteData } from '@crackle/router';
import React from 'react';

import { Something } from '../Somewhere';

export const routeData = createRouteData<BraidMetadata>(() => ({
  route: '/details',
  globalMetadata: {
    isDeprecated: true,
    componentName: 'Details',
  },
}));

export default function () {
  return <Something />;
}
`,
  //   `
  // import { createRouteData } from '@crackle/router';
  // import React from 'react';

  // export const routeData = createRouteData<BraidMetadata>(() => ({
  //   route: '/details',
  //   globalMetadata: {
  //     isDeprecated: true,
  //     componentName: 'Details',
  //   },
  // }));

  // const MyComponent = () => <div />

  // export default function () {
  //   return <MyComponent />;
  // }
  // `,
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
