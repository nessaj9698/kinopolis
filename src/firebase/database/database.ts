import { getDatabase, ref, get, set, child } from "firebase/database"

import { app } from "../index"

export const db = getDatabase(app)

const getUserRef = (userId: string | number) => {
  return ref(db, "users/" + userId)
}

export const setUserDataToDB = (
  userId: string | number,
  entity: "likedMovies" | "history",
  data: string | number,
) => {
  set(child(getUserRef(userId), `${entity}/${data}`), true)
}

export const deleteUserDataFromDB = (
  userId: string | number,
  entity: "likedMovies" | "history",
  data: string | number,
) => {
  set(child(getUserRef(userId), `${entity}/${data}`), null)
}

export const getUserDataFromDB = async (userId: string | number) => {
  const resolve = await get(getUserRef(userId))
  const result = resolve.val()
  return result
}
