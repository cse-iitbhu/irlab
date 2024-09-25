import React, { useEffect, useState } from 'react'

const data=[
  {
    name:"Compiler",
    current:true,
    year:"2024",
    url:"https://classroom.google.com/u/1/c/NjkxNjExMDg3NzY1",
  },
  {
    name:"Information Retrieval",
    current:false,
    year:"2024",
    url:"https://classroom.google.com",
  },
  {
    name:"Compiler",
    current:false,
    year:"2023",
    url:"https://classroom.google.com",
  },
  {
    name:"Information Retrieval",
    current:false,
    year:"2023",
    url:"https://classroom.google.com",
  },
  {
    name:"Compiler",
    current:false,
    year:"2022",
    url:"https://classroom.google.com",
  },
  {
    name:"Information Retrieval",
    current:false,
    year:"2022",
    url:"https://classroom.google.com",
  },
  {
    name:"Compiler",
    current:false,
    year:"2021",
    url:"https://classroom.google.com",
  },
  {
    name:"Information Retrieval",
    current:false,
    year:"2021",
    url:"https://classroom.google.com",
  },
  {
    name:"Compiler",
    current:false,
    year:"2020",
    url:"https://classroom.google.com",
  },
  {
    name:"Information Retrieval",
    current:false,
    year:"2020",
    url:"https://classroom.google.com",
  },
  {
    name:"Compiler",
    current:false,
    year:"2019",
    url:"https://classroom.google.com",
  },
  {
    name:"Information Retrieval",
    current:false,
    year:"2019",
    url:"https://classroom.google.com",
  },
  {
    name:"Compiler",
    current:false,
    year:"2018",
    url:"https://classroom.google.com",
  },
  {
    name:"Information Retrieval",
    current:false,
    year:"2018",
    url:"https://classroom.google.com",
  },
  {
    name:"Compiler",
    current:false,
    year:"2017",
    url:"https://classroom.google.com",
  },
  {
    name:"Information Retrieval",
    current:false,
    year:"2017",
    url:"https://classroom.google.com",
  },
  {
    name:"Compiler",
    current:false,
    year:"2016",
    url:"https://classroom.google.com",
  },
]

export const Teachings = () => {
  const [filter, setFilter] = useState()
  const [unfiltered, setUnfiltered] = useState()

  useEffect(()=>{
    
      const updatedData = data.filter(x => x.current === true)
      console.log(updatedData)
      setFilter(updatedData)
    
      const updatedunData = data.filter(x => x.current === false)
      console.log(updatedunData)
      setUnfiltered(updatedunData)
    
  },[])
  return (
    <div className='font-serif text-[#666666]' data-aos-duration="1200" data-aos="zoom-in">
      {/* <div className=' heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]'>TEACHINGS</div> */}
      <div className='my-[2%]  px-[8%]'>
        <div className='flex flex-col'>
          <div className='teaching-heading py-[2%] tracking-wider text-[150%] bg-gray-200 px-[2%] rounded-xl text-gray-700 ' >CURRENT SEMESTERS </div>
          {filter && filter.map(item=>{
            return (
              <div className='flex justify-between px-[1%] my-[0.5%] teaching-content  text-[120%]'>
            <div className='w-[30%] flex  '>{item.name}</div>
            <div className='w-[30%] flex  '>{item.year}</div>
            <div className='w-[30%] flex r'>
              <a target='__blank' className='hover:underline text-[#67b0d1]' href={item.url}>
                Google Classroom
              </a>
            </div>
           
          </div>
            )
          })}
          <div className='teaching-heading py-[2%] tracking-wider text-[150%] bg-gray-200 px-[2%] rounded-xl text-gray-700'>PREVIOUS COURSES TAUGHT </div>
          {unfiltered && unfiltered.map(item=>{
            return (
              <div className='flex justify-between px-[1%] my-[0.5%] teaching-content  text-[120%]'>
            <div className='w-[30%] flex  '>{item.name}</div>
            <div className='w-[30%] flex  '>{item.year}</div>
            <div className='w-[30%] flex r'>
              <a target='__blank' className='hover:underline text-[#67b0d1]' href={item.url}>
                Google Classroom
              </a>
            </div>
           
          </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
