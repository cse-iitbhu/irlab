import React from 'react'
import twitter from "../assets/twitter.png"
import { Link } from 'react-router-dom'
import OSBook from "../pages/OSBook.tsx"
import linkedin from "../assets/linkedin-logo.png"

export const Footer = () => {
    
    
    return (
<footer
  className="
  relative overflow-hidden

  bg-[#67b0d1]

  dark:bg-gradient-to-br
  dark:from-slate-950
  dark:via-[#0F172A]
  dark:to-slate-900

  text-slate-800
  dark:text-white

  border-t
  border-sky-400
  dark:border-cyan-500/20
"
>

  {/* Background Glow */}
  <div className="absolute inset-0 overflow-hidden">

    <div
      className="
      absolute top-0 left-1/4
      w-96 h-96
      rounded-full
      blur-3xl

      bg-white/20
      dark:bg-cyan-500/10
      "
    ></div>

    <div
      className="
      absolute bottom-0 right-1/4
      w-96 h-96
      rounded-full
      blur-3xl

      bg-cyan-100/20
      dark:bg-blue-500/10
      "
    ></div>

  </div>

  <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 py-5">

    {/* Main Grid */}
    <div className="  grid
  grid-cols-1
  md:grid-cols-2
  xl:grid-cols-[1.2fr_1.2fr_0.9fr_1.5fr]
  gap-x-10
  gap-y-8">

      {/* Research Groups */}
      <div>
        <h3 className="text-[#0B5E7A] dark:text-cyan-400 font-semibold tracking-wide text-xl mb-1.5">
          Research Groups
        </h3>

        <div className="flex flex-wrap gap-3">

          <a
            href="https://www.gla.ac.uk"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2
rounded-xl

bg-white/85
dark:bg-white/5

backdrop-blur-md

border border-white/50
dark:border-white/10

shadow-md

hover:bg-white
dark:hover:bg-cyan-500/10

hover:border-cyan-500
dark:hover:border-cyan-400

hover:-translate-y-1
hover:shadow-xl

transition-all duration-300"
          >
            University of Glasgow
          </a>

          <a
            href="https://www.lti.cs.cmu.edu"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2
rounded-xl

bg-white/85
dark:bg-white/5

backdrop-blur-md

border border-white/50
dark:border-white/10

shadow-md

hover:bg-white
dark:hover:bg-cyan-500/10

hover:border-cyan-500
dark:hover:border-cyan-400

hover:-translate-y-1
hover:shadow-xl

transition-all duration-300"
          >
            LTI, CMU
          </a>

          <a
            href="https://nlp.stanford.edu"
            target="_blank"
            rel="noreferrer"
            className="px-3.5 py-2
rounded-xl

bg-white/85
dark:bg-white/5

backdrop-blur-md

border border-white/50
dark:border-white/10

shadow-md

hover:bg-white
dark:hover:bg-cyan-500/10

hover:border-cyan-500
dark:hover:border-cyan-400

hover:-translate-y-1
hover:shadow-xl

transition-all duration-300"
          >
            Stanford NLP
          </a>

        </div>
      </div>

      {/* Conferences */}
      <div>
        <h3 className="text-[#0B5E7A] dark:text-cyan-400 font-semibold tracking-wide text-xl mb-1.5">
          Conferences
        </h3>

        <div className="flex flex-wrap gap-3">

          {[
            "TREC",
            "KDD",
            "WSDM",
            "FIRE",
            "LREC",
            "COLING",
            "CODS-COMAD",
            "IndoML",
          ].map((item) => (
            <span
              key={item}
              className="px-3.5 py-2
rounded-xl

bg-white/85
dark:bg-white/5

backdrop-blur-md

border border-white/50
dark:border-white/10

shadow-md

hover:bg-white
dark:hover:bg-cyan-500/10

hover:border-cyan-500
dark:hover:border-cyan-400

hover:-translate-y-1
hover:shadow-xl

transition-all duration-300 cursor-pointer"
            >
              {item}
            </span>
          ))}

        </div>
      </div>

      {/* Software Resources */}
      <div>
        <h3 className="text-[#0B5E7A] dark:text-cyan-400 font-semibold tracking-wide text-xl mb-1.5">
          Software Resources
        </h3>

        <div className="flex flex-wrap gap-3">

          {["Terrier", "Lemur"].map((item) => (
            <span
              key={item}
              className="px-3.5 py-2
rounded-xl

bg-white/85
dark:bg-white/5

backdrop-blur-md

border border-white/50
dark:border-white/10

shadow-md

hover:bg-white
dark:hover:bg-cyan-500/10

hover:border-cyan-500
dark:hover:border-cyan-400

hover:-translate-y-1
hover:shadow-xl

transition-all duration-300 cursor-pointer"
            >
              {item}
            </span>
          ))}

        </div>
      </div>
{/* Books */}
<div>
  <h3 className="text-[#0B5E7A] dark:text-cyan-400 font-semibold tracking-wide text-xl mb-1.5">
    Books & Slides
  </h3>

  <div className="space-y-3 max-w-sm">

    <a
      href="https://nlp.stanford.edu/IR-book/information-retrieval-book.html"
      target="_blank"
      rel="noreferrer"
      className="
      block
      p-4
      rounded-xl

      bg-white/85
      dark:bg-white/5

      backdrop-blur-md

      border border-white/50
      dark:border-white/10

      shadow-md

      hover:bg-white
      dark:hover:bg-cyan-500/10

      hover:border-cyan-500
      dark:hover:border-cyan-400

      hover:-translate-y-1
      hover:shadow-xl

      transition-all duration-300
      "
    >
      Introduction to IR
    </a>

    <a
      href="https://web.stanford.edu/~jurafsky/slp3/"
      target="_blank"
      rel="noreferrer"
      className="
      block
      p-4
      rounded-xl

      bg-white/85
      dark:bg-white/5

      backdrop-blur-md

      border border-white/50
      dark:border-white/10

      shadow-md

      hover:bg-white
      dark:hover:bg-cyan-500/10

      hover:border-cyan-500
      dark:hover:border-cyan-400

      hover:-translate-y-1
      hover:shadow-xl

      transition-all duration-300
      "
    >
      Speech & Language Processing
    </a>

<Link
  to="/os-book"
  className="
    block
    p-4
    rounded-xl
    bg-white/85
    dark:bg-white/5
    backdrop-blur-md
    border border-white/50
    dark:border-white/10
    shadow-md
    hover:bg-white
    dark:hover:bg-cyan-500/10
    hover:border-cyan-500
    dark:hover:border-cyan-400
    hover:-translate-y-1
    hover:shadow-xl
    transition-all duration-300
  "
>
  Operating Systems
</Link>

  </div>
</div>

    </div>

    <div className="mt-2 mb-2 border-t border-slate-300 dark:border-white/10"></div>

<div className="flex flex-col items-center text-center">

  {/* <h3
    className="
    text-xl md:text-xl
    font-bold
    bg-gradient-to-r
    from-cyan-600
    to-blue-600
    dark:from-cyan-400
    dark:to-blue-400
    bg-clip-text
    text-transparent
    "
  >
    IReL Lab • IIT (BHU) Varanasi
  </h3> */}

  <p className="mt-1/5 text-sm md:text-base text-slate-600 dark:text-gray-400">
    Information Retrieval Lab, Department of Computer Science and Engineering,
    IIT (BHU) Varanasi.
  </p>

  {/* Social Icons */}
  <div className="flex gap-3 mt-1">

    <a
      href="https://www.linkedin.com/company/irel-information-retrieval-lab-iit-bhu-varanasi/"
      target="_blank"
      rel="noreferrer"
      className="
      p-1
      rounded-lg

      bg-white/85
      dark:bg-white/5

      border border-white/50
      dark:border-white/10

      backdrop-blur-md

      hover:bg-white
      dark:hover:bg-cyan-500/10

      hover:border-cyan-500
      dark:hover:border-cyan-400

      transition-all duration-300
      "
    >
      <img
        src={linkedin}
        alt="LinkedIn"
        className="w-5 h-5 dark:invert"
      />
    </a>

    <a
      href="https://x.com/IReL_iitbhu"
      target="_blank"
      rel="noreferrer"
      className="
      p-1
      rounded-lg

      bg-white/85
      dark:bg-white/5

      border border-white/50
      dark:border-white/10

      backdrop-blur-md

      hover:bg-white
      dark:hover:bg-cyan-500/10

      hover:border-cyan-500
      dark:hover:border-cyan-400

      transition-all duration-300
      "
    >
      <img
        src={twitter}
        alt="Twitter"
        className="w-5 h-5 dark:invert"
      />
    </a>

  </div>

  <p className="mt-1 text-xs md:text-sm text-slate-600 dark:text-gray-500">
    © 2023–2026 IIT (BHU) Varanasi. All Rights Reserved.
  </p>

</div>
</div>

</footer>
    )
}
