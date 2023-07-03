import React ,{useEffect}from 'react'
import AOS from "aos"
import { Teachings } from '../components/Teachings'

export const Teaching = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      AOS.init()
    }, [])
  
    return ( <div className='font-serif' data-aos="zoom-in" >
    {/* <div className='heading py-[4%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]'>PROJECTS</div> */}
    <div className='projects-div mx-[8%] py-[1%] my-[2%] '>
  
            <Teachings/>
              </div>
    </div>
    )
  }
  