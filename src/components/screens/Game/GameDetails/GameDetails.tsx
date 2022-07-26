import React, { FC } from "react"
import styles from "./GameDetails.module.scss"
import { Platforms } from "./Platforms/Platforms"

interface GameDetailsProps {
  name: string
  platforms: Array<{ platform: { name: string; id: number } }>
  developers: Array<{ name: string }>
  publishers: Array<{ name: string }>
  release: string
}

export const GameDetails: FC<GameDetailsProps> = ({
  name,
  developers,
  publishers,
  platforms,
  release,
}) => {
  return (
    <>
      <main className={styles.wrapper}>
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.details}>
          <div className={styles.details__item}>
            <div>
              <h6>Creators</h6>
              {developers.map((item, index) => (
                <span key={`${item.name}_${index}`} className={styles.span}>
                  {item.name}
                </span>
              ))}
            </div>
            <div>
              <h6>Publishers</h6>
              {publishers.map((item, index) => (
                <span key={`${item.name}_${index}`} className={styles.span}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.release}>
            <h6>Release</h6>
            <span>{release}</span>
          </div>
          <Platforms platforms={platforms} />
        </div>
      </main>
    </>
  )
}
