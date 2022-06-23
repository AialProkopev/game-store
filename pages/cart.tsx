import type { NextPage } from "next"
import Head from "next/head"
import { DotenvConfigOptions } from "dotenv"

const Cart: NextPage = () => {
  console.log(process.env.API_KEY)

  return (
    <div>
      <Head>
        <title>Game Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Cart
    </div>
  )
}

export default Cart
