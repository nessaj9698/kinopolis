import React, { ChangeEvent } from "react"

import s from "./Input.module.css"

interface InputProps {
  value: string
  handleChange: (value: string) => void
  placeholder?: string
}

export const Input: React.FC<InputProps> = ({
  value,
  handleChange,
  placeholder = "",
}) => {
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
