import s from "./Loader.module.css"

export const Loader = () => {
  return (
    <svg className={s.loader} viewBox="0 0 50 50">
      <circle
        className={s.loaderCircle}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      ></circle>
    </svg>
  )
}
