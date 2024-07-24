import React, { useEffect, useState } from "react"
import Section from "../components/Section"
import LanguagesCard from "../components/contribution/LanguageCard"
import TotalContributionCard from "../components/contribution/TotalContributionCard"

const Contribution = () => {
  return (
    <Section id="contribution" heading="contribution">
      <div className="w-full px-5 flex flex-col gap-8 ">
        <LanguagesCard />
        <TotalContributionCard />
      </div>
    </Section>
  )
}

export default Contribution
