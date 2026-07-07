import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CgMenuRightAlt } from "react-icons/cg"

import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export const Navbar = () => {
  const [view, setView] = useState(false)
  const [darkMode, setDarkMode] = useState(
  document.documentElement.classList.contains("dark")
);

  return (
    <div className='w-full header bg-[#67b0d1] dark:bg-[#0f172a] text-white font-[Montserrat] z-[999999] sticky top-0 right-0 left-0 transition-colors duration-300 border-b dark:border-slate-700'>


      <div className='main-navbar flex justify-between items-center p-[1%]'>

        <div className='left min-w-max'>
          <NavLink to="">
<h1 className='nav-heading text-[180%] font-bold tracking-widest text-black dark:text-cyan-300 font-sans transition-colors duration-300'>
              IReL
            </h1>
          </NavLink>
        </div>

                
   

        <div className='right w-full list flex justify-end items-center text-xl tracking-wider'>

                 <div className="relative group px-[0.75%] py-[1%] ml-[1%]">

         

 


            </div>

      



          <NavLink to="members" className="px-[0.75%] py-[1%] ml-[1%]">
            <div className='hover:text-sky-900 dark:hover:text-blue-300'>Members</div>
          </NavLink>

          <NavLink to="research" className="px-[0.75%] py-[1%] ml-[1%]">
            <div className='hover:text-sky-900 dark:hover:text-blue-300'>Research</div>
          </NavLink>

          <NavLink to="teach" className="px-[0.75%] py-[1%] ml-[1%]">
            <div className='hover:text-sky-900 dark:hover:text-blue-300'>Teachings</div>
          </NavLink>

          <NavLink to="publications" className="px-[0.75%] py-[1%] ml-[1%]">
            <div className='hover:text-sky-900 dark:hover:text-blue-300'>Publications</div>
          </NavLink>

          <NavLink to="projects" className="px-[0.75%] py-[1%] ml-[1%]">
            <div className='hover:text-sky-900 dark:hover:text-blue-300'>Sp. Projects</div>
          </NavLink>

          <NavLink to="resources" className="px-[0.75%] py-[1%] ml-[1%]">
            <div className='hover:text-sky-900 dark:hover:text-blue-300'>Resources</div>
          </NavLink>

  

          <NavLink to="contact" className="px-[0.75%] py-[1%] ml-[1%]">
            <div className='hover:text-sky-900 dark:hover:text-blue-300'>Contact Us</div>
          </NavLink>

<button
  onClick={() => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(
      document.documentElement.classList.contains("dark")
    );
  }}
  className="
     ml-4 px-3 py-2 rounded-full
  bg-white/20 hover:bg-white/30
  dark:bg-slate-700 dark:hover:bg-slate-600
  text-white
  transition-all duration-300
  "
>
  {darkMode ? (
    <BsSunFill size={20} />
  ) : (
    <BsMoonStarsFill size={20} />
  )}
</button>


          <button
            className='list-icon invisible'
            onClick={() => setView(!view)}
          >
            <CgMenuRightAlt size={"30px"} />
          </button>

        </div>
      </div>

      {view && (
        <div className='invisible dropdown py-[2%] px-[2%] text-s tracking-wider'>

          <NavLink to="members">
            <div className='text-[60%]'>Members</div>
          </NavLink>

          <NavLink to="research">
            <div className='text-[60%]'>Research</div>
          </NavLink>

          <NavLink to="teach">
            <div className='text-[60%]'>Teachings</div>
          </NavLink>

          <NavLink to="publications">
            <div className='text-[60%]'>Publications</div>
          </NavLink>

          <NavLink to="projects">
            <div className='text-[60%]'>Sp. Projects</div>
          </NavLink>

          <NavLink to="resources">
            <div className='text-[60%]'>Resources</div>
          </NavLink>

         <a 
         href="https://cse-iitbhu.github.io/MUSIA/">
  <div 
  className='text-[60%]'>MUSIA
  </div>
</a>

         <a 
         href="https://cmir-iitbhu.github.io/cmir/">
  <div 
  className='text-[60%]'>CMIR

  </div>
</a>

          <NavLink to="contact">
            <div className='text-[60%]'>Contact Us</div>
          </NavLink>
          

        </div>
      )}

    </div>
  )
}