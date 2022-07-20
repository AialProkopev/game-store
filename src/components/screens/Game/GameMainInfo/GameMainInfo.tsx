import Image from "next/image"
import React, { FC } from "react"
import styles from "./GameMainInfo.module.scss"

interface GameMainInfoProps {
  name: string
  description_raw: string
  background_image: string
}

export const GameMainInfo: FC<GameMainInfoProps> = ({
  name,
  description_raw,
  background_image,
}) => {
  return (
    <main className={styles.description}>
      <h1 className={styles.title}>{name}</h1>
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
      <div className={styles.button}>
        <button className={styles.button__add}>Add to cart</button>
        <button className={styles.button__fav}>Add to wishlist</button>
      </div>
    </main>
  )
}
