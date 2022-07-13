import React, { FC, useEffect, useState } from "react"
import { useGetBestGamesQuery } from "src/services/rawg.api"
import { Game } from "src/types/Game.types"
import { GameItem } from "../GameItem/GameItem"
import styles from "./BestGames.module.scss"

const pageSize = 6

export const BestGames: FC = () => {
  const [bestGames, setBestGames] = useState<Game[] | null>(null)
  const { data, isLoading } = useGetBestGamesQuery({ pageSize: pageSize })
  console.log(bestGames)

  useEffect(() => {
    data && !isLoading && setBestGames(data.results)
  }, [data, isLoading])

  return (
    <div className={styles.wrapper}>
      <h2>Best Games</h2>
      <div className={styles.games}>
        {bestGames &&
          bestGames.map((item: Game) => <GameItem key={item.id} game={item} />)}
      </div>
    </div>
  )
}
