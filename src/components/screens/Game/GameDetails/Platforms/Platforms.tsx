import React, { FC } from "react"
import styles from "./Platforms.module.scss"
import { LogoXbox } from "@styled-icons/ionicons-solid/LogoXbox"
import { Playstation } from "@styled-icons/simple-icons/Playstation"
import { LogoWindows } from "@styled-icons/ionicons-solid/LogoWindows"

interface PlatformsPropsType {
  platforms: Array<{ platform: { name: string; id: number } }>
}

const logoSize = 20

export const Platforms: FC<PlatformsPropsType> = ({ platforms }) => {
  return (
    <div className={styles.platforms}>
      <h6>Platforms</h6>
      <div className={styles.platforms__list}>
        {platforms.map((item) => {
          if (item.platform.name === "PC")
            return (
              <div key={item.platform.id}>
                <LogoWindows height={logoSize} />
              </div>
            )
          if (item.platform.name === "PlayStation")
            return (
              <div key={item.platform.id}>
                <Playstation height={logoSize} />
              </div>
            )
          if (item.platform.name === "Xbox")
            return (
              <div key={item.platform.id}>
                <LogoXbox height={logoSize} />
              </div>
            )
        })}
      </div>
    </div>
  )
}
