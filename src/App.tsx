import { RouterProvider } from "react-router-dom"
import { Suspense } from "react"

import { Loader } from "./components/loader/Loader"

import { router } from "./routes/routes"
import { getUserFromLS } from "./utils/localStorage"
import { useAppDispatch } from "./hooks/useAppDispatch"
import { setUser } from "./store/authSlice"

function App() {
  const dispatch = useAppDispatch()
  const user = getUserFromLS()
  if (user) {
    dispatch(setUser(user))
  }
  // TODO: чутье подсказывает, что доставать юзера из ЛС нужно по-другому, но пока так

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
