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
        Game Store /{" "}
        <span>
          {currentRoute === "/" && `Discovery`}
          {currentRoute === "/games" && `Games`}
          {currentRoute === "/whishlist" && `Whishlist`}
          {currentRoute === "/cart" && `Cart`}
          {currentRoute === "/game/[id]" && `Overview`}
        </span>
      </div>
    </Link>
  )
}
