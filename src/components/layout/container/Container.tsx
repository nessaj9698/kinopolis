import { PropsWithChildren } from "react"

import s from "./Container.module.css"

export function Container({ children }: PropsWithChildren) {
  return <div className={s.container}>{children}</div>
}
