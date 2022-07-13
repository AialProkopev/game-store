import Image from "next/image"
import React, { FC } from "react"
import { Game } from "src/types/Game.types"
import styles from "./GameItem.module.scss"

export const GameItem: FC<{ game: Game }> = ({ game }) => {
  return (
    <div className={styles.wrapper}>
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
  )
}
