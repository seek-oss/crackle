import type { PageContextBuiltIn } from 'vite-plugin-ssr';
// import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router' // When using Client Routing
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client'; // When using Server Routing

export type PageProps = {
  initialData?: unknown;
  [other: string]: unknown;
};

type Page = (pageProps: PageProps) => React.ReactElement;

export type DocumentProps = {
  title?: string;
  description?: string;
};

export type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  urlPathname: string;
  exports: {
    query?: string;
    documentProps?: DocumentProps;
  };
};

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> &
  PageContextCustom;

export type PageContext = PageContextClient | PageContextServer;
