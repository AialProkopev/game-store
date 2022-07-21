import React from "react"
import styles from "./Cart.module.scss"
import { useAppSelector } from "src/store/hooks"
import { RootState } from "src/store/store"
import { CartItem } from "./CartItem/CartItem"

export const Cart = () => {
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart)
  return (
    <div className={styles.wrapper}>
      {cart.length > 0 ? (
        <div className={styles.cart}>
          {cart.map((item) => (
            <CartItem key={item.id} game={item} />
          ))}
        </div>
      ) : (
        "Empty cart"
      )}
    </div>
  )
}
