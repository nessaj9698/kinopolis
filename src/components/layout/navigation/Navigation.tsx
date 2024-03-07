import { useAppSelector } from "../../../hooks/useAppSelector"
import { isAuthSelector } from "../../../hooks/useAppSelector"

import { UserNavigation } from "./userNavigation/UserNavigation"
import { GuestNavigation } from "./guestNavigation/GuestNavigation"

export const NavigationLinks = () => {
  const isAuth = useAppSelector(isAuthSelector)
  return <>{isAuth ? <UserNavigation /> : <GuestNavigation />}</>
}
