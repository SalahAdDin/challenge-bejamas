import AppContext, {
  defaultQueryVariables,
  initialProductsState,
} from '@application/app.context';
import { initialState, reducer } from '@application/cart.reducer';
import { ProductsState } from '@domain/products.dto';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import createEmotionCache from '@presentation/theme/createEmotionCache';
import theme from '@presentation/theme/theme';
import Head from 'next/head';
import { useEffect, useMemo, useReducer, useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import type { AppProps } from 'next/app';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line global-require
  require('../../server');
}

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { dehydratedState } = pageProps;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [queryClient] = useState(() => new QueryClient());
  const [productsState, setProductsState] =
    useState<ProductsState>(initialProductsState);
  const [openCart, setOpenCart] = useState(false);
  const [queryVariables, setQueryVariables] = useState(defaultQueryVariables);
  const memo = useMemo(
    () => ({
      productsState,
      setProductsState,
      state,
      dispatch,
      openCart,
      setOpenCart,
      queryVariables,
      setQueryVariables,
    }),
    [productsState, state, openCart, queryVariables],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (state != null && state.price > 0) {
        localStorage.setItem('cart', JSON.stringify(state));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [state]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        state={dehydratedState}
      >
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <AppContext.Provider value={memo}>
              <CssBaseline />
              <Component {...pageProps} />
              <ReactQueryDevtools initialIsOpen={false} />
            </AppContext.Provider>
          </ThemeProvider>
        </CacheProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
