import { useState } from "react"
import sections from "../data/sections"

import HamburgerMenu from "./HamburgerMenu"

const Navbar = () => {
  const [selectedSection, selectSection] = useState(0)

  const selectSectionHandler = (idx = 0) => selectSection(idx)

  return (
    <div className="fixed w-screen z-50 bg-white">
      <div className="flex justify-between items-center px-5 py-3 border border-b border-b-black">
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
          </ul>
        </div>
        <div className="hidden md:block font-poppins font-[500]">
          <button className="border px-3 py-1 m-0 rounded-md bg-ternary text-white hover:bg-white hover:text-black transition-colors duration-200 shadow-md">
            contact me
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
