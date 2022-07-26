/* eslint-disable react-hooks/exhaustive-deps */
import styles from "./Games.module.scss"
import { GameCard } from "./GameCard/GameCard"
import React, { useCallback, useEffect, useState } from "react"
import { useGetGameListQuery } from "src/services/rawg.api"
import { GameType } from "src/types/Game.type"
import { Genres } from "./Genres/Genres"
import Transition from "src/components/Transition/Transition"

export const Games = () => {
  const [games, setGames] = useState<GameType[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [activeGenre, setActiveGenre] = useState<string>("")
  const [fetching, setFetching] = useState<boolean>(false)

  const { data, isLoading, error } = useGetGameListQuery({
    page: currentPage,
    pageSize: 20,
    genre: activeGenre ? activeGenre : "",
  })

  useEffect(() => {
    if (data && !isLoading) setGames([...games, ...data.results])
  }, [data, isLoading])

  useEffect(() => {
    document.addEventListener("scroll", onScroll, { passive: true })
    return () => document.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (activeGenre) {
      setGames([])
      setCurrentPage(1)
    }
  }, [activeGenre])

  useEffect(() => {
    if (fetching) {
      setCurrentPage(currentPage + 1)
      setFetching(false)
    }
  }, [fetching])

  const handleChangeGenre = (genre: string) => {
    setActiveGenre(genre)
  }

  const onScroll = useCallback((event: any) => {
    const { innerHeight } = window
    const { scrollHeight, scrollTop } = event.target.documentElement
    if (scrollHeight - (scrollTop + innerHeight) < 150) setFetching(true)
  }, [])

  console.log(currentPage)

  return (
    <Transition direction="left">
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
      </main>
    </Transition>
  )
}
