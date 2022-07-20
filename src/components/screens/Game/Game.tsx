import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Carousel } from "src/components/Carousel/Carousel"
import { useGetGameQuery } from "src/services/rawg.api"
import { GameType } from "src/types/Game.type"
import styles from "./Game.module.scss"
import { GameDetails } from "./GameDetails/GameDetails"
import { GameMainInfo } from "./GameMainInfo/GameMainInfo"

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
        <GameDetails
          developers={game.developers}
          publishers={game.publishers}
        />
        <GameMainInfo
          name={game.name}
          description_raw={game.description_raw}
          background_image={game.background_image}
        />
      </div>
    )
  )
}
