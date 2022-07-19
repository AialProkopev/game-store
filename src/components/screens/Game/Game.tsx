import Image from "next/image"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Carousel } from "src/components/Carousel/Carousel"
import { useGetGameQuery } from "src/services/rawg.api"
import { GameType } from "src/types/Game.type"
import styles from "./Game.module.scss"
// import { Heart } from "@styled-icons/ionicons-solid/"
import { Heart } from "@styled-icons/bootstrap/Heart"

export const Game = () => {
  const {
    query: { id },
  } = useRouter()

  const { data } = useGetGameQuery({
    id: Number(id),
  })
  const [game, setGame] = useState<GameType | null>(null)

  useEffect(() => {
    data && setGame(data)
  }, [data])

  console.log(game)

  return (
    game && (
      <div className={styles.wrapper}>
        <Carousel id={game.id} />

        <main className={styles.description}>
          <h1 className={styles.title}>{game.name}</h1>
          <div className={styles.banner}>
            <Image
              src={game.background_image}
              layout="fill"
              objectFit="cover"
              alt="game-background-image"
            />
          </div>
          <div className={styles.info}>
            <h3 className={styles.info__title}>About</h3>
            <div className={styles.info__content}>{game.description_raw}</div>
          </div>
          <div className={styles.button}>
            <button className={styles.button__add}>Add to cart</button>
            <button className={styles.button__fav}>
              <Heart height={32} />
            </button>
          </div>
        </main>
      </div>
    )
  )
}
