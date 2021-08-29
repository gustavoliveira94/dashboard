import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { Apollo } from 'services/graphqlClient';
import { wrapper } from 'store';

import { GlobalStyles, theme } from 'styles/globals';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Apollo>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
        <ToastContainer />
      </ThemeProvider>
    </Apollo>
  );
}
export default wrapper.withRedux(MyApp);
