import PropTypes from "prop-types"

import s from "./Loader.module.css"

// @ts-expect-error covered by prop types
export const Loader = ({ propsClasses }) => {
  return (
    <div className={s.loaderWrapper}>
      <svg className={`${s.loader} ${propsClasses}`} viewBox="0 0 50 50">
        <circle
          className={s.loaderCircle}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  )
}

Loader.propTypes = {
  propsClasses: PropTypes.string,
}
