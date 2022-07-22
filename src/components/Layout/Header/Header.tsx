import { Search } from "src/components/Search/Search"
import React from "react"
import styles from "./Header.module.scss"
import { HeaderMenu } from "../HeaderMenu/HeaderMenu"
import { HeaderCart } from "../HeaderCart/HeaderCart"
import { HeaderTitle } from "../HeaderTitle/HeaderTitle"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <HeaderTitle />
        <Search />
        <HeaderMenu />
      </div>
      <HeaderCart />
    </header>
  )
}
