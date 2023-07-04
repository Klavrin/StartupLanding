import Head from 'next/head'
import '../styles/reset.scss'
import { AppProps } from 'next/app'

const Page = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>StartupLanding</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default Page
