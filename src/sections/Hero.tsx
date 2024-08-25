import React from "react"

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center h-screen justify-center"
    >
      <div className="flex flex-col opacity-0 items-center gap-4 animate-fadezoomin">
        <div className="font-georgia text-4xl dark:text-white">
          It's Mohd Anas
        </div>

        <div className="flex gap-5 items-center text-lg font-poppins font-[500] tracking-wider animate-fadeslideup opacity-0">
          <span className="text-ternary">Full Stack</span>
          <span className="dark:text-white">Web Developer</span>
        </div>

        <p className="text-center text-sm font-georgia max-w-[25rem] px-5 dark:text-white">
          a seasoned full-stack web developer with a penchant for crafting
          elegant and efficient web applications.
        </p>

        <button className="mt-5 bg-primary dark:bg-white text-white dark:text-black px-3 py-2 rounded-lg animate-fadezoomin text-sm font-poppins font-[500] capitalize delay-200">
          download resume
        </button>
      </div>
    </section>
  )
}

export default Hero
