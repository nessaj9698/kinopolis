import s from "./Button.module.css"

interface Props {
  type?: "submit" | "reset" | "button" | undefined
  btnText: string
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  classes?: string
  disabled?: boolean
}

export const Button = ({
  type,
  btnText,
  handleClick,
  classes,
  disabled,
}: Props) => {
  return (
    <button
      className={`${s.buttonElement} ${classes}`}
      onClick={handleClick}
      type={type ? type : undefined}
      disabled={disabled}
    >
      {btnText}
    </button>
  )
}
