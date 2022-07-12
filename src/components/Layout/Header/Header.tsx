import React from "react"
import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header}>
      GameStore / <span>Discovery</span>
    </header>
  )
}
