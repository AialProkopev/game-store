import React from "react"
import { useGetRandom4GamesQuery } from "src/services/rawg.api"
import styles from "./Home.module.scss"
import { useEffect, useState } from "react"
import { GameType } from "src/types/Game.type"
import { MainSlider } from "./MainSlider/MainSlider"
import { cycleArray } from "src/utils/cycleArray/cycleArray"
import { BestGames } from "./BestGames/BestGames"
import Transition from "src/components/Transition/Transition"

const duration = 12

export const Home = () => {
  const { data, isLoading } = useGetRandom4GamesQuery({})
  const [games, setGames] = useState<GameType[] | null>(null)

  useEffect(() => {
    if (data && !isLoading) {
      setGames(data.results)
    }
  }, [data, isLoading])

  useEffect(() => {
    let interval: NodeJS.Timer
    interval = setInterval(() => {
      setGames((games) => cycleArray(games as GameType[]) as GameType[])
    }, duration * 1000)
    return () => clearInterval(interval)
  }, [games])

  return (
    <Transition direction="left">
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
    </Transition>
  )
}
