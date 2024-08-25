import React from "react"

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-8 dark dark:bg-black py-10">
      <div className="flex flex-col items-center gap-5">
        <h3 className="font-georgia text-primary text-lg dark:text-white">
          want to collaborate?
        </h3>
        <h1 className="font-georgia text-ternary text-[3rem]">Contact me!</h1>
      </div>

      <div className="flex justify-center gap-5 font-poppins text-sm font-[400] dark:text-white">
        <a href="/" className="px-5 py-1 border rounded-full">
          twitter
        </a>
        <a
          href="https://github.com/codingdestro"
          className="px-5 py-1 border rounded-full"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/mohd-anas-608225255/"
          className="px-5 py-1 border rounded-full"
        >
          LinkedIn
        </a>
      </div>

      <div className="text-center dark:text-white">
        <h1 className="font-poppins my-4 font-semibold capitalize tracking-wide">
          Mohd Anas
        </h1>
        <p className="font-poppins font-light text-sm">
          Designer, Developer & Lover
        </p>
      </div>
      <div className="px-3 max-w-[400px] font-serif text-smd md:sm text-center dark:text-white">
        I'm always excited to connect with like-minded professionals and
        potential collaborators. Whether you have a project in mind, need
        assistance, or just want to say hello, feel free to reach out!
      </div>
    </div>
  )
}

export default Contact
