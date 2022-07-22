import Link from "next/link"
import React from "react"
import { useAppSelector } from "src/store/hooks"
import { RootState } from "src/store/store"
import styles from "./HeaderCart.module.scss"

export const HeaderCart = () => {
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart)
  return (
    <Link href="/cart">
      <div className={styles.cart}>Cart ({cart.length})</div>
    </Link>
  )
}
