import { NextPage } from "next";
import { ReactElement, ReactNode, useState } from "react";
import type { AppProps } from "next/app";

import "@styles/globals.css";

import ThemeProvider from "@theme/appTheme";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient());
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Hydrate state={pageProps.dehydratedState}>
          {getLayout(<Component appName="Formio" {...pageProps} />)}
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
