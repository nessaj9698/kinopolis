import { ChangeEvent } from "react"

import s from "./Input.module.css"

interface Props {
  value: string
  handleChange: (value: string) => void
  placeholder?: string
}

export const Input = ({ value, handleChange, placeholder = "" }: Props) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value)
  }

  return (
    <input
      className={s.inputElement}
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  )
}
