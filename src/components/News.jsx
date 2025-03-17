import React from 'react'
import { BsCalendar2Date } from 'react-icons/bs'
import { TfiAnnouncement } from 'react-icons/tfi'

const news = [
  {
    name: 'The 17th meeting of Forum of Information Retrieval Evaluation(FIRE-2025) to be organized by Information Retrieval Lab(IReL), IIT(BHU)',
    year: "17-20 December, 2025",
  },
  {
    name: 'Our paper, Towards Safer Online Spaces: Deep Learning for Hate Speech Detection in Code-Mixed Social Media Conversations has been accepted at the DHOW 2024 Workshop, WebSci 24.',
    year: "April, 2024",
  },
  {
    name: 'A book chapter accepted titled "Hate content identification in code-mixed social media data" CRC Press, Taylor & Francis Group.',
    year: " 2024",
  },
 
]

const events=[
  {
    name:"Call for Tracks at FIRE, 2025",
  },
  {
    name:"Apply for Android Development",
  },
]

export const News = () => {

  return (
    <div className='font-serif'data-aos-duration="1200" data-aos="zoom-in">
      <div className='heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]'>NEWS AND EVENTS</div>
      <div className=' flex px-[8%] my-[2%]'>
        <div className='news-left w-3/4 mx-[2%] flex justify-center items-center'>
          <div className='py-[1%] mx-[2%] border-[1%] border-sky-200 bg-sky-50'>
            <ul className=' text-[120%] px-[2%]  list-inside w-full ' >
              {
                news.map((item) => {
                  return (
                    <li className='news-li text-[#676767] py-[0.5%] my-[1%] border-b-2 border-[#67b0d1]'>
                      <span className=' text-[#67b0d1] mr-[2%] flex items-center' >
                      <BsCalendar2Date className='mem-icon mr-1' size={"1rem"} />
                        {item.year}
                      </span>
                      {item.name}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className='bg-gray-200 news-right w-1/4 flex justify-center'>
          <div className='py-[2%] mx-[2%] border-[1%]'>
            <ul className='text-[120%] px-[2%] list-inside w-full'>
             {events.map((item) => {
               const isCallForTracks = item.name === "Call for Tracks at FIRE, 2025";
                return (
                  <li key={item.name} className='news-li text-[#676767] flex py-[0.5%] my-[1%]'>
                    <span className='text-gray-400 mr-[2%]'>
                      <TfiAnnouncement className='events mem-icon mr-2 mt-2' size={"1rem"} />
                    </span>
                    <a target='_blank' rel='noreferrer' href={isCallForTracks ? "fire.irsi.org.in" : "mailto:spal.cse@iitbhu.ac.in"}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
