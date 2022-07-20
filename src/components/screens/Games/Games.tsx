import styles from "./Games.module.scss"
import { GameCard } from "src/components/GameCard/GameCard"
import React, { useEffect, useState } from "react"
import { useGetGameListQuery } from "src/services/rawg.api"
import { GameType } from "src/types/Game.type"
import { Genres } from "./Genres/Genres"

export const Games = () => {
  const [games, setGames] = useState<GameType[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [activeGenre, setActiveGenre] = useState<string>("")

  const { data, isLoading, error } = useGetGameListQuery({
    page: currentPage,
    pageSize: 40,
    genre: activeGenre ? activeGenre : "",
  })

  useEffect(() => {
    if (data && !isLoading) setGames(data.results)
  }, [data, isLoading])

  const handleChangeGenre = (genre: string) => {
    setActiveGenre(genre)
  }

  return (
    <div>
      <main className={styles.main}>
        <Genres
          handleChangeGenre={handleChangeGenre}
          activeGenre={activeGenre}
        />
        <div className={styles.grid} id="grid">
          {games &&
            games.map((item: GameType) => (
              <GameCard key={item.id} data={item} />
            ))}
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
