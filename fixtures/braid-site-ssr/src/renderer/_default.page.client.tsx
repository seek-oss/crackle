import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import 'braid-design-system/reset';

import App from '../App';
import type { PageContextClient } from '../types';

export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext;

  document.querySelectorAll('[data-used-styles]').forEach((e) => e.remove());

  hydrateRoot(
    document.getElementById('app')!,
    <App pageContext={pageContext}>
      <Page {...pageProps} />
    </App>,
  );
}

// To enable Client-side Routing:
// export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting
