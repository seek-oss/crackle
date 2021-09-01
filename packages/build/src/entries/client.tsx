// import 'vite/modulepreload-polyfill';
// @ts-expect-error
import AppShell from '__THE_ENTRY';

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { clientPageModules } from './clientPageModules';

const cachedPages: Record<string, React.FC> = {};

const pageDataElement = document.getElementById('__CRACKLE_PAGE_DATA');
const pageData: Record<string, string> = JSON.parse(
  pageDataElement?.textContent ?? '{}',
);

function Pages() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          {Object.entries(pageData).map(([path, pageName]) => (
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

const targetPage = pageData[window.location.pathname.toLowerCase()];
let PreviousPage: React.FC;

clientPageModules[targetPage]()
  .then((pageModule) => {
    cachedPages[targetPage] = pageModule.default;
    PreviousPage = pageModule.default;
  })
  .then(() => {
    hydrate(<Pages />, document.getElementById('app'));
  });

interface PageProps {
  name: string;
}
function Page({ name }: PageProps) {
  const [PageComponent, setPageComponent] = useState(() => cachedPages[name]);

  useEffect(() => {
    if (!PageComponent) {
      clientPageModules[name]().then((pageModule) => {
        cachedPages[name] = pageModule.default;
        PreviousPage = pageModule.default;
        setPageComponent(() => pageModule.default);
      });
    }
  }, [name]);

  return PageComponent ? <PageComponent /> : <PreviousPage />;
}
