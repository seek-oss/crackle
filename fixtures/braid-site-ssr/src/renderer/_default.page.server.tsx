// eslint-disable-next-line import/order
import {
  criticalCssPlaceholder,
  inlineCriticalCss,
} from '../../../../packages/core/entries/render/css-extractor';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';

import App from '../App';
import type { PageContextServer } from '../types';

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname', 'initialData'];

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext;
  let pageHtml = renderToString(
    <App pageContext={pageContext}>
      <Page {...pageProps} />
    </App>,
  );

  const { html: cleanHtml, styles: criticalStyles } = await inlineCriticalCss(
    pageHtml,
    criticalCssPlaceholder,
  );
  pageHtml = cleanHtml;

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = documentProps?.title ?? 'Vite SSR app';
  const desc = documentProps?.description ?? 'App using Vite + vite-plugin-ssr';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        ${dangerouslySkipEscape(criticalStyles)}
        <div id="app">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  };
}

export async function onBeforeRender(pageContext: PageContextServer) {
  // Our `query` export values are available at `pageContext.exports.query`
  const { query } = pageContext.exports;
  let pageProps = {};
  if (query) {
    const response = await fetch(query);
    const { results: initialData } = await response.json();
    pageProps = { initialData };
  }
  return {
    pageContext: { pageProps },
  };
}
