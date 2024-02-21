import { ChangeEvent } from "react"
import { useState } from "react"

import s from "./Input.module.css"

interface Props {
  value?: string
  handleChange: (e: string) => void
  placeholder?: string
}

export const Input = ({
  value = "",
  handleChange,
  placeholder = "",
}: Props) => {
  const [inputValue, setInputValue] = useState<string>("")

  const handleInputChange = (value: string) => {
    handleChange(value)
    setInputValue(value)
  }

  return (
    <input
      className={s.inputElement}
      type="text"
      value={value || inputValue}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleInputChange(e.target.value)
      }
      placeholder={placeholder}
    />
  )
}
