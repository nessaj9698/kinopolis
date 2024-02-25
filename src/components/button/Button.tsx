import s from "./Button.module.css"

interface Props {
  type?: "submit" | "reset" | "button" | undefined
  btnText: string
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({ type, btnText, handleClick }: Props) => {
  return (
    <button
      className={s.buttonElement}
      onClick={handleClick}
      type={type ? type : undefined}
    >
      {btnText}
    </button>
  )
}
