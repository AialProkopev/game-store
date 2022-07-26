import Image from "next/image"
import Link from "next/link"
import React, { FC } from "react"
import { GameType } from "src/types/Game.type"
import styles from "./GameItem.module.scss"

export const GameItem: FC<{ game: GameType }> = ({ game }) => {
  return (
    <Link href={`/game/${game.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.front}>
          <h3>{game.name}</h3>
          <div className={styles.image}>
            {game.background_image ? (
              <Image
                src={game.background_image}
                layout="fill"
                alt={game.name}
                objectFit="cover"
              />
            ) : (
              "no image"
            )}
          </div>
        </div>
        <div className={styles.back}>
          <div className={styles.box}>
            <h4>{game.rating}</h4>
            <span>rating</span>
          </div>
          <div className={styles.box}>
            <h4>{game.metacritic}</h4>
            <span>metacritic</span>
          </div>
          <div className={styles.box}>
            {game.genres.map((item) => (
              <span key={item.name}>{item.name}</span>
            ))}
          </div>
          <div className={styles.box}>
            {game.parent_platforms.map((item) => (
              <span key={item.platform.name}>{item.platform.name}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
