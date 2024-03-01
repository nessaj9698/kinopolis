import { User } from "../types/User"

export const saveUserToLS = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user))
}

export const removeUserFromLS = () => {
  localStorage.removeItem("user")
}

export const getUserFromLS = () => {
  const user = localStorage.getItem("user")
  if (user) {
    return JSON.parse(user)
  }
  return null
}
