import React from "react"
import Section from "../components/Section"
import LanguagesCard from "../components/contribution/LanguageCard"
import TotalContributionCard from "../components/contribution/TotalContributionCard"
import type { Repo } from "../pages"

const Contribution = (repo: Repo) => {
  return (
    <Section id="contribution" heading="contribution">
      <div className="w-full px-5 flex flex-col gap-8 ">
        <LanguagesCard />
        <TotalContributionCard
          repoCount={repo.repoCount}
          contributions={repo.contributions}
        />
      </div>
    </Section>
  )
}

export default Contribution
