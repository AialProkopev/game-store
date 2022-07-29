import React from "react"
import { MenuLink } from "../MenuLink/MenuLink"
import styles from "./HeaderMenu.module.scss"

export const HeaderMenu = () => {
  return (
    <nav className={styles.aside}>
      <MenuLink activeLink={"/"}>Discovery</MenuLink>
      <MenuLink activeLink={"/games"}>Games</MenuLink>
    </nav>
  )
}
