import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import '../styles/app.scss'
import "prismjs/themes/prism-okaidia.css";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}

export default MyApp
