import { extendTheme, ChakraProvider } from '@chakra-ui/core';

import Layout from '../layouts/default';
import { AppProps } from 'next/app'

const theme = extendTheme({
  colors: {
    primaryBlue: '#2F317C',
    secondaryBlue: '#4B90FF',
    primaryDark: '#1e2a3a',
    lightBackground: '#f8fafc',
    highlightYellow: '#FED003',
  },
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    mono: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: 'system',
  },
});

function MyApp({ Component, pageProps, router }:AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
