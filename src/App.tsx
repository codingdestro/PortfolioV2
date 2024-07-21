import Navbar from "./components/Navbar"
import About from "./sections/About"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Services from "./sections/Services"

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className=" flex flex-col items-center px-5 md:w-[890px]">
          <Hero />
          <About />
          <Projects />
          <Services />
        </div>
      </div>
    </div>
  )
}

export default App
