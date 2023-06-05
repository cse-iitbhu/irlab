import React from 'react'
import { AchievementCard } from './AchievementCard'


export const Achievements = () => {
    const achievements = [
        {
            category:"Institute day",
            title:"MR. TRIBIKRAM PRADHAN",
            date:"Feb 2018",
            desc:'Runner up prize in Poster Presentation on topic "SNAVER:A social network analysis based scholarly venue recommender system."'
        },

    ]
    return (
        <div className='font-serif ' data-aos-duration="1200" data-aos="zoom-in">
            <div className='heading py-[2%] text-center text-[250%] tracking-widest bg-[#f8f8f8] text-[#666666]'>ACHIEVEMENTS</div>
            <div className='px-[8%] flex w-full flex-wrap my-[2%]'>
                {achievements.map((item)=>{ 
                    return(
                        <div className='flex w-[45%] m-[2%]'>
                        <AchievementCard title={item.title} date={item.date} desc={item.desc} category={item.category}/>
                        </div>
                        )
                })}
            </div>
        </div>
    )
}
