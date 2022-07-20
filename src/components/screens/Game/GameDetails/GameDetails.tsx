import React, { FC } from "react"
import styles from "./GameDetails.module.scss"

interface GameDetailsProps {
  developers: Array<{ name: string }>
  publishers: Array<{ name: string }>
}

export const GameDetails: FC<GameDetailsProps> = ({
  developers,
  publishers,
}) => {
  return (
    <>
      <main className={styles.footer}>
        <div className={styles.footer__item}>
          <div className={styles.footer__creator}>
            <span>Creators : </span>
            {developers.map((item, index) => (
              <span key={`${item.name}_${index}`}>{item.name}</span>
            ))}
          </div>
          <div className={styles.publishers}>
            <span>Publishers : </span>
            {publishers.map((item, index) => (
              <span key={`${item.name}_${index}`}>{item.name}</span>
            ))}
          </div>
        </div>
        <div className={styles.footer__item}>2</div>
      </main>
    </>
  )
}
