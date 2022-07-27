import { Search } from "src/components/Search/Search"
import React, { useCallback, useEffect, useState } from "react"
import styles from "./Header.module.scss"
import { HeaderMenu } from "../HeaderMenu/HeaderMenu"
import { HeaderCart } from "../HeaderCart/HeaderCart"
import { HeaderTitle } from "../HeaderTitle/HeaderTitle"
import { Menu } from "@styled-icons/ionicons-solid/Menu"
import Link from "next/link"

export const Header = () => {
  const [isBurger, setIsBurger] = useState(false)
  const [menu, setMenu] = useState(false)
  const [windowDimenion, detectHW] = useState<{
    winWidth: number
    winHeight: number
  }>({
    winWidth: 0,
    winHeight: 0,
  })

  useEffect(() => {
    detectHW({
      winHeight: window.innerHeight,
      winWidth: window.innerWidth,
    })
  }, [])
  useEffect(() => {
    window.addEventListener("resize", detectSize)
    return () => {
      window.removeEventListener("resize", detectSize)
    }
  }, [windowDimenion])

  useEffect(() => {
    window.innerWidth < 880 ? setIsBurger(true) : setIsBurger(false)
  }, [windowDimenion])

  const detectSize = useCallback(() => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }, [])
  const toggleMenu = () => {
    menu ? setMenu(false) : setMenu(true)
  }

  return (
    <header className={styles.header}>
      {!isBurger ? (
        <>
          <div className={styles.left}>
            <HeaderTitle />
            <Search burger={isBurger} />
            <HeaderMenu />
          </div>
          <HeaderCart />
        </>
      ) : (
        <>
          <HeaderTitle />
          <Menu height={32} className={styles.menuBtn} onClick={toggleMenu} />
          {menu && (
            <ul className={styles.menu}>
              <li className={styles.menu__item}>
                <Link href="/games">Games</Link>
              </li>
              <li className={styles.menu__item}>
                <HeaderCart />
              </li>
              <li className={styles.menu__item}>
                <Search burger={isBurger} />
              </li>
            </ul>
          )}
        </>
      )}
    </header>
  )
}
