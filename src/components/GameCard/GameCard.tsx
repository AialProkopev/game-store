import React, { useState, useEffect } from "react"
import { Game } from "src/types/Game.types"
import styles from "./GameCard.module.scss"
import Image from "next/image"
import { motion } from "framer-motion"

export const GameCard = ({ data }: { data: Game }) => {
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
        />
        <div className={styles.blackblur}></div>
      </div>
      {menuVisible ? (
        <div className={styles.hoverWrapper}>
          <button
            className={styles.btn}
            onClick={() => {
              console.log("clicked")
            }}
          >
            <span>Add to cart</span>
          </button>
        </div>
      ) : null}
      <div className={styles.menu}>
        <div className={styles.lower_menu}>{data.name}</div>
      </div>
    </motion.div>
  )
}
