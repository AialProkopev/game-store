import Image from "next/image"
import React, { FC } from "react"
import styles from "./GameMainInfo.module.scss"

interface GameMainInfoProps {
  description_raw: string
  background_image: string
  price: number
}

export const GameMainInfo: FC<GameMainInfoProps> = ({
  description_raw,
  background_image,
  price,
}) => {
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
        <button className={styles.button__add}>Add to cart</button>
        <button className={styles.button__fav}>Add to wishlist</button>
      </div>
    </main>
  )
}
