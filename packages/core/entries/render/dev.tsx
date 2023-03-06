// The css-extractor must be imported first to ensure all CSS is collected
// eslint-disable-next-line import/order
import { criticalCssPlaceholder, inlineCriticalCss } from './css-extractor';

import * as React from 'react';
import { renderToString } from 'react-dom/server';

import type { RenderDevPageFn } from '../types';

import { NotFoundPage } from './NotFoundPage';
import { Page, createRouteMap, nodePageModules } from './shared';

async function renderHtml(
  element: React.ReactElement,
  { routes, statusCode }: { routes: string[]; statusCode: number },
) {
  let html = renderToString(element);
  ({ html } = await inlineCriticalCss(html, criticalCssPlaceholder));

  return {
    html: `<!DOCTYPE html>\n${html}`,
    routes, // TODO: remove; not used
    statusCode,
  };
}

export const renderDevelopmentPage: RenderDevPageFn = async ({
  path,
  entry,
}) => {
  const routeMap = createRouteMap();

  const routes = Object.keys(routeMap);

  if (!routeMap[path]) {
    return renderHtml(
      <NotFoundPage attemptedPath={path} routeMap={routeMap} />,
      {
        routes,
        statusCode: 404,
      },
    );
  }

  const { default: PageComponent } = nodePageModules[routeMap[path].pageName];

  const pageData = { routeMap };

  const bodyTags = <script type="module" src={entry} />;

  return renderHtml(
    <Page
      path={path}
      headTags={null}
      bodyTags={bodyTags}
      pageData={pageData}
      criticalCssPlaceholder={criticalCssPlaceholder}
    >
      <PageComponent />
    </Page>,
    {
      routes,
      statusCode: 200,
    },
  );
};
