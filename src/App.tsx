import { RouterProvider } from "react-router-dom"
import { Suspense } from "react"

import { Loader } from "./components/loader/Loader"

import { router } from "./routes/routes"

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
