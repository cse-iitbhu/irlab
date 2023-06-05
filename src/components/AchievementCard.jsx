import React from 'react'

export const AchievementCard = (props) => {
  return (
    <div className='a-card w-full text-[#67b0d1] hover:text-green-600 hover:border-green-500 shadow-md shadow-sky-100 border-2 rounded-md border-[#2098D1] p-[2%] m-[1%] flex flex-col transition ease-in-out hover:rounded-md hover:shadow-md hover:shadow-green-900'>
        <h3 className='achi-category text-[120%]'>
            {props.category}
        </h3>
        <h1 className='achi-title text-[130%] tracking-widest pb-[2%] font-bold '>
        {props.title}

        </h1>
        <h2 className='achi-desc text-[110%] text-[#666666] pb-[2%]'>
        {props.desc}

        </h2>
        <h2 className='achi-date text-[120%]  pb-[2%]'>

        {props.date}
        </h2>
    </div>
  )
}
