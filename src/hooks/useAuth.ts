import { useAppSelector } from "./useAppSelector"

export const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user)

  if (!user) {
    return false
  }

  return user
}
