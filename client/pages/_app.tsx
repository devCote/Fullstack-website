import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme'
import '../styles/globals.css';
import { createContext } from 'react'
import { Store } from '../store/userStore';

let store: Store;

export const StoreContext = createContext<any>(null)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <StoreContext.Provider value={initializeStore()}>
        <Component {...pageProps} />
      </StoreContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;


function initializeStore(): Store {
  const _store = store ?? new Store();
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;
  return _store;
}
