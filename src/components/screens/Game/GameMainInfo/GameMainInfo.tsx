import Image from "next/image"
import React, { FC, useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "src/store/hooks"
import { addToCart } from "src/store/actions"
import styles from "./GameMainInfo.module.scss"
import { GameType } from "src/types/Game.type"
import { RootState } from "src/store/store"

interface GameMainInfoProps {
  description_raw: string
  background_image: string
  price: number
  game: GameType
}

export const GameMainInfo: FC<GameMainInfoProps> = ({
  description_raw,
  background_image,
  price,
  game,
}) => {
  const [added, setAdded] = useState<boolean>(false)
  const cart = useAppSelector((state: RootState) => state.cartReducer.cart)
  const dispatch = useAppDispatch()

  useEffect(() => {
    cart.find((item) => item.name === game.name)
      ? setAdded(true)
      : setAdded(false)
  }, [cart])

  return (
    <main className={styles.description}>
      <div className={styles.banner}>
        <Image
          src={background_image}
          layout="fill"
          objectFit="cover"
          alt="game-background-image"
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.info__title}>About</h3>
        <div className={styles.info__content}>{description_raw}</div>
      </div>
      <div className={styles.price}>
        <span>{price} $</span>
      </div>
      <div className={styles.button}>
        <button
          className={styles.button__add}
          onClick={() => dispatch(addToCart(game))}
        >
          {added ? "In cart" : "Add to cart"}
        </button>
      </div>
    </main>
  )
}
