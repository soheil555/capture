import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/lobster/400.css";

import GlobalStyle from "../components/GlobalStyle";
import Nav from "../components/Nav";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  return (
    <>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={asPath} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
