import Image from "next/image"
import React, { FC, useEffect, useState } from "react"
import { useGetScreenshotsQuery } from "src/services/rawg.api"
import { ScreenshotType } from "src/types/Screenshot.type"
import styles from "./Carousel.module.scss"

interface CarouselPropsType {
  id: number
}

export const Carousel: FC<CarouselPropsType> = ({ id }) => {
  const [screenShots, setScreenshots] = useState<ScreenshotType[] | null>(null)
  const [index, setIndex] = useState(0)
  const [activeScreenshot, setActiveScreenshot] =
    useState<ScreenshotType | null>(null)
  const { data } = useGetScreenshotsQuery({
    id: id,
  })

  useEffect(() => {
    if (data) {
      setScreenshots(data.results)
      setActiveScreenshot(data.results[index])
    }
  }, [data, index])
  console.log(screenShots)
  const handleChangeIndex = (screenShots: ScreenshotType[]) => {
    if (index < screenShots.length - 1) {
      setIndex(index + 1)
    } else setIndex(0)
  }

  return (
    screenShots &&
    activeScreenshot && (
      <div className={styles.wrapper}>
        <button
          onClick={() => {
            handleChangeIndex(screenShots)
          }}
        >
          next
        </button>
        <div className={styles.bigItem}>
          <Image
            src={activeScreenshot.image}
            width={activeScreenshot.width}
            height={activeScreenshot.height}
            alt="bigscreenshot"
          />
        </div>
        <div className={styles.carousel}>
          {screenShots.map((item) => (
            <div
              key={item.id}
              className={
                item.id == activeScreenshot.id
                  ? `${styles.imageWrapper_sel}`
                  : `${styles.imageWrapper}`
              }
            >
              <Image
                width={item.width}
                height={item.height}
                src={item.image}
                alt="screenshot"
              />
            </div>
          ))}
        </div>
      </div>
    )
  )
}
