import PropTypes from "prop-types"

import s from "./Container.module.css"

// @ts-expect-error covered by prop types
export function Container({ children, className }) {
  return <div className={`${s.container} ${className}`}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
