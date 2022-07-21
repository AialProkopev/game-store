import { Search } from "src/components/Search/Search"
import React from "react"
import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        GameStore / <span>Discovery</span>
      </div>
      <Search />
    </header>
  )
}
