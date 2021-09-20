// The css-extractor must be imported first to ensure all CSS is collected
// eslint-disable-next-line import/order
import { inlineCriticalCss } from './css-extractor';

import React from 'react';
import { renderToString } from 'react-dom/server';

import type { RenderDevPageFn } from '../types';

import { NotFoundPage } from './NotFoundPage';
import { Page, createRouteMap, nodePageModules } from './shared';

const reactRefresh = `
import RefreshRuntime from '/@react-refresh'
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
`;

const criticalCssPlaceholder = '__CRACKLE_CRITICAL_CSS__';

export const renderDevelopmentPage: RenderDevPageFn = async ({
  path,
  entry,
}) => {
  const routeMap = createRouteMap();

  const routes = Object.keys(routeMap);

  if (!routeMap[path]) {
    const html = renderToString(
      <NotFoundPage attemptedPath={path} routeMap={routeMap} />,
    );
    return {
      html: await inlineCriticalCss(html, criticalCssPlaceholder),
      routes,
      statusCode: 404,
    };
  }

  const { default: PageComponent } = nodePageModules[routeMap[path].pageName];

  const pageData = { routeMap };

  const bodyTags = [
    <script
      key="react-refresh"
      type="module"
      dangerouslySetInnerHTML={{ __html: reactRefresh }}
    />,
    <script key="vite-client" type="module" src="/@vite/client" />,
    <script key="entry" type="module" src={entry} />,
  ];

  const html = renderToString(
    <Page
      path={path}
      headTags={null}
      bodyTags={bodyTags}
      pageData={pageData}
      criticalCssPlaceholder={criticalCssPlaceholder}
    >
      <PageComponent />
    </Page>,
  );

  return {
    html: await inlineCriticalCss(html, criticalCssPlaceholder),
    routes,
    statusCode: 200,
  };
};
