import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { NavigationProvider } from "@contexts/Navigation";
import { GlobalStyle } from "@styles/GlobalStyle";
import { theme } from "@styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <NavigationProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
