import axios from "axios"
import Navbar from "../components/Navbar"
import About from "../sections/About"
import Contact from "../sections/Contact"
import Contribution from "../sections/Contribution"
import Hero from "../sections/Hero"
import Projects from "../sections/Projects"
import { InferGetStaticPropsType, GetStaticProps } from "next"
import { useGetContribution } from "../hooks/useGetContribution"

export type Repo = {
  repoCount: number
  contributions: number
}

export const getStaticProps = (async () => {
  const url = `https://api.github.com/users/codingdestro/repos`
  const { data } = await axios.get(url)

  const { totalContributions } = await useGetContribution()
  console.log(totalContributions)
  return {
    props: {
      repo: { repoCount: data.length || 0, contributions: totalContributions },
    },
  }
}) satisfies GetStaticProps<{
  repo: Repo
}>

export default function Page({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className=" flex flex-col items-center px-5 md:w-[890px]">
          <Hero />
          <About />
          <Projects />
          <Contribution
            repoCount={repo.repoCount}
            contributions={repo.contributions}
          />
        </div>
      </div>
      <Contact />
    </div>
  )
}
