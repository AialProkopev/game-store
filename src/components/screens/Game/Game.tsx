import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Carousel } from "./Carousel/Carousel"
import { useGetGameQuery } from "src/services/rawg.api"
import { GameType } from "src/types/Game.type"
import styles from "./Game.module.scss"
import { GameDetails } from "./GameDetails/GameDetails"
import { GameMainInfo } from "./GameMainInfo/GameMainInfo"
import Transition from "src/components/Transition/Transition"
import getPrice from "src/utils/getPrice/getPrice"

export const Game = () => {
  const {
    query: { id },
  } = useRouter()

  const { data } = useGetGameQuery({
    id: Number(id),
  })
  const [game, setGame] = useState<GameType | null>(null)

  useEffect(() => {
    if (data) {
      const price = getPrice(data)
      setGame({ ...data, price })
    }
  }, [data])

  console.log(game)

  return (
    game && (
      <Transition direction="left">
        <div className={styles.wrapper}>
          <Carousel id={game.id} />
          <GameDetails
            name={game.name}
            developers={game.developers}
            publishers={game.publishers}
            platforms={game.parent_platforms}
            release={game.released}
          />
          <GameMainInfo
            description_raw={game.description_raw}
            background_image={game.background_image}
            price={game.price}
          />
        </div>
      </Transition>
    )
  )
}
