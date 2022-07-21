import { Search } from "src/components/Search/Search"
import React from "react"
import styles from "./Header.module.scss"
import { useRouter } from "next/router"

export const Header = () => {
  const router = useRouter()
  const currentRoute = router.pathname
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        {currentRoute === "/" && (
          <>
            Game Store / <span>Discovery</span>
          </>
        )}
        {currentRoute === "/games" && (
          <>
            Game Store / <span>Games</span>
          </>
        )}
        {currentRoute === "/whishlist" && (
          <>
            Game Store / <span>Whishlist</span>
          </>
        )}
        {currentRoute === "/cart" && (
          <>
            Game Store / <span>Cart</span>
          </>
        )}
      </div>
      <Search />
    </header>
  )
}
