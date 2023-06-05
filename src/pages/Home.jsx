import React, { useEffect } from 'react'
import { News } from '../components/News'
import { Achievements } from '../components/Achievements'
import { Gallery } from '../components/Gallery'
import backg from "../assets/backg.jpg"
import { Teachings } from '../components/Teachings'
import AOS from "aos"

export const Home = () => {
  useEffect(()=>{
    AOS.init({})
  },[])

  return (
    <div>
          <div className=''>
        <img src={backg} alt="" data-aos-duration="1200" data-aos="fade-up" />
    </div>
        <News/>
        <Achievements/>
        <Teachings/>
        <Gallery/>
        
    </div>
  )
}
