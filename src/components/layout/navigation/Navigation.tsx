import { useAppSelector } from "../../../hooks/useAppSelector"

import { UserNavigation } from "./userNavigation/UserNavigation"
import { GuestNavigation } from "./guestNavigation/GuestNavigation"

export const NavigationLinks = () => {
  const isAuth = useAppSelector((state) => state.auth.isAuth)
  return <>{isAuth ? <UserNavigation /> : <GuestNavigation />}</>
}
