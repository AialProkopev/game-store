import "../styles/globals.scss"
import type { AppProps } from "next/app"
import styles from "../styles/app.module.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.app}>
      <header className={styles.header}>header</header>
      <aside className={styles.aside}>aside</aside>
      <main className={styles.main}>
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
