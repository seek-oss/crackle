// import 'vite/modulepreload-polyfill';

// The AppShell must be imported before the __NODE_PAGE_MODULES to ensure CSS order consistancy
// @ts-expect-error
// eslint-disable-next-line import/order
import AppShell from '__THE_ENTRY';

import { BrowserRouter, Route, Routes } from '@crackle/router';
// eslint-disable-next-line import/order
import browserPageModules from '__BROWSER_PAGE_MODULES';

import React from 'react';
import { useEffect, useState } from 'react';
import { hydrateRoot } from 'react-dom/client';

import { extractRouteMetadata } from './route-metadata';
import type { PageData, RouteMetadata } from './types';

const cachedPages: Record<string, React.FC> = {};

const pageDataElement = document.getElementById('__CRACKLE_PAGE_DATA');
const pageData: PageData = JSON.parse(pageDataElement?.textContent ?? '{}');

const { routeMap } = pageData;

interface PagesProps {
  routeMetadata: RouteMetadata;
}

function Pages({ routeMetadata }: PagesProps) {
  return (
    <BrowserRouter>
      <AppShell routeMetadata={routeMetadata}>
        <Routes>
          {Object.entries(routeMap).map(([path, { pageName }]) => (
            <Route
              key={pageName}
              path={path}
              element={<Page name={pageName} />}
            />
          ))}
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

const targetPage = routeMap[window.location.pathname.toLowerCase()].pageName;
let PreviousPage: React.FC;

browserPageModules[targetPage]()
  .then((pageModule) => {
    cachedPages[targetPage] = pageModule.default;
    PreviousPage = pageModule.default;
  })
  .then(() => {
    document
      .querySelectorAll('[data-module-loading-icon],[data-used-styles]')
      .forEach((e) => e.remove());

    const routeMetadata = extractRouteMetadata(pageData.routeMap);
    hydrateRoot(
      document.getElementById('app')!,
      <Pages routeMetadata={routeMetadata} />,
    );
  });

interface PageProps {
  name: string;
}
function Page({ name }: PageProps) {
  const [PageComponent, setPageComponent] = useState(() => cachedPages[name]);

  useEffect(() => {
    if (!PageComponent) {
      browserPageModules[name]().then((pageModule) => {
        cachedPages[name] = pageModule.default;
        PreviousPage = pageModule.default;
        setPageComponent(() => pageModule.default);
      });
    } else {
      PreviousPage = PageComponent;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return PageComponent ? <PageComponent /> : <PreviousPage />;
}
