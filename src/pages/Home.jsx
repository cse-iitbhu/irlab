import React, { useEffect } from 'react'
import { News } from '../components/News'
import { Achievements } from '../components/Achievements'
import { Gallery } from '../components/Gallery'
import b from "../assets/backg-logo.jpg"
import { Teachings } from '../components/Teachings'
import AOS from "aos"

export const Home = () => {
  useEffect(()=>{
    AOS.init({})
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

  return (
    <div>
          <div className=''>
        <img src={b} alt="" data-aos-duration="1200" data-aos="fade-up" />
    </div>
        <Gallery/>
        <News/>
        <Achievements/>
        
        
    </div>
  )
}
