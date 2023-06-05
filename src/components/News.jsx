import React from 'react'
import { BsCalendar2Date } from 'react-icons/bs'

const news = [
  {
    name: 'Our paper "The effect of stopword removal on Information Retrieval for Code-Mixed data obtained via social media" is accepted to SN Computer Science.',
    year: "May, 2023",
  },
  {
    name: 'One paper is accepted to ACL 2023.',
    year: "May, 2023",
  },
  {
    name: 'Our paper  "Effect of stopwords and stemming techniques in Urdu IR" is accepted to SN Computer Science.',
    year: "May, 2023",
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
                      <span className=' text-[#67b0d1] mr-[2%] flex items-center'>
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
        <div className='bg-gray-200 border-2 border-gray-400 news-right w-1/4 flex justify-center items-center'>
          <div className=''>

          right
          </div>
        </div>
      </div>
    </div>
  )
}
