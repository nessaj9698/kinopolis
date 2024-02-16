import React, { ChangeEvent } from "react"

interface InputProps {
  value: string
  handleChange: (value: string) => void
  placeholder?: string
}

// Компонент Input
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
      type="text"
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  )
}
