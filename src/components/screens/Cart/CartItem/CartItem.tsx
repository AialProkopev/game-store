import Image from "next/image"
import React, { FC } from "react"
import { removeItemFromCart } from "src/store/actions"
import { useAppDispatch } from "src/store/hooks"
import { GameType } from "src/types/Game.type"
import styles from "./CartItem.module.scss"

interface CartItemPropsType {
  game: GameType
}

export const CartItem: FC<CartItemPropsType> = ({ game }) => {
  const dispatch = useAppDispatch()
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <h3 className={styles.title}>{game.name}</h3>
        <div className={styles.imageWrapper}>
          <Image
            alt={game.name}
            src={game.background_image}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </main>
      <div className={styles.controls}>
        <div className={styles.price}>{game.price} $</div>
        <div
          className={styles.remove}
          onClick={() => dispatch(removeItemFromCart(game.id))}
        >
          Remove
        </div>
      </div>
    </div>
  )
}
