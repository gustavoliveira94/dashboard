import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Apollo } from 'services/graphqlClient';

import { GlobalStyles, theme } from 'styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Apollo>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </Apollo>
  );
}
export default MyApp;
