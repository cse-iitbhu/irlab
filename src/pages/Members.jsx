import React, { useEffect } from 'react'
import spalsir from "../assets/spalsir.jpg"
import dplb from "../assets/dplb.png"
import akhilesh from "../assets/akhilesh.jpg"
import krishna from "../assets/krishna.jpeg"
import arjun from "../assets/arjun.jpg"
import narendra from "../assets/narendra.jpeg"
import yamini from "../assets/yamini.jpeg"
import abhijeet from "../assets/abhijeet.jpeg"
import abhinay from "../assets/abhinay.jpeg"
import sushil from "../assets/sushil.jpg"
import { Alumni } from '../components/Alumni'
import { AiOutlineMail } from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { SiGooglescholar } from "react-icons/si"
import { SiResearchgate } from 'react-icons/si'
import { IoMdSchool } from 'react-icons/io'

const faculty = [
  {
    name: "Dr. Sukomal Pal",
    title: "Associate Professor",
    image: spalsir,
    email: "spal.cse@iitbhu.ac.in",
    url: "spal.html",
    google: "https://scholar.google.co.in/citations?user=NYgqfzoAAAAJ&hl=en",
    dplb: "https://dblp.uni-trier.de/pid/06/3884.html",
    researchgate: "https://www.researchgate.net/profile/Sukomal-Pal-2"
  },
]

const current = [
  {
    name: "Ms. Krishna Tewari",
    image: krishna,
    desg: "Research Scholar",
    url: "https://www.linkedin.com/in/-krishna-tewari/",
    display: true,
    email: "krishnatewari.rs.cse24@iitbhu.ac.in"
  },
  {
    name: "Mr. Arjun Mukherjee",
    image: arjun,
    desg: "Research Scholar",
    url: "https://www.linkedin.com/in/arjun-mukherjee-04702755/",
    display: true,
    email: "arjunmukherjee.rs.cse23@itbhu.ac.in"
  },
  {
    name: "Mr. Sushil Kulkarni",
    image: sushil,
    desg: "Research Scholar",
    url: "sushil.html",
    display: true,
    email: "svk2993@gmail.com"
  },
  {
    name: "Mr. Narendra Kumar",
    image: narendra,
    desg: "IDD",
    url: "https://www.linkedin.com/in/narendra-kumar-3b30791a7/",
    display: true,
    email: "narendra.kumar.cse20@iitbhu.ac.in"
  },
  {
    name: "Ms. Yamini Jha",
    image: yamini,
    desg: "IDD",
    url: "https://www.linkedin.com/in/yamini-jha-968078248/",
    display: true,
    email: "yamini.jha.cse20@iitbhu.ac.in"
  },
  {
    name: "Mr. Abhijeet Panihar",
    image: abhijeet,
    desg: "IDD",
    url: "https://www.linkedin.com/in/abhijeet-panihar-046792284/",
    display: true,
    email: "abhijeet.panihar.cse20@itbhu.ac.in"
  },
  {
    name: "Mr. K Abhinay Paul",
    image: abhinay,
    desg: "IDD",
    url: "https://www.linkedin.com/in/abhinay-paul-316a13203/",
    display: true,
    email: "kabhinay.paul.cse20@itbhu.ac.in"
  },
  {
    name: "Mr. Akhilesh Yadav",
    image: akhilesh,
    display: true,
    desg: "Project Staff",
    url: "https://www.linkedin.com/in/akhilesh-yadav-696032224/",
    email: "akkiyadaw55@gmail.com"
  },
]

export const Members = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    AOS.init()
  }, [])

  return (
    <div className='font-serif'>
      
      {/* Faculty Section */}
      <div className='my-[1%] py-[1%] mx-[12%] flex flex-col justify-center items-start bg-sky-100 rounded-2xl'>
        <div className='text-4xl member-heading border-b-2 border-cyan-900 w-full text-center pb-[2%] font-sans tracking-wider font-bold text-cyan-900'>
          Faculty
        </div>
        <div className='member-fac-card flex flex-col w-full items-center justify-center px-[12%] my-[1%]'>
          {faculty.map((item) => (
            <div className='mem-fac flex flex-col font-sans justify-center items-center w-1/2 bg-white rounded-2xl text-[#666666] my-[2%] p-[2%]' data-aos="zoom-in" data-aos-duration="1500">
              <div className='my-[1%] w-3/5 rounded-full'>
                <img src={item.image} className='rounded-full' alt="" />
              </div>
              <div className='text-center w-full flex flex-col mx-[5%] my-[2%] tracking-wider'>
                <div className='text-[140%] pt-[2%] font-mono font-bold text-black'>{item.name}</div>
                  <div className='flex font-serif items-center justify-center'>
                    <div className='flex items-center justify-center'>
                      <IoMdSchool size={"1.25rem"} className="mem-icon" />
                  </div>
                  <div className='text-[120%] pl-[3%] pt-[2%]'>{item.title}</div>
                </div>
                <div className='flex item-center justify-center'>
                  <div className='prof-email-icon flex items-center justify-start'>
                    <AiOutlineMail size={"1.25rem"} className="mem-icon" />
                  </div>
                  <div className='prof-email special text-[120%] px-[2%] py-[1%] font-serif pl-[3%] text-[#67b0d1]'>{item.email}</div>
                </div>
                <div className='profiles flex mx-auto justify-center pl-[5%] py-[2%]' >
                  {item.google && (
                    <div className='flex justify-center mx-[20%] items-center'>
                      <a href={item.google} target='__blank'>
                        <SiGooglescholar size={"1.25rem"} className="text-black mem-icon hover:scale-150" />
                      </a>
                    </div>
                  )}
                  {item.dplb && (
                    <div className='flex flex-shrink-0 justify-center mx-[20%] items-center'>
                      <a href={item.dplb} target='__blank'>
                        <img src={dplb} alt='' className="w-5 mem-icon hover:scale-150" />
                      </a>
                    </div>
                  )}
                  {item.researchgate && (
                    <div className='flex justify-center mx-[20%] items-center'>
                      <a href={item.researchgate} target='__blank'>
                        <SiResearchgate size={"1.25rem"} className="text-black mem-icon hover:scale-150" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Members Section */}
      <div className='my-[2%] py-[2%] mx-[12%] flex flex-col justify-center items-start bg-sky-100 rounded-2xl'>
        <div className='text-4xl member-heading border-b-2 border-cyan-900 w-full text-center pb-[2%] font-sans tracking-wider font-bold text-cyan-900'>
          Current Members
        </div>
        <div className='member-rex-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-[12%] my-[2%]' data-aos="fade-up" data-aos-duration="1500">
          {current.map(item => {
            return (
              <div className='flex flex-col items-center justify-center bg-white rounded-2xl text-[#666666] p-4 sm:p-6 md:p-[2%]'>
                <div className='my-[1%] w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden'>
                  <img src={item.image} className='w-full h-full object-cover rounded-full' alt={item.name} />
                </div>
                <div className='text-center w-full flex flex-col mx-[5%] my-[2%] tracking-wider'>
                  <div className='text-[100%] sm:text-[120%] md:text-[120%] pt-[2%] font-mono font-bold text-black'>
                    {/* Wrap the name in an anchor tag */}
                    <a href={item.url} className="hover:underline" target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  </div>
                  <div className='text-[70%] sm:text-[80%] md:text-[90%] pt-[1%] font-serif'>
                    {item.desg}
                  </div>
                  <div className='flex items-center justify-center pt-[1%]'>
                    <div className='prof-email-icon flex items-center justify-start'>
                      <AiOutlineMail size={"1rem"} className="mem-icon" />
                    </div>
                    <div className='prof-email special text-[80%] sm:text-[85%] md:text-[80%] px-[2%] py-[1%] font-serif pl-[3%] text-[#67b0d1] max-w-full break-words'>
                      {item.email}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Alumni Section */}
      <div className='my-[2%] py-[2%] mx-[12%] flex flex-col justify-center items-start bg-sky-100 rounded-2xl'>
        <div className='text-4xl member-heading border-b-2 border-cyan-900 w-full text-center pb-[2%] font-sans tracking-wider font-bold text-cyan-900'>
          Alumni
        </div>
        <div className='w-full' data-aos="fade-up" data-aos-duration="1500">
          <Alumni />
        </div>
      </div>
    </div>
  )
}
