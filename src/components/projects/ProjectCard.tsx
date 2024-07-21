import ProjectTags from "./ProjectTags"
import { PropjectInterface } from "../../data/projects"

import { useView } from "../../hooks/useView"
import { useRef } from "react"

const ProjectCard = (props: PropjectInterface) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const { isVisible } = useView(cardRef)
  return (
    <div
      ref={cardRef}
      className={`border p-5 rounded-lg shadow-lg w-[330px] flex flex-col gap-5 ${isVisible ? "animate-fadeslideup" : "opacity-0"} opacity-0`}
    >
      <div
        className="rounded-lg self-center  h-40 w-72 border shadow-md overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${props.imgUrl}')`,
        }}
      ></div>

      <div className="pl-2 flex flex-col gap-3 max-w-72">
        <h1 className="font-georgia tracking-wider md:text-lg font-semibold capitalize">
          {props.title}
        </h1>

        <p className="font-poppins text-slg ">{props.description}</p>
      </div>

      <div className="flex justify-between items-center">
        <ProjectTags tags={props.tags} />

        <a
          href={`${props.visitLink}`}
          className="self-end rounded-md bg-primary text-white px-3 py-1 hover:shadow-md"
        >
          visit
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
