import React from "react"
import Section from "../components/Section"
import ServiceCard from "../components/services/ServiceCard"

import { services, serviceInterface } from "../data/services"

const Services = () => {
  return (
    <Section id="services" heading="Services">
      <div className="flex flex-wrap mb-72 justify-center gap-8">
        {services.map(
          ({ name, features, price }: serviceInterface, idx: number) => (
            <ServiceCard
              key={idx}
              name={name}
              price={price}
              features={features}
            />
          ),
        )}
      </div>
    </Section>
  )
}

export default Services
