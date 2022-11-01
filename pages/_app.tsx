import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

import type { AppProps } from 'next/app';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={session}>
      <div className='bg-gradient-to-br from-gray-800 via-gray-900 to-black  min-h-screen'>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
