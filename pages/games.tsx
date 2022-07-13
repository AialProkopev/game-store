import { GameCard } from "src/components/GameCard/GameCard"
import type { NextPage } from "next"
import React, { DOMElement, useEffect, useState } from "react"
import {
  useGetGameListQuery,
  useLazyGetGenresQuery,
} from "src/services/rawg.api"
import styles from "src/styles/pages/Games.module.scss"
import { Game } from "src/types/Game.types"

const Games: NextPage = () => {
  const [games, setGames] = useState<Game[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [activeGenre, setActiveGenre] = useState<string>("")
  const { data, isLoading, error } = useGetGameListQuery({
    page: currentPage,
    pageSize: 40,
    genre: activeGenre ? activeGenre : "",
  })
  const [trigger, results] = useLazyGetGenresQuery()

  console.log(results)

  useEffect(() => {
    if (data && !isLoading) setGames(data.results)
  }, [data, isLoading])

  const handleChangeGenre = (genre: string) => {
    setActiveGenre(genre)
  }
  console.log(data)

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.genres}>
          <button
            className={activeGenre === "adventure" ? styles.activeGenre : ""}
            onClick={() => {
              handleChangeGenre("adventure")
            }}
          >
            Adventure
          </button>
          <button
            className={activeGenre === "action" ? styles.activeGenre : ""}
            onClick={() => {
              handleChangeGenre("action")
            }}
          >
            Action
          </button>
          <button
            className={
              activeGenre === "role-playing-games-rpg" ? styles.activeGenre : ""
            }
            onClick={() => {
              handleChangeGenre("role-playing-games-rpg")
            }}
          >
            RPG
          </button>
          <button
            className={activeGenre === "indie" ? styles.activeGenre : ""}
            onClick={() => {
              handleChangeGenre("indie")
            }}
          >
            Indie
          </button>
        </div>
        <div className={styles.grid} id="grid">
          {games &&
            games.map((item: Game) => <GameCard key={item.id} data={item} />)}
        </div>
        <div className={styles.showmore}>
          <button
            onClick={() => {
              setCurrentPage(currentPage + 1)
            }}
          >
            Next Page
          </button>
        </div>
      </main>
    </div>
  )
}
export default Games