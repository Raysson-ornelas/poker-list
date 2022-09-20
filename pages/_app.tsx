import '../styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

import Layout from '../packages/components/Layout';

import type { AppProps } from 'next/app';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
