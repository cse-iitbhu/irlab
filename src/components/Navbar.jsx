import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import { CgMenuRightAlt } from "react-icons/cg"

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export const Navbar = () => {
  const [view, setView] = useState(false)
  const [darkMode, setDarkMode] = useState(
  document.documentElement.classList.contains("dark")
);
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    setDarkMode(true);
  } else {
    document.documentElement.classList.remove("dark");
    setDarkMode(false);
  }
}, []);

return (
  <header
  className="
    sticky top-0 z-[9999]
    w-full
    bg-[#67b0d1]
    dark:bg-slate-900
    border-b
    border-sky-300
    dark:border-slate-700
    shadow-md
    transition-all
    duration-300
  "
>
 <div
  className="
    max-w-7xl
    mx-auto
    h-16
    px-4
    sm:px-6
    lg:px-8
    flex
    items-center
    justify-between
  "
>

      {/* Logo */}

      <NavLink
        to="/"
        className="flex items-center"
      >
        <h1
          className="
            text-2xl
            sm:text-3xl
            font-bold
            tracking-widest
            text-slate-900
dark:text-cyan-300
            transition-all
          "
        >
          IReL
        </h1>
      </NavLink>

      {/* Desktop Menu */}

      <div
     className="
hidden
lg:flex
items-center
gap-5
xl:gap-6
text-[15px]
font-medium
text-black
dark:text-gray-100
"
      >
   

      {/* Desktop Navigation */}

<NavLink
  to="members"
  className="transition-colors
duration-300
hover:text-blue-900
dark:hover:text-cyan-300"
>
  Members
</NavLink>

<NavLink
  to="research"
  className="transition-colors
duration-300
hover:text-blue-900
dark:hover:text-cyan-300"
>
  Research
</NavLink>

<NavLink
  to="teach"
  className="transition-colors
duration-300
hover:text-blue-900
dark:hover:text-cyan-300"
>
  Teachings
</NavLink>

<NavLink
  to="publications"
  className="transition-colors
duration-300
hover:text-blue-900
dark:hover:text-cyan-300"
>
  Publications
</NavLink>

<NavLink
  to="projects"
  className="transition-colors
duration-300
hover:text-blue-900
dark:hover:text-cyan-300"
>
  Sp. Projects
</NavLink>

<NavLink
  to="resources"
  className="transition-colors
duration-300
hover:text-blue-900
dark:hover:text-cyan-300"
>
  Resources
</NavLink>

<NavLink
  to="contact"
  className="transition-colors
duration-300
hover:text-blue-900
dark:hover:text-cyan-300"
>
  Contact
</NavLink>

{/* Theme Button */}

<button
  onClick={() => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(
      document.documentElement.classList.contains("dark")
    );
  }}
className="
ml-2
flex
items-center
justify-center
w-10
h-10
rounded-full
bg-white/20
hover:bg-white/30
dark:bg-slate-700
dark:hover:bg-slate-600
transition-all
duration-300
"
>
  {darkMode ? (
    <BsSunFill size={18} />
  ) : (
    <BsMoonStarsFill size={18} />
  )}
</button>

</div>

{/* Mobile Right Side */}

<div
className="
flex
lg:hidden
items-center
gap-2
"
>

  {/* Theme */}

  <button
    onClick={() => {
      document.documentElement.classList.toggle("dark");
      setDarkMode(
        document.documentElement.classList.contains("dark")
      );
    }}
 className="
w-10
h-10
flex
items-center
justify-center
rounded-full
bg-white/20
hover:bg-white/30
dark:bg-slate-700
dark:hover:bg-slate-600
transition-all
duration-300
"
  >
    {darkMode ? (
      <BsSunFill size={18} />
    ) : (
      <BsMoonStarsFill size={18} />
    )}
  </button>

  {/* Hamburger */}

  <button
    onClick={() => setView(!view)}
   className="
w-10
h-10
flex
items-center
justify-center
rounded-lg
hover:bg-white/20
dark:hover:bg-slate-700
transition-all
duration-300
"
  >
    <CgMenuRightAlt size={28} />
  </button>

</div>

</div>
      
{/* ========================= */}
{/* Mobile Dropdown */}
{/* ========================= */}

{view && (
  <div
    className="
      lg:hidden
      bg-[#67b0d1]
      dark:bg-slate-900
      border-t
      border-sky-300
      dark:border-slate-700
      shadow-xl
      transition-all
      duration-300
    "
  >
    <div className="flex flex-col px-6 py-5 space-y-1">

      <NavLink
        to="members"
        onClick={() => setView(false)}
        className="
block
px-3
py-3
rounded-lg
font-medium
text-black
dark:text-white
hover:bg-white/20
hover:text-blue-900
dark:hover:bg-slate-800
dark:hover:text-cyan-300
transition-all
duration-300
"
      >
        Members
      </NavLink>

      <NavLink
        to="research"
        onClick={() => setView(false)}
        className="
block
px-3
py-3
rounded-lg
font-medium
text-black
dark:text-white
hover:bg-white/20
hover:text-blue-900
dark:hover:bg-slate-800
dark:hover:text-cyan-300
transition-all
duration-300
"
      >
        Research
      </NavLink>

      <NavLink
        to="teach"
        onClick={() => setView(false)}
        className="
block
px-3
py-3
rounded-lg
font-medium
text-black
dark:text-white
hover:bg-white/20
hover:text-blue-900
dark:hover:bg-slate-800
dark:hover:text-cyan-300
transition-all
duration-300
"
      >
        Teachings
      </NavLink>

      <NavLink
        to="publications"
        onClick={() => setView(false)}
       className="
block
px-3
py-3
rounded-lg
font-medium
text-black
dark:text-white
hover:bg-white/20
hover:text-blue-900
dark:hover:bg-slate-800
dark:hover:text-cyan-300
transition-all
duration-300
"
      >
        Publications
      </NavLink>

      <NavLink
        to="projects"
        onClick={() => setView(false)}
        className="
block
px-3
py-3
rounded-lg
font-medium
text-black
dark:text-white
hover:bg-white/20
hover:text-blue-900
dark:hover:bg-slate-800
dark:hover:text-cyan-300
transition-all
duration-300
"
      >
        Sp. Projects
      </NavLink>

      <NavLink
        to="resources"
        onClick={() => setView(false)}
       className="
block
px-3
py-3
rounded-lg
font-medium
text-black
dark:text-white
hover:bg-white/20
hover:text-blue-900
dark:hover:bg-slate-800
dark:hover:text-cyan-300
transition-all
duration-300
"
      >
        Resources
      </NavLink>

      <NavLink
        to="contact"
        onClick={() => setView(false)}
        className="
block
px-3
py-3
rounded-lg
font-medium
text-black
dark:text-white
hover:bg-white/20
hover:text-blue-900
dark:hover:bg-slate-800
dark:hover:text-cyan-300
transition-all
duration-300
"
      >
        Contact Us
      </NavLink>

    </div>
  </div>
)}

</header>

    
  )
}