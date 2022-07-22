import React from "react"
import styles from "./HeaderTitle.module.scss"
import { useRouter } from "next/router"

export const HeaderTitle = () => {
  const router = useRouter()
  const currentRoute = router.pathname

  return (
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
  )
}
