import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";

import "@styles/globals.css";

import ThemeProvider from "@theme/appTheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component appName="Formio" {...pageProps} />)}
      </QueryClientProvider>
    </ThemeProvider>
  );
}
