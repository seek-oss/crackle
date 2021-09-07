// The AppShell must be imported before the nodePageModules to ensure CSS order consistancy
// @ts-expect-error
// eslint-disable-next-line import/order
import AppShell from '__THE_ENTRY';

import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import serializeJavascript from 'serialize-javascript';

import { LoadingIcon } from '../loading-icon';
import { nodePageModules } from '../page-modules/node';
import { extractRouteMetadata } from '../route-metadata';
import type { PageData, RouteMap } from '../types';

interface RenderPageProps {
  path: string;
  headTags: React.ReactNode;
  bodyTags: React.ReactNode;
  pageData: PageData;
  criticalCssPlaceholder?: string;
  children: React.ReactNode;
}
export const Page = ({
  path,
  headTags,
  bodyTags,
  pageData,
  criticalCssPlaceholder,
  children,
}: RenderPageProps) => {
  const metadata = extractRouteMetadata(pageData.routeMap);

  return (
    <html>
      <head>{headTags}</head>
      <body>
        {criticalCssPlaceholder ?? null}
        <LoadingIcon />
        <div id="app">
          <StaticRouter location={path}>
            <AppShell routeMetadata={metadata}>{children}</AppShell>
          </StaticRouter>
        </div>
        <script
          id="__CRACKLE_PAGE_DATA"
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: serializeJavascript(pageData, { isJSON: true }),
          }}
        />
        {bodyTags}
      </body>
    </html>
  );
};

export const createRouteMap = () => {
  const routeMap: RouteMap = {};

  for (const [pageName, { routeData }] of Object.entries(nodePageModules)) {
    const { route, globalMetadata } = routeData();

    routeMap[route.toLowerCase()] = { pageName, globalMetadata };
  }

  return routeMap;
};

export { nodePageModules };
