"use client"
import Navbar from "./Navbar"
import { ReactNode, useRef, useState } from "react"
const Main = ({ children }: { children: ReactNode }) => {
  const [isDark, toggleDark] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  return (
    <div className={isDark ? "dark" : ""} ref={mainRef}>
      <Navbar obj={mainRef} />
      {children}
    </div>
  )
}

export default Main
