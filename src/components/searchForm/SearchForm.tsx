import { useState } from "react"

import { Input } from "../input/Input"
import { Button } from "../button/Button"
import { useDebounce } from "../../hooks/useDebounce"

import s from "./SearchForm.module.css"

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const handleChange = (query: string) => {
    setSearchQuery(query)
  }

  return (
    <div className={s.searchFormWrapper}>
      <Input handleChange={handleChange} placeholder="Введи название фильма" />
      <Button btnText="Искать" handleClick={() => false} />
    </div>
  )
}
