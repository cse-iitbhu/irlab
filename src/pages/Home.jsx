import React, { useEffect } from 'react'
import { News } from '../components/News'
import { Achievements } from '../components/Achievements'
import { Gallery } from '../components/Gallery'
import b from "../assets/backg-logo.jpg"
import AOS from "aos"

export const Home = () => {
  useEffect(()=>{
    AOS.init({})
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])

return (
  <div className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">

    <div>
      <img
  src={b}
  alt=""
  className="w-full block dark:invert dark:contrast-125"
/>
    </div>

    <Gallery />
    <News />
    <Achievements />

  </div>
)
}
