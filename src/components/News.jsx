import React from 'react'
import { BsCalendar2Date } from 'react-icons/bs'
import { TfiAnnouncement } from 'react-icons/tfi'
import { Link } from "react-router-dom";

const news = [
  {
   name: (
  <>
    The 2nd Edition of Multilingual Story Illustration: Bridging Cultures through AI Artistry (MUSIA) to be organized by Information Retrieval Lab (IReL), IIT (BHU) at FIRE 2026.&nbsp;
    <Link
      to="/musia"
      className="text-sky-500 hover:underline"
    >
      Visit the MUSIA website
    </Link>
  </>
),
    year: " 2026",
  },
 
 
]

const events=[
  {
    name:"Register for MUSIA, 2026",
    
  },
  
]

export const News = () => {

return (
  <div
    className='font-serif bg-gray-50 dark:bg-gray-900 transition-colors duration-300'
    data-aos-duration="1200"
    data-aos="zoom-in"
  >

    <div className='heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8] dark:bg-gray-800 text-[#666666] dark:text-gray-200'>
      NEWS AND EVENTS
    </div>

    <div className='flex flex-col md:flex-row px-[8%] my-[2%] gap-4'>

      {/* News Section */}
      <div className='news-left w-full md:w-3/4 mx-[2%] flex justify-center items-center'>
        <div className='py-[1%] mx-[2%] border border-sky-200 dark:border-gray-700 bg-sky-50 dark:bg-gray-800 rounded-xl w-full'>

          <ul className='text-[120%] px-[2%] list-inside w-full'>
            {news.map((item, index) => {
              return (
                <li
                  key={index}
                  className='news-li text-[#676767] dark:text-gray-300 py-[0.5%] my-[1%] border-b-2 border-[#67b0d1] dark:border-gray-700'
                >
                  <span className='text-[#67b0d1] mr-[2%] flex items-center'>
                    <BsCalendar2Date
                      className='mem-icon mr-1'
                      size={"1rem"}
                    />
                    {item.year}
                  </span>

                  {item.name}
                </li>
              );
            })}
          </ul>

        </div>
      </div>

      {/* Events Section */}
      <div className='bg-gray-200 dark:bg-gray-800 news-right w-full md:w-1/4 flex justify-center rounded-xl'>

        <div className='py-[2%] mx-[2%] border-[1%] w-full'>

          <ul className='text-[120%] px-[2%] list-inside w-full'>

            {events.map((item) => {

              const isMusia =
                item.name === "Register for MUSIA, 2026";

              return (
                <li
                  key={item.name}
                  className='news-li text-[#676767] dark:text-gray-300 flex py-[0.5%] my-[1%]'
                >
                  <span className='text-gray-400 mr-[2%]'>
                    <TfiAnnouncement
                      className='events mem-icon mr-2 mt-2'
                      size={"1rem"}
                    />
                  </span>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={
                      isMusia
                        ? "/#/musia"
                        : "mailto:spal.cse@iitbhu.ac.in"
                    }
                    className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                  >
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
