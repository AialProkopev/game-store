import React from "react"
import { Diamond, Cart, Heart } from "@styled-icons/ionicons-solid/"
import { Games } from "@styled-icons/fluentui-system-filled/Games"
import { MenuLink } from "../MenuLink/MenuLink"
import styles from "./AsideMenu.module.scss"

const logoSize = 32

export const AsideMenu = () => {
  return (
    <aside className={styles.aside}>
      <MenuLink activeLink={"/"}>
        <Diamond height={logoSize} />
      </MenuLink>
      <MenuLink activeLink={"/games"}>
        <Games height={logoSize} />
      </MenuLink>
      <MenuLink activeLink={"/favourite"}>
        <Heart height={logoSize} />
      </MenuLink>
      <MenuLink activeLink={"/cart"}>
        <Cart height={logoSize} />
      </MenuLink>
    </aside>
  )
}
