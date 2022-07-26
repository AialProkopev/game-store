import React from "react"
import styles from "./HeaderTitle.module.scss"
import { useRouter } from "next/router"
import Link from "next/link"

export const HeaderTitle = () => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
    <Link href="/">
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
        {currentRoute === "/game/[id]" && (
          <>
            Game Store / <span>Overview</span>
          </>
        )}
      </div>
    </Link>
  )
}
