import React, { ChangeEvent, FC, useEffect, useState } from "react"
import styles from "./Search.module.scss"
import { SearchList } from "./SearchList/SearchList"
import { Search as SearchLogo } from "@styled-icons/bootstrap/Search"
import { useRouter } from "next/router"

interface searchPropsType {
  burger: boolean
}

export const Search: FC<searchPropsType> = ({ burger }) => {
  const [value, setValue] = useState<string>("")
  const [isActive, setIsActive] = useState<boolean>(false)
  const router = useRouter()
  const currentRoute = router.pathname

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  useEffect(() => {
    value ? setIsActive(true) : setIsActive(false)
  }, [value])

  useEffect(() => {
    setValue("")
  }, [currentRoute])

  const handleErase = () => {
    setValue("")
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        {burger ? null : <SearchLogo height={18} width={18} />}
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
