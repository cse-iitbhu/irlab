import React from 'react'
import { SlPeople } from "react-icons/sl"


export const Rtopics = (props) => {
 
  return (
    <div className=' transition ease-in-out hover:scale-110 research-c border-b-2  shadow-[rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.06)_0px_2px_4px_-1px]  border-t-2 border-sky-600 flex flex-col  justify-start items-center '>
      <div className='flex justify-center items-center  '>
        <img src={props.image} alt={props.title} />

      </div>
      <div className='mx-[2%] p-[5%] text-center h-full'>
        <div className='research-title tracking-wider font-bold font-mono text-[130%] mt-[2%] px-[3%]  text-center'>{props.title}</div>
        <div className='research-desc text-[110%] my-[2%] py-[3%] px-[2%] text-[#666666]'>{props.desc}</div>
        <div className='flex text-[#67b0d1] font-bold  justify-center items-center'>
          <SlPeople size={"1.25rem"} className="mem-icon mr-3" />
          <div className='research-mem text-[110%] tracking-wider mt-[2%] text-[#67b0d1]'>{props.members}</div>
        </div>

      </div>
    </div>
  )
}
