import React, { FC, useEffect, useState } from "react"
import styles from "./SearchList.module.scss"
import { useGetGamesBySearchQuery } from "src/services/rawg.api"
import { GameType } from "src/types/Game.type"
import { motion } from "framer-motion"
import Link from "next/link"

interface SearchListPropsType {
  value: string
}
export const SearchList: FC<SearchListPropsType> = ({ value }) => {
  const { data, isLoading } = useGetGamesBySearchQuery({ search: value })
  const [list, setList] = useState<GameType[] | null>(null)

  useEffect(() => {
    if (data && !isLoading) setList(data.results)
  }, [data, isLoading])

  return (
    <div className={styles.wrapper}>
      {list && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 300, opacity: 1 }}
          transition={{ type: "spring", duration: 0.3, delay: 0.3 }}
        >
          {list.length === 0
            ? "no results"
            : list.map((item) => (
                <Link key={item.id} href={`game/${item.id}`}>
                  <li>{item.name}</li>
                </Link>
              ))}
        </motion.ul>
      )}
    </div>
  )
}
