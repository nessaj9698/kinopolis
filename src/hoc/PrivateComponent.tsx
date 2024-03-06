import { Navigate } from "react-router-dom"

import { ReactElement } from "react"

import { useAppSelector, isAuthSelector } from "../hooks/useAppSelector"

interface Props {
  children: ReactElement
}

export const PrivateComponent = ({ children }: Props) => {
  const isAuth = useAppSelector(isAuthSelector)
  if (!isAuth) {
    return <Navigate to={"/signin"} />
  }

  return <>{children}</>
}
