import React from 'react'
import { BookCard } from '../components/BookCard'
import book from "../assets/book.jpg"
import { useEffect } from 'react'

const apps = [
    {
        title: "OPERATING SYSTEMS",
        author: "Dr. Sukomal Pal",
        desc: "A beginner level easy, short and fun-filled trip to learn Operating Systems - meant for UG CS students. With lot of MCQs for GATE and other competitive examinations and links for further in-depth study.",
        type: "Book",
        image: book.jpg,
        url: "https://ekumbh.aicte-india.org/allbook.php"
    },
   ]


export const Book = () => {
    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])
    return (
        <div className='font-serif'>
            {/* <img src={back} className='w-full' alt="" /> */}
            {/* <div className='heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]'>Books</div> */}
            <div className='resource my-[0%] py-[2%] mx-[8%] flex justify-center items-center'>
                <div className='flex flex-col w-full'>
                    <div className='mb-[1%]'>
                        <div className='teaching-heading py-[2%] text-center tracking-wider text-[150%] font-bold bg-gray-200 px-[2%] rounded-xl text-gray-700'>Books Written/Apps Developed</div>
                        <div className='resource-main flex flex-wrap py-[1%] justify-center'>
                            {
                                apps.map((item) => {
                                    return (
                                        <div className='resource-card  flex w-[33%] justify-between  ' >
                                            <BookCard title={item.title} author={item.author} logo={item.logo} desc={item.desc} image={item.image} url={item.url} type={item.type}/>
                                        </div>
                                    )

                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div className='teaching-heading text-center py-[2%] tracking-wider text-[150%] font-bold bg-gray-200 px-[2%] rounded-s text-gray-700'>Other</div>
                        <div className=' border-4'>
                        <div className='flex justify-between px-[4%] py-[2%] teaching-content border-[1px] text-[120%]' >
                            <div className=' flex  ' data-aos="fade-up" data-aos-duration="1200">"Operating Systems" book by Dr. Sukomal Pal at AICTE e-Kumbh </div>
                            <div className='flex ' data-aos="fade-up" data-aos-duration="1200">
                                <a target='__blank' className='hover:underline text-[#67b0d1]' href="https://ekumbh.aicte-india.org/allbook.php">
                                https://ekumbh.aicte-india.org/allbook.php
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
