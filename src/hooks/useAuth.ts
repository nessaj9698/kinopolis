import { useAppSelector, userSelector } from "./useAppSelector"

export const useAuth = () => {
  const user = useAppSelector(userSelector)

  if (user) {
    return user
  }

  return false
}
