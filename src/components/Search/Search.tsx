import React, { ChangeEvent, FC, useEffect, useState } from "react"
import styles from "./Search.module.scss"
import { SearchList } from "./SearchList/SearchList"
import { Search as SearchLogo } from "@styled-icons/bootstrap/Search"

export const Search: FC = () => {
  const [value, setValue] = useState<string>("")
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    value ? setIsActive(true) : setIsActive(false)
  }, [value])

  const handleErase = () => {
    setValue("")
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <SearchLogo height={18} width={18} />
        <input
          type="search"
          onChange={handleChange}
          value={value}
          placeholder="Search"
        />
        {isActive && <span onClick={handleErase}>×</span>}
      </div>
      {isActive && <SearchList value={value} />}
    </div>
  )
}
