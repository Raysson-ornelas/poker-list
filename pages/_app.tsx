import '../styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';

import Layout from '../packages/components/Layout';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
