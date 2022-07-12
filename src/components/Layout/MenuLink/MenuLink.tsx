import React, { FC, PropsWithChildren } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from "./MenuLink.module.scss"

interface MenuLinkType {
  activeLink: string
}

export const MenuLink: FC<PropsWithChildren<MenuLinkType>> = ({
  children,
  activeLink = "/",
}) => {
  const router = useRouter()
  const currentRoute = router.pathname
  return (
    <div
      className={
        currentRoute === activeLink
          ? `${styles.wrapper} ${styles.wrapper_active}`
          : styles.wrapper
      }
    >
      <Link href={activeLink}>
        <a
          className={
            currentRoute === activeLink
              ? `${styles.link} ${styles.link_active}`
              : styles.link
          }
        >
          {children}
        </a>
      </Link>
    </div>
  )
}
