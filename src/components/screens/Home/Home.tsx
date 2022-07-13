import React from "react"
import Head from "next/head"
import {
  useGetGameListQuery,
  useGetRandom4GamesQuery,
  useLazyGetGameQuery,
} from "src/services/rawg.api"
import styles from "./Home.module.scss"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Game } from "src/types/Game.types"
import { GameCard } from "src/components/GameCard/GameCard"
import { Loading } from "src/components/Loading"
import { MainSlider } from "src/components/MainSlider/MainSlider"
import { GameVideo } from "src/components/GameVideo/GameVideo"
import { motion } from "framer-motion"
import { cycleArray } from "src/utils/cycleArray/cycleArray"
import { BestGames } from "src/components/BestGames/BestGames"

const duration = 12

export const Home = () => {
  const { data, isLoading, error } = useGetRandom4GamesQuery({})
  const [games, setGames] = useState<Game[] | null>(null)

  useEffect(() => {
    if (data && !isLoading) {
      setGames(data.results)
    }
  }, [data, isLoading])

  useEffect(() => {
    let interval: NodeJS.Timer
    interval = setInterval(() => {
      setGames((games) => cycleArray(games as Game[]) as Game[])
    }, duration * 1000)
    return () => clearInterval(interval)
  }, [games])

  return (
    <div className={styles.container}>
      {games ? (
        <>
          <main className={styles.main}>
            <MainSlider data={games} duration={duration} />
          </main>
          <footer className={styles.footer}>
            <BestGames />
          </footer>
        </>
      ) : null}
    </div>
  )
}
