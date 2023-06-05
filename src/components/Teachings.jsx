import React from 'react'

export const Teachings = () => {
  return (
    <div className='font-serif text-[#666666]' data-aos-duration="1200" data-aos="zoom-in">
      <div className=' heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]'>TEACHINGS</div>
      <div className='my-[2%]  px-[8%]'>
        <div className='flex flex-col'>
          <div className='teaching-heading py-[2%] tracking-wider text-[150%] bg-gray-200 px-[2%] rounded-xl text-gray-700 ' >ODD SEMESTERS </div>
          <div className='teaching-content px-[1%] flex justify-between my-[2%] text-[120%] '>
            <div className='w-[30%] flex  '>Compilers</div>
            <div className='w-[30%] flex '>
              <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://classroom.google.com/u/0/c/NzAxMzk0NTY5NFpa">  Course Catalogue Info </a></div>
            <div className='w-[30%] flex '>
              <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://classroom.google.com/u/0/c/NzAxMzk0NTY5NFpa">
                Lecture Details
              </a>
            </div>
          </div>
          <div className='teaching-heading py-[2%] tracking-wider text-[150%] bg-gray-200 px-[2%] rounded-xl text-gray-700'>EVEN SEMESTERS </div>
          <div className='flex justify-between px-[1%] my-[2%] teaching-content  text-[120%]'>
            <div className='w-[30%] flex  '>Information Retrieval</div>
            <div className='w-[30%] flex r'>
              <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://classroom.google.com/u/0/c/NDUwNDc2MTQ1MjMx">
                Course Catalogue Info
              </a>
            </div>
            <div className='w-[30%] flex '>
              <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://classroom.google.com/u/0/c/NDUwNDc2MTQ1MjMx">
                Lecture Details
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
