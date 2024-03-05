import { Navigate } from "react-router-dom"

import { ReactElement } from "react"

import { useAppSelector } from "../hooks/useAppSelector"

interface Props {
  children: ReactElement
}

export const PrivateComponent = ({ children }: Props) => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  if (!isAuth) {
    return <Navigate to={"/login"} />
  }

  return <>{children}</>
}
