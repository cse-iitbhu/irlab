import React ,{useEffect}from 'react'
import AOS from "aos"
import { Teachings } from '../components/Teachings'

export const Teaching = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      AOS.init()
    }, [])
  
 return (
  <div
    className='font-serif bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300'
    data-aos="zoom-in"
  >
    <div className='projects-div mx-[8%] py-[1%] my-[2%]'>
      <Teachings />
    </div>
  </div>
)
  }
  