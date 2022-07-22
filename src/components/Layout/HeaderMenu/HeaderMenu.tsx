import React from "react"
import { Diamond, Heart } from "@styled-icons/ionicons-solid/"
import { Games } from "@styled-icons/fluentui-system-filled/Games"
import { MenuLink } from "../MenuLink/MenuLink"
import styles from "./HeaderMenu.module.scss"

const logoSize = 26

export const HeaderMenu = () => {
  return (
    <nav className={styles.aside}>
      <MenuLink activeLink={"/"}>
        <Diamond height={logoSize} />
      </MenuLink>
      <MenuLink activeLink={"/games"}>
        <Games height={logoSize} />
      </MenuLink>
      <MenuLink activeLink={"/whishlist"}>
        <Heart height={logoSize} />
      </MenuLink>
    </nav>
  )
}
