import { User } from "../types/User"
import { DataFromDB } from "../types/Database"

export const saveUserToLS = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user))
}

export const removeUserFromLS = () => {
  localStorage.removeItem("user")
  localStorage.removeItem("likedMovies")
}

export const getUserFromLS = () => {
  const user = localStorage.getItem("user")
  if (user) {
    return JSON.parse(user)
  }
  return null
}

export const toggleFavouriteMovieLS = (movieId: string) => {
  const data = localStorage.getItem("likedMovies")
  let dataArray

  if (data) {
    dataArray = JSON.parse(data)

    if (dataArray) {
      const isMovieIdInArray = dataArray.includes(movieId)
      const updatedData = isMovieIdInArray
        ? dataArray.filter((id: string) => id !== movieId)
        : [...dataArray, movieId]
      const dataToString = JSON.stringify(updatedData)
      localStorage.setItem("likedMovies", dataToString)
    }
  } else {
    dataArray = [movieId]
    const dataToString = JSON.stringify(dataArray)
    localStorage.setItem("likedMovies", dataToString)
  }
}

export const saveDataToLS = (obj: DataFromDB) => {
  for (const category in obj) {
    if (Object.hasOwnProperty.call(obj, category)) {
      const keysArray = Object.keys(obj[category])
      localStorage.setItem(category, JSON.stringify(keysArray))
    }
  }
}
