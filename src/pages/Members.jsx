
import React, { useEffect } from 'react'
import spalsir from "../assets/spalsir.jpg"
import siba from "../assets/siba.jpg"
import supriya from "../assets/supriya.jpg"
import dplb from "../assets/dplb.png"
import amit from "../assets/amit.jpeg"
import shivamsolanki from "../assets/shivamsolanki.jpeg"
import sushil from "../assets/sushil.jpg"
import { ResearchCard } from '../components/ResearchCard'
import { Alumni } from '../components/Alumni'
import back from "../assets/backg-logo.jpg"
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
    name: "Mr. Siba Sankar Sahu",
    image: siba,
    url: "siba.html",
    desg: "Research Scholar",
    email: "sibasankarsahu.rs.cse17@itbhu.ac.in",
    display: true,
    researchgate:"https://www.researchgate.net/profile/Siba-Sankar-Sahu-2",
    dplb:"https://www.researchgate.net/profile/Siba-Sankar-Sahu-2",
    google:"https://scholar.google.co.in/citations?hl=en&user=5HgwNr4AAAAJ"
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
    name: "Mr. Supriya Chanda",
    image: supriya,
    display: true,
    desg: "Research Scholar",
    url: "supriya.html",
    email: "supriyachanda.rs.cse18@itbhu.ac.in",
    google: "https://scholar.google.com/citations?user=wB9WetAAAAAJ&hl=en",
    researchgate: "https://www.researchgate.net/profile/Supriya-Chanda",
    linkedin: "https://www.linkedin.com/in/supriyachandacs/",
    facebook: "https://www.facebook.com/supriya.chanda.5",
    twitter: "https://twitter.com/suplife24"
  },
  {
    name: "Mr. Shivam Solanki",
    image: shivamsolanki,
    display: true,
    url: "shivam.html",
    desg: "M Tech Student",
    email: "shivamsolanki.cse21@iitbhu.ac.in"
  },
  {
    name: "Mr. Amit Yadav",
    image: amit,
    display: true,
    desg: "M Tech Student",
    url: "amit.html",
    email: "shivamsolanki.cse21@iitbhu.ac.in"
  },

]


export const Members = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='font-serif'>
      {/* <img src={back} className='w-full' alt="" /> */}
      {/* <div className='heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8]  text-[#666666]' >MEMBERS</div> */}
      <div className='my-[01%] py-[1%] mx-[12%] flex flex-col justify-center items-start bg-sky-100 rounded-2xl' >
        <div className='text-4xl member-heading  border-b-2 border-cyan-900 w-full text-center pb-[2%] font-sans tracking-wider font-bold text-cyan-900'   >Faculty</div>
        <div className='member-fac-card flex flex-col w-full items-center justify-center px-[12%] my-[1%]' >
          {faculty.map((item) => {
            return (
              <div className='mem-fac flex flex-col font-sans justify-center items-center w-1/2 bg-white rounded-2xl text-[#666666] my-[2%]  p-[2%] ' data-aos="zoom-in" data-aos-duration="1500">
                <div className=' my-[1%] w-3/5 rounded-full'>
                  <img src={item.image} className='rounded-full ' alt="" />
                </div>
                <div className='text-center w-full  flex flex-col mx-[5%] my-[2%] tracking-wider'>
                  <div className='text-[140%] pt-[2%] font-mono  font-bold text-black'>{item.name}</div>
                  <div className='flex font-serif items-center justify-center '>
                    <div className='flex items-center justify-center'>
                      <IoMdSchool size={"1.25rem"} className="mem-icon " />
                    </div>
                    <div className='text-[120%] pl-[3%] pt-[2%] '>
                      {item.title}
                    </div>
                  </div>
                  <div className='flex item-center justify-center'>
                    <div className='prof-email-icon flex items-center justify-start'>
                      <AiOutlineMail size={"1.25rem"} className="mem-icon" />
                    </div>
                    <div className='prof-email special text-[120%] px-[2%] py-[1%] font-serif  pl-[3%] text-[#67b0d1]'>{item.email}</div>
                  </div>
                  <div className='profiles flex mx-auto justify-center pl-[5%] py-[2%]'>
                    {
                      item.google &&
                      <div className='flex justify-center mx-[20%] items-center'>
                        <a href={item.google} target='__blank' >
                          <SiGooglescholar size={"1.25rem"} className="text-black mem-icon hover:scale-150" />
                        </a>
                      </div>

                    }
                    {
                      item.dplb &&
                      <div className='flex flex-shrink-0 justify-center mx-[20%] items-center'>
                        <a href={item.dplb} target='__blank' >
                          <img src={dplb} className="w-5 mem-icon hover:scale-150" />
                        </a>
                      </div>

                    }
                    {
                      item.researchgate &&
                      <div className='flex justify-center mx-[20%] items-center'>
                        <a href={item.researchgate} target='__blank' >
                          <SiResearchgate size={"1.25rem"} className="text-black mem-icon hover:scale-150" />
                        </a>
                      </div>

                    }
                  </div>
                  <div className='hvr-radial-out fac-card-button transition ease-in-out   px-[3%] rounded-2xl mt-[2%] py-[2%]'><a href={item.url} target='__blank' className=' mt-[2%]'>
                    View Profile
                  </a> </div>
                </div>
              </div>


            )
          })}

        </div>
      </div>
      <div className='my-[2%] py-[2%] mx-[12%] flex flex-col justify-center items-start bg-sky-100 rounded-2xl' >
        <div className='text-4xl member-heading  border-b-2 border-cyan-900 w-full text-center pb-[2%] font-sans tracking-wider font-bold text-cyan-900'>Current Members</div>
        <div className='member-rex-box flex justify-center items-center w-full px-[12%] my-[2%]'>
          <div className='flex flex-col w-full member-res   ' data-aos="fade-up" data-aos-duration="1500" >
            {current.map(item => {
              return (<ResearchCard name={item.name} display={item.display} desg={item.desg} image={item.image} url={item.url} email={item.email} google={item.google} dplb={item.dplb} researchgate={item.researchgate} linkedin={item.linkedin} facebook={item.facebook} twitter={item.twitter} />)
            })}
          </div>
        </div>

      </div>
     
      <div className='my-[2%] py-[2%] mx-[12%] flex flex-col justify-center items-start bg-sky-100 rounded-2xl' >
        <div className='text-4xl member-heading  border-b-2 border-cyan-900 w-full text-center pb-[2%] font-sans tracking-wider font-bold text-cyan-900'>Alumni</div>
        <div className='w-full' data-aos="fade-up" data-aos-duration="1500">

          <Alumni />
        </div>
      </div>


    </div>
  )
}
