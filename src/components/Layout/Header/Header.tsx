import React from "react"
import styles from "./Header.module.scss"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        GameStore / <span>Discovery</span>
      </div>
    </header>
  )
}
