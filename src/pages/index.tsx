import Navbar from "../components/Navbar"
import About from "../sections/About"
import Contact from "../sections/Contact"
import Contribution from "../sections/Contribution"
import Hero from "../sections/Hero"
import Projects from "../sections/Projects"

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className=" flex flex-col items-center px-5 md:w-[890px]">
          <Hero />
          <About />
          <Projects />
          <Contribution />
        </div>
      </div>
      <Contact />
    </div>
  )
}
