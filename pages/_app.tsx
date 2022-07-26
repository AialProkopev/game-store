import type { AppProps } from "next/app"
import { wrapper } from "src/store/store"
import { Layout } from "src/components/Layout/Layout"
import "src/styles/globals.scss"
import "src/styles/reset.scss"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Game Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default wrapper.withRedux(MyApp)
