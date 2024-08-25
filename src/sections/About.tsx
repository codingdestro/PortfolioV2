import React, { useRef } from "react"
import Section from "../components/Section"

import { useView } from "../hooks/useView"

const About = () => {
  const cardRef = useRef<HTMLDivElement>(null)
  const { isVisible } = useView(cardRef)
  return (
    <Section heading="about me" id="about me">
      <div className="py-20">
        <div
          className={`profile-card ${isVisible ? "animate-popup" : ""}`}
          ref={cardRef}
        ></div>
      </div>
      <div className="w-[300px] md:w-[600px] lg:w-[800px] font-poppins text-sm text-slate-500 dark:text-white">
        <p>
          Greetings! I am Mohd Anas, a seasoned full-stack web developer with a
          penchant for crafting elegant and efficient web applications. Hailing
          from the picturesque land of India, I bring to the table a wealth of
          expertise in React.js, Next.js, Node.js, and Tailwind CSS. With a
          solid foundation in HTML, CSS, and JavaScript, I possess a unique
          blend of traditional web development skills and modern technologies.
          <br />
          <br /> My journey in the world of technology is complemented by my
          pursuit of a B.Tech degree at St. Andrew's Institute of Technology and
          Management, where I am honing my skills and expanding my knowledge
          base.
        </p>
      </div>
    </Section>
  )
}

export default About
