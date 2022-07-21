import React, { useState, useEffect } from "react"
import { GameType } from "src/types/Game.type"
import styles from "./GameCard.module.scss"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

export const GameCard = ({ data }: { data: GameType }) => {
  return (
    <Link href={data ? `game/${data.id}` : ""}>
      <motion.div whileHover={{ scale: 1.02 }} className={styles.wrapper}>
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
