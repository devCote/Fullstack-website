import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../styles/theme'
import '../styles/globals.css';
import { createContext } from 'react'
import { Store } from '../store/userStore';


export const StoreContext = createContext<any>(null)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <StoreContext.Provider value={new Store}>
        <Component {...pageProps} />
      </StoreContext.Provider>
    </ChakraProvider>
  );
}

export default MyApp;
