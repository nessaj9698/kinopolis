import { User } from "../types/User"

import { useAppSelector, userSelector } from "./useAppSelector"

export const useAuth = (): User | boolean => {
  const user = useAppSelector(userSelector)

  if (user) {
    return user
  }

  return false
}
