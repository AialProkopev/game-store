import React, { useState, useEffect } from "react"
import { GameType } from "src/types/Game.type"
import styles from "./GameCard.module.scss"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export const GameCard = ({ data }: { data: GameType }) => {
  const [opacity, setOpacity] = useState<number>(0)
  const [menuVisible, setMenuVisible] = useState(false)

  const variants = {
    initial: {
      opacity: opacity,
    },
    enter: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.6 },
    },
  }

  useEffect(() => {
    setOpacity(0)
  }, [])

  return (
    <Link href={data ? `game/${data.id}` : ""}>
      <motion.div
        animate="enter"
        exit="exit"
        initial="initial"
        variants={variants}
        whileHover={{ scale: 1.02 }}
        className={styles.wrapper}
        onHoverStart={() => {
          setMenuVisible(true)
        }}
        onHoverEnd={() => {
          setMenuVisible(false)
        }}
      >
        <div className={styles.image}>
          <Image
            src={data.background_image}
            layout="fill"
            alt="game-image"
            objectFit="cover"
            quality={50}
            priority
          />
          <div className={styles.blackblur}></div>
        </div>
        <div className={styles.menu}>
          <div className={styles.lower_menu}>{data.name}</div>
        </div>
      </motion.div>
    </Link>
  )
}
