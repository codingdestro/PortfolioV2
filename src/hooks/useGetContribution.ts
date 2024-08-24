import axios from "axios"
import { useEffect, useState } from "react"

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql"
const GITHUB_TOKEN: string = process.env.VITE_GITHUB_TOKEN || ""

const createQuery = (year: number) => {
  const from = new Date(year, 0, 1).toISOString()
  const to = new Date(year, 11, 31).toISOString()
  console.log(GITHUB_TOKEN)

  const query = `
query {
  user(login: "codingdestro") {
    name
    contributionsCollection(from: "${from}", to: "${to}") {
      contributionCalendar {
        colors
        totalContributions
      }
    }
  }
}`
  return query
}

const fetchGithubData = async (year: number) => {
  try {
    const query = createQuery(year)
    const response = await axios.post(
      GITHUB_GRAPHQL_URL,
      { query },
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    )
    const count =
      response.data.data.user.contributionsCollection.contributionCalendar
        .totalContributions
    return count
  } catch (error) {
    console.error("Error fetching data from GitHub:", error)
    return 0
  }
  return 0
}

export const useGetContribution = () => {
  const [isLoading, setLoading] = useState(false)
  const [count, setCount] = useState(0)
  useEffect(() => {
    ; (async function() {
      setLoading(true)
      let totalContributions = 0
      for (let year = 2022; year <= new Date().getFullYear(); year++) {
        totalContributions += await fetchGithubData(year)
      }
      setCount(totalContributions)
      setLoading(false)
    })()
  }, [])
  return { count, isLoading }
}
