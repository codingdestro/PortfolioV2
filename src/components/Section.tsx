const Section = ({
  children,
  heading,
  id,
}: {
  children: JSX.Element | JSX.Element[]
  heading: string
  id: string
}) => {
  return (
    <section
      id={id}
      className="flex flex-col w-full pt-[60px] gap-y-10 justify-center items-center"
    >
      <div className="self-start">
        <h1 className="font-georgia px-4 text-xl lg:text-xxl font-semibold border-b-2 border-b-ternary capitalize tracking-wider dark:text-white">
          {heading}
        </h1>
      </div>
      {children}
    </section>
  )
}

export default Section
