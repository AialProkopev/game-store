import "styles/globals.scss"
import type { AppProps } from "next/app"
import styles from "../styles/app.module.scss"
import Link from "next/link"
import { useRouter } from "next/router"
import { Diamond, Cart } from "@styled-icons/ionicons-solid/"
import Image from "next/image"

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <div className={styles.app}>
      <header className={styles.header}>header</header>
      <aside className={styles.aside}>
        <Link href="/">
          <a className={styles.logo}>
            <Image height={30} width={100} src="/vercel.svg" alt="" />
            Game Store
          </a>
        </Link>
        <div
          className={
            currentRoute === "/"
              ? `${styles.aside__item} ${styles.aside__item_active}`
              : styles.aside__item
          }
        >
          <Link href="/">
            <a
              className={
                currentRoute === "/"
                  ? `${styles.link} ${styles.link_active}`
                  : styles.link
              }
            >
              <Diamond height={40} />
            </a>
          </Link>
        </div>

        <div
          className={
            currentRoute === "/cart"
              ? `${styles.aside__item} ${styles.aside__item_active}`
              : styles.aside__item
          }
        >
          <Link href="/cart">
            <a
              className={
                currentRoute === "/cart"
                  ? `${styles.link} ${styles.link_active}`
                  : styles.link
              }
            >
              <Cart height={40} />
            </a>
          </Link>
        </div>
      </aside>
      <div className={styles.main}>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
