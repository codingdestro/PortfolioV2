import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { useView } from "../../hooks/useView"
import { useGetContribution } from "../../hooks/useGetContribution"

import type { Repo } from "../../pages"

const TotalContributionCard = ({ repoCount, contributions }: Repo) => {
  const divRef = useRef<HTMLDivElement>(null)
  const { isVisible } = useView(divRef)

  return (
    <div
      ref={divRef}
      className={`flex flex-col gap-2 opacity-0 ${isVisible && "animate-fadezoomin-5"}`}
    >
      <h3 className="font-poppins font-semibold capitalize text-sm md:text-md">
        Total Repos & Contributions
      </h3>

      <div className="border min-h-[12rem] font-poppins border-black rounded-md p-5 flex items-center justify-around gap-x-3 shadow-lg animate-fadezoomin">
        <div className="text-center flex-1">
          <h4 className="text-xxl text-ternary font-bold tracking-wider">
            {contributions}
          </h4>
          <p className="text-slg font-semibold">total contribution</p>
        </div>

        <div className="border border-black h-[10rem]"></div>

        <div className="text-center flex-1">
          <h4 className="text-xxl text-ternary font-bold tracking-wider">
            {repoCount}
          </h4>
          <p className="">Repos</p>
        </div>
      </div>
    </div>
  )
}

export default TotalContributionCard
