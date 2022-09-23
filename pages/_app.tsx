import '../styles/globals.css';
import { ThemeProvider } from '@material-tailwind/react';
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
      <ThemeProvider>
        <div className='bg-gray-900 min-h-screen'>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
