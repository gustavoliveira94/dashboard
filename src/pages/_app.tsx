import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { Apollo } from 'services/graphqlClient';
import { wrapper } from 'store';
import { getUser } from 'store/ducks/auth';
import { AppState } from 'models/AppState.interface';

import Logout from 'components/Logout';

import { GlobalStyles, theme } from 'styles/globals';

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((store: AppState) => store?.auth);

  const noLoginPage = router.pathname !== '/login';

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      dispatch(getUser());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!user?.isLogged && noLoginPage) {
      router.push('/login');
    }
  }, [user, router, noLoginPage]);

  if (!user?.isLogged && noLoginPage) {
    return null;
  }

  return (
    <Apollo>
      <ThemeProvider theme={theme}>
        <Logout />
        <Component {...pageProps} />
        <GlobalStyles />
        <ToastContainer />
      </ThemeProvider>
    </Apollo>
  );
}

export default wrapper.withRedux(MyApp);
