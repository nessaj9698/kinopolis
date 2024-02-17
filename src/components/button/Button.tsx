import React from "react"

import s from "./Button.module.css"

interface Props {
  btnText: string
  handleClick: () => void
}

export const Button: React.FC<Props> = ({ btnText, handleClick }) => {
  return (
    <button className={s.buttonElement} onClick={handleClick}>
      {btnText}
    </button>
  )
}
