import React, { FC, useState } from "react"
import styles from "./Genres.module.scss"

interface GenresPropsType {
  handleChangeGenre: (genre: string) => void
  activeGenre: string
}

export const Genres: FC<GenresPropsType> = ({
  handleChangeGenre,
  activeGenre,
}) => {
  return (
    <div className={styles.genres}>
      <button
        className={activeGenre === "" ? styles.activeGenre : ""}
        onClick={() => {
          handleChangeGenre("")
        }}
      >
        All
      </button>
      <button
        className={activeGenre === "adventure" ? styles.activeGenre : ""}
        onClick={() => {
          handleChangeGenre("adventure")
        }}
      >
        Adventure
      </button>
      <button
        className={activeGenre === "action" ? styles.activeGenre : ""}
        onClick={() => {
          handleChangeGenre("action")
        }}
      >
        Action
      </button>
      <button
        className={
          activeGenre === "role-playing-games-rpg" ? styles.activeGenre : ""
        }
        onClick={() => {
          handleChangeGenre("role-playing-games-rpg")
        }}
      >
        RPG
      </button>
      <button
        className={activeGenre === "indie" ? styles.activeGenre : ""}
        onClick={() => {
          handleChangeGenre("indie")
        }}
      >
        Indie
      </button>
      <button
        className={activeGenre === "simulation" ? styles.activeGenre : ""}
        onClick={() => {
          handleChangeGenre("simulation")
        }}
      >
        Simulation
      </button>
      <button
        className={activeGenre === "arcade" ? styles.activeGenre : ""}
        onClick={() => {
          handleChangeGenre("arcade")
        }}
      >
        Arcade
      </button>
      <button
        className={activeGenre === "sports" ? styles.activeGenre : ""}
        onClick={() => {
          handleChangeGenre("sports")
        }}
      >
        Sports
      </button>
    </div>
  )
}
