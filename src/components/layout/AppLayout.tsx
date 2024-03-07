import { Outlet } from "react-router-dom"
import { Suspense } from "react"

import { Toaster } from "sonner"

import { Loader } from "../loader/Loader"

import { Header } from "./header/Header"
import { Footer } from "./footer/Footer"

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Toaster expand={true} richColors />
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}
