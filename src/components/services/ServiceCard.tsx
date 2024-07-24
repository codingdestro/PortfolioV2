import React, { useRef } from "react"
import { serviceInterface } from "../../data/services"
import { useView } from "../../hooks/useView"

const ServiceCard = ({ name, price, features }: serviceInterface) => {
  const carRef = useRef<HTMLDivElement>(null)
  const { isVisible } = useView(carRef)
  return (
    <div
      ref={carRef}
      className={`flex flex-col opacity-0 items-center py-10 justify-between border rounded-lg w-[18rem] min-h-[25rem] shadow-lg ${isVisible && "animate-fadezoomin-5"}`}
    >
      <div className="flex flex-col gap-y-5 items-center">
        <div className="font-georgia font-bold text-xl capitalize">{name}</div>

        <p className="font-georgia font-semibold text-xl capitalize ">
          {price}
        </p>
      </div>
      <ul className="flex flex-col gap-1 mb-10 items-start text-slg font-[500] font-poppins list-disc">
        {features.map((feat: string, idx: number) => (
          <li key={idx}>{feat}</li>
        ))}
      </ul>
      <button className="bg-primary w-36 py-2 text-white font-poppins text-sm active:bg-white active:text-primary transition-colors duration-150 border border-primary">
        hire me
      </button>
    </div>
  )
}

export default ServiceCard
