import Image from "next/image"
import React, { FC } from "react"
import { GameType } from "src/types/Game.type"
import styles from "./GameItem.module.scss"

export const GameItem: FC<{ game: GameType }> = ({ game }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.front}>
        <div className={styles.image}>
          <Image
            src={game.background_image}
            layout="fill"
            alt="game-image"
            objectFit="cover"
          />
        </div>
        <h3>{game.name}</h3>
      </div>
      <div className={styles.back}>Back</div>
    </div>
  )
}
