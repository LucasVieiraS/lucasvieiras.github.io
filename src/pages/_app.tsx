import { ScrollToTop } from '@/components/custom/scroll-to-top'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Lucas Vieira | Full-Stack Dev</title>
    </Head>
    <ScrollToTop />
    <Component {...pageProps} />
  </>
}
