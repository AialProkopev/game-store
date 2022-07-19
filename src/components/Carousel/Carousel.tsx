/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import React, { FC, useEffect, useState } from "react"
import { useGetScreenshotsQuery } from "src/services/rawg.api"
import { ScreenshotType } from "src/types/Screenshot.type"
import styles from "./Carousel.module.scss"
import { motion, useAnimation } from "framer-motion"
import { ArrowBack, ArrowForward } from "@styled-icons/material-outlined"

interface CarouselPropsType {
  id: number
}

export const Carousel: FC<CarouselPropsType> = ({ id }) => {
  const [screenShots, setScreenshots] = useState<ScreenshotType[]>([])
  const [index, setIndex] = useState(0)
  const [activeScreenshot, setActiveScreenshot] =
    useState<ScreenshotType | null>(null)
  const { data } = useGetScreenshotsQuery({
    id: id,
  })

  const carouselControls = useAnimation()

  useEffect(() => {
    if (data) {
      setScreenshots(data.results)
      setActiveScreenshot(data.results[index])
    }
  }, [data, index])

  useEffect(() => {
    animateCarousel()
    // if (index >= screenShots.length) {
    //   setIndex(0)
    // } else if (index < 0) {
    //   setIndex(screenShots.length - 1)
    // }
  }, [index])

  const handleChangeIndex = (ch: string, index: number) => {
    switch (ch) {
      case "+": {
        if (index === screenShots.length - 1) return 0
        return index + 1
      }
      case "-": {
        if (index === 0) return screenShots.length - 1
        return index - 1
      }
    }
    return index
  }
  const animateCarousel = () => {
    carouselControls.start({ x: `${-index * 100}%` })
  }

  return (
    <>
      {screenShots && activeScreenshot && (
        <div className={styles.grid}>
          <div className={styles.controls}>
            <button
              onClick={() => {
                setIndex(handleChangeIndex("-", index))
              }}
            >
              <ArrowBack className={styles.arrow} height={36} />
            </button>
            <button
              onClick={() => {
                setIndex(handleChangeIndex("+", index))
              }}
            >
              <ArrowForward className={styles.arrow} height={36} />
            </button>
          </div>
          <motion.div className={styles.bigCarousel}>
            <motion.div
              className={styles.bigItem}
              initial={{ x: 0 }}
              animate={carouselControls}
              transition={{ duration: 0.6 }}
            >
              {screenShots.map((item) => (
                <div key={item.id} className={styles.bigImageWrapper}>
                  {/* <Image
                    layout="fill"
                    objectFit="cover"
                    // height={1600}
                    // width={700}
                    src={item.image}
                    alt="screenshot"
                    quality="4"
                    priority
                  /> */}
                  <img
                    src={item.image}
                    alt="image"
                    width="100%"
                    height="100%"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div className={styles.belt}>
            {screenShots.map((item) => (
              <div
                key={item.id}
                className={
                  item.id == activeScreenshot.id
                    ? `${styles.imageWrapper_sel}`
                    : `${styles.imageWrapper}`
                }
              >
                {/* <Image
                  layout="fill"
                  objectFit="cover"
                  src={item.image}
                  alt="screenshot"
                  quality="1"
                  priority
                /> */}
                <img src={item.image} alt="image" width="100%" height="100%" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}