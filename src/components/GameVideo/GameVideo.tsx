import React, { useEffect } from "react"
import styles from "./GameVideo.module.scss"

export const GameVideo = () => {
  return (
    <div>
      {
        <video
          autoPlay
          muted
          loop
          width={360}
          height={200}
          className={styles.player}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/iron-lodge-340602.appspot.com/o/Marvel's%20Spider-Man%20-%20E3%202016%20Trailer%20_%20PS4.mp4?alt=media&token=7efb226d-f92b-4092-88cd-f891e1999b15"
            type="video/mp4"
          />
        </video>
      }
    </div>
  )
}
