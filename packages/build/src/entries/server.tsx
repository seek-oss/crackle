// @ts-expect-error
import AppShell from '__THE_ENTRY';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes, Route } from 'react-router-dom';

import type { RenderFn } from '../types';

import { serverPageModules } from './serverPageModules';

const pageData: Record<string, string> = {};

for (const [pageName, { routeData }] of Object.entries(serverPageModules)) {
  const { route } = routeData();

  pageData[route.toLowerCase()] = pageName;
}

export const render: RenderFn = ({ path }) => {
  return {
    html: renderToString(<App path={path} />),
    pageData,
  };
};

interface AppProps {
  path: string;
}
function App({ path }: AppProps) {
  return (
    <StaticRouter location={path}>
      <AppShell>
        <Routes>
          {Object.entries(pageData).map(([pagePath, pageName]) => (
            <Route
              key={pageName}
              path={pagePath}
              element={React.createElement(serverPageModules[pageName].default)}
            />
          ))}
        </Routes>
      </AppShell>
    </StaticRouter>
  );
}
