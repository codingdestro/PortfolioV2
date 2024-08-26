"use client"
import { RefObject, useEffect, useState } from "react"
import sections from "../data/sections"

import HamburgerMenu from "./HamburgerMenu"
import ToggleThemeButton from "./ToggleThemeButton"
type Props = {
  obj: RefObject<HTMLDivElement>
}

const Navbar = ({ obj }: Props) => {
  const [selectedSection, selectSection] = useState(0)

  const selectSectionHandler = (idx = 0) => selectSection(idx)
  const [isDark, setDark] = useState(false)

  useEffect(() => {
    if (localStorage.theme === "dark") {
      obj.current?.classList.add("dark")
      setDark(true)
    } else {
      obj.current?.classList.remove("dark")
      setDark(false)
    }
  }, [])

  const toggleTheme = () => {
    let done = obj.current?.classList.toggle("dark")
    localStorage.setItem("theme", done ? "dark" : "")
    setDark(done!)
  }

  return (
    <div className="fixed w-screen z-50 bg-white dark:bg-black dark:text-white">
      <div className="flex justify-between items-center px-5 py-3 border-b border-b-black dark:border-b-white">
        <div className="font-georgia md:text-lg text-md capitalize font-semibold">
          <a href="/">codingdestro</a>
        </div>

        <div>
          <HamburgerMenu />
          <ul className="md:flex gap-3 items-center hidden text-sm font-[500]">
            {sections.map((section: string, idx: number) => (
              <li
                key={idx}
                className={`capitalize font-poppins tracking-wider hover:text-ternary ${idx == selectedSection && "text-ternary"}`}
              >
                <a
                  href={"#" + section}
                  onClick={() => selectSectionHandler(idx)}
                  className="px-2 py-1"
                >
                  {section}
                </a>
              </li>
            ))}

            <button onClick={toggleTheme}>
              <ToggleThemeButton dark={isDark} />
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
