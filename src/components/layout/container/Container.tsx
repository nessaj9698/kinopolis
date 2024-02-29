import s from "./Container.module.css"

type Props = {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: Props) {
  return <div className={`${s.container} ${className}`}>{children}</div>
}
