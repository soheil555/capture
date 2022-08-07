import type { AppProps } from "next/app";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/lobster/400.css";

import GlobalStyle from "../components/GlobalStyle";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
