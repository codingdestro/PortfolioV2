import Navbar from "./components/Navbar"
import About from "./sections/About"
import Hero from "./sections/Hero"

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className=" flex flex-col items-center px-5 md:w-[890px]">
          <Hero />
          <About />
        </div>
      </div>
    </div>
  )
}

export default App
