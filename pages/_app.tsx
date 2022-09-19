import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-tailwind/react'
import Layout from '../packages/components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
