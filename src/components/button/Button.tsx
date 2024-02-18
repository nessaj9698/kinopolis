import s from "./Button.module.css"

interface Props {
  btnText: string
  handleClick: () => void
}

export const Button = ({ btnText, handleClick }: Props) => {
  return (
    <button className={s.buttonElement} onClick={handleClick}>
      {btnText}
    </button>
  )
}
