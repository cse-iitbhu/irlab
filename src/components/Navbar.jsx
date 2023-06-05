import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CgMenuRightAlt } from "react-icons/cg"

export const Navbar = () => {
  const [view, setView] = useState(false)

  
  return (
    <div className='w-full header bg-[#67b0d1] text-white font-[Montserrat] z-[999999] sticky top-0 right-0 left-0'>
      <div className=' main-navbar  flex justify-between items-center  p-[1%] '>
        <div className=' left min-w-max'>
          <NavLink to="" className=""><h1 className='nav-heading text-[120%] font-bold tracking-widest text-[#666666] font-sans '>IR LAB</h1></NavLink>
        </div>
        <div className='right w-full list flex justify-end text-xl tracking-wider'>
          <NavLink to="members" className="px-[0.75%] py-[1%] ml-[1%] text-right"><div className='hover:text-sky-900'>Members</div></NavLink>
          <NavLink to="projects" className="px-[0.75%] py-[1%] ml-[1%]"><div className='hover:text-sky-900'>Projects</div></NavLink>
          <NavLink to="resources" className="px-[0.75%] py-[1%] ml-[1%]"><div className='hover:text-sky-900'>Resources</div></NavLink>
          <NavLink to="publications" className="px-[0.75%] py-[1%] ml-[1%]"><div className='hover:text-sky-900'>Publications</div></NavLink>
          <NavLink to="research" className="px-[0.75%] py-[1%] ml-[1%]"><div className='hover:text-sky-900'>Research</div></NavLink>
          <NavLink to="contact" className="px-[0.75%] py-[1%] ml-[1%]"><div className='hover:text-sky-900'>Contact Us</div></NavLink>
        <button className='list-icon invisible' onClick={() => setView(!view)}><CgMenuRightAlt size={"30px"} /></button>
        </div>
      </div>

      {view && <div className=' invisible dropdown py-[2%] px-[2%] text-s tracking-wider'>
        <NavLink to="members"><div className='text-[60%]'>Members</div></NavLink>
        <NavLink to="projects"><div className='text-[60%]'>Projects</div></NavLink>
        <NavLink to="resources"><div className='text-[60%]'>Resources</div></NavLink>
        <NavLink to="publications"><div className='text-[60%]'>Publications</div></NavLink>
        <NavLink to="research"><div className='text-[60%]'>Research</div></NavLink>
        <NavLink to="contact"><div className='text-[60%]'>Contact Us</div></NavLink>
      </div>
      }

    </div>
  )
}
