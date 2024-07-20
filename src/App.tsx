import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="md:max-w-[890px]">
          <Hero />
        </div>
      </div>
    </div>
  )
}

export default App
