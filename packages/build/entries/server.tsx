// @ts-expect-error
// eslint-disable-next-line import/order
import AppShell from '__THE_ENTRY';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

import { LoadingIcon } from './loading-icon/loading-icon';
import { nodePageModules } from './page-modules/node';
import type { RenderFn } from './types';

const pageData: Record<string, string> = {};

for (const [pageName, { routeData }] of Object.entries(nodePageModules)) {
  const { route } = routeData();

  pageData[route.toLowerCase()] = pageName;
}

interface AppProps {
  path: string;
}
function App({ path }: AppProps) {
  return (
    <StaticRouter location={path}>
      <LoadingIcon />
      <AppShell>
        <Routes>
          {Object.entries(pageData).map(([pagePath, pageName]) => (
            <Route
              key={pageName}
              path={pagePath}
              element={React.createElement(nodePageModules[pageName].default)}
            />
          ))}
        </Routes>
      </AppShell>
    </StaticRouter>
  );
}

export const render: RenderFn = ({ path }) => ({
  html: renderToString(<App path={path} />),
  pageData,
});
