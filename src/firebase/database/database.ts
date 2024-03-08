import { getDatabase, ref, get, set, child } from "firebase/database"
import { DatabaseReference } from "firebase/database"

import { DataFromDB } from "../../types/Database"

import { app } from "../index"

export const db = getDatabase(app)

const getUserRef = (userId: string | number): DatabaseReference => {
  return ref(db, "users/" + userId)
}

export const setUserDataToDB = (
  userId: string | number,
  entity: "likedMovies" | "history",
  data: string | number,
) => {
  if (userId) {
    set(child(getUserRef(userId), `${entity}/${data}`), true)
  }
}

export const deleteUserDataFromDB = (
  userId: string | number,
  entity: "likedMovies" | "history",
  data: string | number,
) => {
  set(child(getUserRef(userId), `${entity}/${data}`), null)
}

export const getUserDataFromDB = async (
  userId: string | number,
): Promise<DataFromDB> => {
  const resolve = await get(getUserRef(userId))
  const result = resolve.val()
  return result
}
