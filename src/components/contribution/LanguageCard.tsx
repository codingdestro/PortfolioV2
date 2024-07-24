import LogoBox from "./LogoBox"
import { logos } from "../../data"
import { useView } from "../../hooks/useView"
import { useRef } from "react"
const LanguagesCard = () => {
  const divRef = useRef<HTMLDivElement>(null)
  const { isVisible } = useView(divRef)
  return (
    <div
      ref={divRef}
      className={`flex flex-col gap-2 opacity-0 ${isVisible && "animate-fadeslideup-5"}`}
    >
      <h3 className="font-poppins font-semibold capitalize text-sm md:text-md">
        most used tech
      </h3>
      <div className="border border-black rounded-md p-5 text-sm">
        <ul className="font-poppins font-[500] capitalize flex gap-2 flex-wrap">
          {logos.map((values, idx: number) => (
            <li key={idx} className="flex items-center gap-2">
              <LogoBox path={values.path} alt={values.name} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LanguagesCard
