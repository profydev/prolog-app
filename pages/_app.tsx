import type { AppProps } from "next/app";
import { NavigationProvider } from "@contexts/Navigation";
import { GlobalStyle } from "@styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavigationProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </NavigationProvider>
  );
}

export default MyApp;
