import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/core';

import Layout from '../layouts/default';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
