export interface PropjectInterface {
  title: string
  imgUrl: string
  description: string
  visitLink: string
  tags: string[]
}
export const projects: PropjectInterface[] = [
  {
    imgUrl: "/portfoliov2.png",
    title: "PortfolioV2",
    description: "this is my portfolio v2",
    tags: ["React.js", "Typescript"],
    visitLink: "#",
  },
  {
    imgUrl: "/gadgetweb.png",
    title: "Gadget Web",
    description: "Full stack E-commerce web app.",
    tags: ["React.js", "Bun.js"],
    visitLink: "#",
  },
  {
    imgUrl: "/pdf-editor.png",
    title: "PDF Page Editor",
    description: "Full stack app for merging, extracting, and reducing pdfs.",
    tags: ["React.js", "Node.js"],
    visitLink: "#",
  },
  {
    imgUrl: "/calculator.png",
    title: "Calculator",
    description: "Featured calculator, unit convertor and age calc!",
    tags: ["React.js", "Typescript"],
    visitLink: "https://calculator-puce-nine.vercel.app/",
  },
]
