import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CareLiving - Quality Home Health and Personal Care</title>
        <meta name="description" content="CareLiving provides quality home health and personal care services, helping seniors with daily tasks to maintain their independence." />
        <meta name="keywords" content="CareLiving, home health, personal care, senior care, quality care, compassionate care" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
