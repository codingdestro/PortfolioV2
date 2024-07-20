import { useState } from "react"
import sections from "../data/sections"

const HamburgerMenu = () => {
  const [show, setShow] = useState(false)

  const toggleShow = () => setShow((prev) => !prev)

  return (
    <div className="md:hidden">
      <button
        className="absolute z-20 top-1 right-2 font-poppins border border-primary py-2 px-4 text-white rounded-md cursor-pointer bg-white outline-none"
        onClick={toggleShow}
      >
        <img src={`/assets/menu.png`} width={20} height={3} />
      </button>
      <div
        className={`${show ? "fixed" : "hidden"} animate-fadezoomin w-full md:hidden h-screen left-0 top-0 flex items-center justify-center bg-primary `}
      >
        <div className={`flex-col gap-5 flex invert`}>
          {sections.map((section: string, idx: number) => (
            <div
              key={idx}
              className="border active:bg-primary active:text-white border-primary flex justify-center text-center rounded-md"
            >
              <a
                href={"#" + section}
                onClick={toggleShow}
                className="capitalize flex-1 px-2 py-1"
              >
                {section}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu
