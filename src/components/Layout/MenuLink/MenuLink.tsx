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
  const linkClassName =
    currentRoute === activeLink
      ? `${styles.link} ${styles.link_active}`
      : styles.link
  const wrapperClassName =
    currentRoute === activeLink
      ? `${styles.wrapper} ${styles.wrapper_active}`
      : styles.wrapper

  return (
    <div className={wrapperClassName}>
      <Link href={activeLink}>
        <a className={linkClassName}>{children}</a>
      </Link>
    </div>
  )
}
