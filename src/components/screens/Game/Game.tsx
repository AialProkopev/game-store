import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Carousel } from "src/components/Carousel/Carousel"
import { useGetGameQuery } from "src/services/rawg.api"
import { GameType } from "src/types/Game.type"

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

  return <>{game && <Carousel id={game.id} />}</>
}
