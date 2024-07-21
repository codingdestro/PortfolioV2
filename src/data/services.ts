export interface serviceInterface {
  name: string
  price: string
  features: string[]
}
export const services: serviceInterface[] = [
  {
    name: "Basic",
    price: "5$/Hour",
    features: [
      "Basic Html, Css & Javascript",
      "Basic Html, Css & Javascript",
      "Basic Html, Css & Javascript",
      "Basic Html, Css & Javascript",
    ],
  },

  {
    name: "Advance",
    price: "8$/Hour",
    features: ["React.js frontend", "Bun/Node.js Backend", "Web designing"],
  },

  {
    name: "Professional",
    price: "5$/Hour",
    features: [
      "Building full stack web app",
      "Next.js, Drizzle ORM, Postgresql",
    ],
  },
]
