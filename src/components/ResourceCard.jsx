import React from 'react'
import { useEffect } from 'react'
import AOS from "aos"

export const ResourceCard = (props) => {
    useEffect(()=>{
        AOS.init()
      },[])
    return (
        <div data-aos="zoom-in" data-aos-duration="1200" className='resource-c  text-[#666666] flex flex-col border-2 justify-start mx-[5%] p-[5%] my-[10%] hover:shadow-[rgba(0,0,0,0.25)_0px_25px_50px_-12px] shadow-[rgba(0,0,0,0.09)_0px_2px_1px,rgba(0,0,0,0.09)_0px_4px_2px,rgba(0,0,0,0.09)_0px_8px_4px,rgba(0,0,0,0.09)_0px_16px_8px,rgba(0,0,0,0.09)_0px_32px_16px] '>
            <div className='resource-title my-[3%] text-[110%] text-[#67b0d1] font-bold tracking-wider'> 
            {props.title}</div>
            <div>
                <img src={props.logo} />
            </div>
            <div className='resource-desc text-left mt-[2%] '>
                {props.desc}</div>
            <div className='resource-mem text-left mt-[2%] '>
                <span className='font-bold'>Members: </span>
                {props.members}</div>
            <div className='resource-sup mt-[2%] '>
                <span className='font-bold  text-left'>Supervisor: </span>
                {props.supervisor}
            </div>
            <div className='resource-type mt-[2%] '>
                <span className='font-bold  text-left'>Type: </span>
                {props.type}
            </div>
            <a href={props.url} target='__blank'>
                <img src={props.image} alt="" className='resource-image ' />
            </a>
        </div>
    )
}
