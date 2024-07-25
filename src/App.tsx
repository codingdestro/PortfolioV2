import Navbar from "./components/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Contribution from "./sections/Contribution"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Services from "./sections/Services"

function App() {
  console.log(import.meta.env.VITE_GITHUB_USERNAME)
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className=" flex flex-col items-center px-5 md:w-[890px]">
          <Hero />
          <About />
          <Projects />
          <Contribution />
          <Services />
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default App
