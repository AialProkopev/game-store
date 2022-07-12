import React, { FC, PropsWithChildren } from "react"
import { Header } from "./Header/Header"
import { AsideMenu } from "./AsideMenu/AsideMenu"
import styles from "./Layout.module.scss"

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <AsideMenu />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
