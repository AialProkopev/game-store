import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import styles from "./MainSlider.module.scss"
import { GameType } from "src/types/Game.type"
import Image from "next/image"

export const MainSlider = ({
  data,
  duration,
}: {
  data: GameType[]
  duration: number
}) => {
  const [games, setGames] = useState<GameType[]>(data)

  useEffect(() => {
    setGames(data)
  }, [data])

  return (
    <div className={styles.slider}>
      {games.map((item, index: number) => (
        <motion.div
          key={`${item.name}`}
          layoutId={`${item.name}`}
          whileInView={{ opacity: 1 }}
          className={index == 0 ? `${styles.bigItem}` : `${styles.item}`}
          animate={{ borderRadius: "15px" }}
          transition={{
            layout: { type: "spring", stiffness: 30 },
          }}
        >
          {item.background_image ? (
            <Image
              src={item.background_image}
              layout="fill"
              objectFit="cover"
              alt="bck"
              priority
            />
          ) : null}
          <div className={styles.overlay}>
            <AnimatePresence>
              <motion.h1
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className={
                  index == 0 ? `${styles.bigTitle}` : `${styles.title}`
                }
              >
                {item.name}
              </motion.h1>
              {index == 0 && (
                <motion.div
                  key={`progress-${item.id}`}
                  className={styles.progressBar}
                  initial={{ width: 0 }}
                  animate={{
                    width: "100%",
                    transition: { duration: duration },
                  }}
                  exit={{ opacity: 0 }}
                />
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
