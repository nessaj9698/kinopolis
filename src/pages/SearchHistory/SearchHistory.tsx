import { Link } from "react-router-dom"
import { useState } from "react"

import {
  getDataFromLS,
  removeItemFromHistoryLS,
} from "../../utils/localStorage"
import { Container } from "../../components/layout/container/Container"
import { deleteUserDataFromDB } from "../../firebase/database/database"
import { useAppSelector, userSelector } from "../../hooks/useAppSelector"

import s from "./SearchHistory.module.css"

const SearchHistory = () => {
  const [data, setData] = useState<string[]>(getDataFromLS("history"))
  const user = useAppSelector(userSelector)

  const removeFromHistory = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    itemToRemove: string,
  ) => {
    e.preventDefault()
    const updatedData = data.filter((item: string) => item !== itemToRemove)
    setData(updatedData)
    removeItemFromHistoryLS(itemToRemove)

    if (user?.uid) {
      deleteUserDataFromDB(user?.uid, "history", itemToRemove)
    }
  }
  return (
    <Container className={s.searchHistoryWrapper}>
      {data.length > 0 ? (
        data.map((item: string) => (
          <Link key={item} to={`/search/${item}`}>
            {item}
            <span onClick={(e) => removeFromHistory(e, item)}>X</span>
          </Link>
        ))
      ) : (
        <h1>История поиска отсутствует</h1>
      )}
    </Container>
  )
}

export default SearchHistory
