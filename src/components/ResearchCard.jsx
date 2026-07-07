import React from 'react'
import { AiOutlineMail } from "react-icons/ai"
import { FaBookOpen } from "react-icons/fa"
import { SiGooglescholar } from "react-icons/si"
import { FiTwitter } from "react-icons/fi"
import { BsGithub } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { SiResearchgate } from "react-icons/si"
import { SiPublons } from "react-icons/si"
import { IoMdSchool } from "react-icons/io"
import dplb from "../assets/dplb.png"


export const ResearchCard = (props) => {
    return (
        <div className=' member-res-card flex justify-start items-center tracking-wider text-[#666666] font-serif rounded-2xl bg-white my-[2%]  p-[2%] '>
            <div className='member-res-card-image w-32 flex-shrink-0'><img src={props.image} className='rounded-full member-res-card-image w-32' alt="" /></div>
            <div className=' flex flex-col  px-[2%] py-[1%] w-full'>
                <h2 className='mb-[2%] font-sans  font-bold tracking-widest text-black'>{props.name}</h2>
                {
                    props.desg &&
                    <div className='flex'>
                        <div className='flex items-center justify-center'>
                            <IoMdSchool size={"1.25rem"} className="mem-icon " />
                        </div>
                        <div className='whitespace-normal w-full flex  items-center'>
                            <h2 className=' pl-[3%] p-[1%] whitespace-normal'>{props.desg}</h2>
                        </div>
                    </div>
                }
                {props.email &&
                    <div className='flex'>
                        <div className='flex items-center justify-start'>
                            <AiOutlineMail size={"1.25rem"} className="mem-icon" />
                        </div>
                        <div className='prof-email whitespace-normal w-full flex  items-center'>
                            <h2 className='pl-[3%] whitespace-normal   text-[#67b0d1]'>{props.email}</h2>
                        </div>
                    </div>
                }
                {
                    props.year &&
                    <div className='flex'>
                        <div className='flex items-center justify-center'>
                            <FaBookOpen size={"1.25rem"} className="mem-icon " />
                        </div>
                        <div className='whitespace-normal w-full flex  items-center'>
                            <h2 className=' pl-[3%] pb-[2%] p-[1%] whitespace-normal'>{props.year}</h2>
                        </div>
                    </div>
                }
                <div className='profiles flex  pl-[5%] pt-[3%] '>
                    {
                        props.google &&
                        <div className='flex  pr-[3%] items-center'>
                            <a href={props.google} target='__blank' >
                                <SiGooglescholar size={"1.25rem"} className="mem-icon text-black transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }
                    {
                        props.researchgate &&
                        <div className='flex  pr-[3%] items-center'>
                            <a href={props.researchgate} target='__blank' >
                                <SiResearchgate size={"1.25rem"} className="mem-icon text-black transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }
                    {
                        props.linkedin &&
                        <div className='flex pr-[3%] items-center'>
                            <a href={props.linkedin} target='__blank' >
                                <BsLinkedin size={"1.25rem"} className="mem-icon text-black transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }
                    {
                        props.dplb &&
                        <div className='flex  flex-shrink-0 pr-[3%] items-center'>
                            <a href={props.dplb} target='__blank' >
                                <img src={dplb} className="w-5 mem-icon  transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }
                    {
                        props.github &&
                        <div className='flex pr-[3%] items-center'>
                            <a href={props.github} target='__blank' >
                                <BsGithub size={"1.25rem"} className="mem-icon text-black transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }
                    {
                        props.twitter &&
                        <div className='flex  pr-[3%] items-center'>
                            <a href={props.twitter} target='__blank' >
                                <FiTwitter size={"1.25rem"} className="mem-icon text-black transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }
                    {
                        props.facebook &&
                        <div className='flex  pr-[3%] items-center'>
                            <a href={props.facebook} target='__blank' >
                                <BsFacebook size={"1.25rem"} className="mem-icon text-black transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }
                    {
                        props.publons &&
                        <div className='flex pr-[3%] items-center'>
                            <a href={props.publons} target='__blank' >
                                <SiPublons size={"1.25rem"} className="mem-icon text-black transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }
                </div>
                {props.display &&
                    <a href={props.url} target='__blank' className=' mt-[2%]'>
                        <button className='hvr-radial-out card-button font-sans tracking-wider transition ease-in-out  hover:text-white px-[3%] rounded-2xl py-[1%] w-[14rem]'>
                            View Profile
                        </button>
                    </a>
                }
            </div>
        </div>
    )
}
