// import 'vite/modulepreload-polyfill';

// @ts-expect-error
// eslint-disable-next-line import/order
import AppShell from '__THE_ENTRY';

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { removeStyles } from 'used-styles/moveStyles';

import { browserPageModules } from './page-modules/browser';

interface PageData {
  routeMap: Record<string, string>;
}

const cachedPages: Record<string, React.FC> = {};

const pageDataElement = document.getElementById('__CRACKLE_PAGE_DATA');
const pageData: PageData = JSON.parse(pageDataElement?.textContent ?? '{}');

const { routeMap } = pageData;

function Pages() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          {Object.entries(routeMap).map(([path, pageName]) => (
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

const targetPage = routeMap[window.location.pathname.toLowerCase()];
let PreviousPage: React.FC;

browserPageModules[targetPage]()
  .then((pageModule) => {
    cachedPages[targetPage] = pageModule.default;
    PreviousPage = pageModule.default;
  })
  .then(() => {
    removeStyles();
    document
      .querySelectorAll('[data-module-loading-icon]')
      .forEach((e) => e.remove());
    hydrate(<Pages />, document.getElementById('app'));
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
